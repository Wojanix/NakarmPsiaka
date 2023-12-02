package com.example.nakarmpsiaka.controllers;

import com.example.nakarmpsiaka.services.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/test")
public class TestController {
    private final JwtService jwtService;

    @GetMapping
    public ResponseEntity<String> sayHello(@RequestHeader HttpHeaders headers) {
        String email = jwtService.getEmailFromToken(headers);
        return ResponseEntity.ok("cześć " + email);
    }
}
