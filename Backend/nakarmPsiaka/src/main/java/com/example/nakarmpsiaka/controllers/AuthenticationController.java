package com.example.nakarmpsiaka.controllers;

import com.example.nakarmpsiaka.models.requests.AuthenticationRequest;
import com.example.nakarmpsiaka.models.requests.RegisterRequest;
import com.example.nakarmpsiaka.models.responses.AuthenticationResponse;
import com.example.nakarmpsiaka.services.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @PostMapping("/authenticate")
    public ResponseEntity<?> register(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        AuthenticationResponse response1 = authenticationService.refreshToken(request, response);
        if (response1.getRefreshToken().equals("error")) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Refresh token revoked");
        return ResponseEntity.ok(response1);
    }
}
