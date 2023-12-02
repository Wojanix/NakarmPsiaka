package com.example.nakarmpsiaka.services;

import com.example.nakarmpsiaka.constants.HttpMessagesConsts;
import com.example.nakarmpsiaka.models.entities.Token;
import com.example.nakarmpsiaka.models.entities.User;
import com.example.nakarmpsiaka.models.enums.Role;
import com.example.nakarmpsiaka.models.enums.TokenType;
import com.example.nakarmpsiaka.models.repositories.TokenRepository;
import com.example.nakarmpsiaka.models.repositories.UserRepository;
import com.example.nakarmpsiaka.models.requests.AuthenticationRequest;
import com.example.nakarmpsiaka.models.requests.RegisterRequest;
import com.example.nakarmpsiaka.models.responses.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        repository.save(user);

        User savedUser = repository.save(user);
        String jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        Optional<User> userOptional = repository.findByEmail(request.getEmail());

        // shit maybe removed in future
        if (userOptional.isEmpty()) return AuthenticationResponse.builder().token(HttpMessagesConsts.FORBIDEN).build();
        User user = userOptional.get();

        String jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens(user); // it allows only one JWT token to exist, so the user can be logged in only to one device, maybe it will be changed in the future
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    // revokes every token from the user
    private void revokeAllUserTokens(User user) {
        List<Token> validUserToken = tokenRepository.findTokensByUser_IdAndRevokedIsFalse(user.getId());
        if (validUserToken.isEmpty()) return;
        validUserToken.forEach(token -> {
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserToken);
    }

    // saving user tokens to database
    private void saveUserToken(User user, String jwtToken) {
        Token token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.ACCESS_TOKEN)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }
}
