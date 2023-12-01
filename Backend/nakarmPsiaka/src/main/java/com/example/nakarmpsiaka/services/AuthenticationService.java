package com.example.nakarmpsiaka.services;

import com.example.nakarmpsiaka.constants.HttpMessagesConsts;
import com.example.nakarmpsiaka.models.entities.User;
import com.example.nakarmpsiaka.models.enums.Role;
import com.example.nakarmpsiaka.models.repositories.UserRepository;
import com.example.nakarmpsiaka.models.requests.AuthenticationRequest;
import com.example.nakarmpsiaka.models.requests.RegisterRequest;
import com.example.nakarmpsiaka.models.responses.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
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
        String jwtToken = jwtService.generateToken(user);
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
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
