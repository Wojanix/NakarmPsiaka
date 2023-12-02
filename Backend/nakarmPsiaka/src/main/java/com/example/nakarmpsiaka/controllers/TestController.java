package com.example.nakarmpsiaka.controllers;

import com.example.nakarmpsiaka.services.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/test")
public class TestController {
    private final JwtService jwtService;

    @GetMapping
    public ResponseEntity<String> sayHello(@RequestHeader HttpHeaders headers) {
        List<String> authorizationHeaders = headers.get("Authorization");

        if (authorizationHeaders == null || authorizationHeaders.isEmpty()) {
            return ResponseEntity.badRequest().body("Authorization header is missing");
        }

        String token = authorizationHeaders.get(0);
        String jwt = token.replace("Bearer", "").trim();
        String email = jwtService.getUserEmailByToken(jwt);

        return ResponseEntity.ok("cześć " + email);
    }
}
