package com.toolverse.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class VerificationRequest {
    
    @NotBlank(message = "Token is required")
    private String token;
}
