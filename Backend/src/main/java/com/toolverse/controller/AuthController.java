package com.toolverse.controller;

import com.toolverse.config.JwtUtil;
import com.toolverse.dto.AuthResponse;
import com.toolverse.dto.LoginRequest;
import com.toolverse.dto.RegisterRequest;
import com.toolverse.dto.UpdateProfileRequest;
import com.toolverse.model.User;
import com.toolverse.service.AuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    
    private final AuthenticationService authService;
    private final JwtUtil jwtUtil;
    
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest registerRequest) {
        try {
            User user = authService.registerUser(
                registerRequest.getUsername(),
                registerRequest.getEmail(),
                registerRequest.getPassword(),
                registerRequest.getFirstName(),
                registerRequest.getLastName()
            );
            
            String token = jwtUtil.generateJwtToken(user.getUsername());
            
            AuthResponse response = new AuthResponse(
                token,
                user.getUsername(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole()
            );
            
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            log.error("Registration failed: {}", e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            User user = authService.authenticateUser(
                loginRequest.getUsername(),
                loginRequest.getPassword()
            );
            
            String token = jwtUtil.generateJwtToken(user.getUsername());
            
            AuthResponse response = new AuthResponse(
                token,
                user.getUsername(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole()
            );
            
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            log.error("Login failed: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @GetMapping("/me")
    public ResponseEntity<AuthResponse> getCurrentUser(@RequestParam String username) {
        try {
            User user = authService.getUserByUsername(username);
            
            AuthResponse response = new AuthResponse(
                null,
                user.getUsername(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole()
            );
            
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            log.error("Get current user failed: {}", e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/me")
    public ResponseEntity<AuthResponse> updateCurrentUser(
            @RequestParam String username,
            @Valid @RequestBody UpdateProfileRequest updateProfileRequest
    ) {
        try {
            User userDetails = User.builder()
                    .email(updateProfileRequest.getEmail())
                    .firstName(updateProfileRequest.getFirstName())
                    .lastName(updateProfileRequest.getLastName())
                    .build();

            User updatedUser = authService.updateUser(username, userDetails);

            AuthResponse response = new AuthResponse(
                    null,
                    updatedUser.getUsername(),
                    updatedUser.getEmail(),
                    updatedUser.getFirstName(),
                    updatedUser.getLastName(),
                    updatedUser.getRole()
            );

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            log.error("Update current user failed: {}", e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
}
