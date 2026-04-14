package com.toolverse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    
    private String token;
    private String type = "Bearer";
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String role;
    private boolean emailVerified;
    
    public AuthResponse(String token, String username, String email, String firstName, String lastName, String role, boolean emailVerified) {
        this.token = token;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.emailVerified = emailVerified;
    }
}
