package com.toolverse.service;

import com.toolverse.model.User;
import com.toolverse.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthenticationService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;
    private final VerificationTokenService tokenService;
    
    public User registerUser(String username, String email, String password, String firstName, String lastName) {
        if (userRepository.existsByUsername(username)) {
            throw new RuntimeException("Username already exists");
        }
        
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already exists");
        }
        
        String verificationToken = tokenService.generateVerificationToken();
        
        User user = User.builder()
                .username(username)
                .email(email)
                .password(passwordEncoder.encode(password))
                .firstName(firstName)
                .lastName(lastName)
                .role("USER")
                .enabled(false) // Disabled until email is verified
                .emailVerificationToken(verificationToken)
                .emailVerificationTokenExpires(tokenService.getTokenExpirationTime())
                .build();
        
        user.preCreate();
        User savedUser = userRepository.save(user);
        
        // Send verification email
        try {
            emailService.sendVerificationEmail(email, verificationToken);
        } catch (Exception e) {
            log.error("Failed to send verification email for user {}: {}", username, e.getMessage());
            // Continue with registration even if email fails
        }
        
        log.info("User registered successfully (verification required): {}", username);
        return savedUser;
    }
    
    public User authenticateUser(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Invalid username or password"));
        
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }
        
        if (!user.isEnabled()) {
            throw new RuntimeException("User account is disabled");
        }
        
        // Update last login
        user.setLastLogin(LocalDateTime.now());
        user.preUpdate();
        userRepository.save(user);
        
        log.info("User authenticated successfully: {}", username);
        return user;
    }
    
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
    
    public User updateUser(String username, User userDetails) {
        User user = getUserByUsername(username);
        
        if (userDetails.getFirstName() != null) {
            user.setFirstName(userDetails.getFirstName());
        }
        if (userDetails.getLastName() != null) {
            user.setLastName(userDetails.getLastName());
        }
        if (userDetails.getEmail() != null && !userDetails.getEmail().equals(user.getEmail())) {
            if (userRepository.existsByEmail(userDetails.getEmail())) {
                throw new RuntimeException("Email already exists");
            }
            user.setEmail(userDetails.getEmail());
        }
        
        user.preUpdate();
        return userRepository.save(user);
    }
    
    public void deleteUser(String username) {
        User user = getUserByUsername(username);
        userRepository.delete(user);
        log.info("User deleted successfully: {}", username);
    }
    
    public boolean verifyEmail(String token) {
        User user = userRepository.findByEmailVerificationToken(token)
                .orElse(null);
        
        if (user == null) {
            log.warn("Invalid verification token provided");
            return false;
        }
        
        if (tokenService.isTokenExpired(user.getEmailVerificationTokenExpires())) {
            log.warn("Expired verification token provided for user: {}", user.getUsername());
            return false;
        }
        
        user.setEmailVerified(true);
        user.setEnabled(true);
        user.setEmailVerificationToken(null);
        user.setEmailVerificationTokenExpires(null);
        user.preUpdate();
        
        userRepository.save(user);
        log.info("Email verified successfully for user: {}", user.getUsername());
        return true;
    }
    
    public void resendVerificationEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Email not found"));
        
        if (user.isEmailVerified()) {
            throw new RuntimeException("Email is already verified");
        }
        
        String newToken = tokenService.generateVerificationToken();
        user.setEmailVerificationToken(newToken);
        user.setEmailVerificationTokenExpires(tokenService.getTokenExpirationTime());
        user.preUpdate();
        
        userRepository.save(user);
        
        emailService.sendVerificationEmail(email, newToken);
        log.info("Verification email resent for user: {}", user.getUsername());
    }
}
