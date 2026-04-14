package com.toolverse.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Base64;

@Service
@RequiredArgsConstructor
@Slf4j
public class VerificationTokenService {
    
    @Value("${verification.token.expiration:3600000}")
    private long tokenExpirationMs;
    
    private final SecureRandom secureRandom = new SecureRandom();
    
    public String generateVerificationToken() {
        byte[] randomBytes = new byte[32];
        secureRandom.nextBytes(randomBytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(randomBytes);
    }
    
    public LocalDateTime getTokenExpirationTime() {
        return LocalDateTime.now().plusNanos(tokenExpirationMs * 1_000_000);
    }
    
    public boolean isTokenExpired(LocalDateTime expirationTime) {
        return expirationTime == null || LocalDateTime.now().isAfter(expirationTime);
    }
}
