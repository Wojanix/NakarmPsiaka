package com.example.nakarmpsiaka.models.repositories;

import com.example.nakarmpsiaka.models.entities.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {
    List<Token> findTokensByUser_IdAndRevokedIsFalse(long userId);
    Optional<Token> findByToken(String token);
}
