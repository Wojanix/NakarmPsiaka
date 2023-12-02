package com.example.nakarmpsiaka.services;

import com.example.nakarmpsiaka.models.entities.Token;
import com.example.nakarmpsiaka.models.repositories.TokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {
    private final TokenRepository tokenRepository;

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        jwt = authHeader.substring(7);

        Optional<Token> optionalToken = tokenRepository.findByToken(jwt);
        if (optionalToken.isEmpty()) return;
        Token storedToken = optionalToken.get();

        // revokes token
        storedToken.setRevoked(true);
        tokenRepository.save(storedToken);
    }
}
