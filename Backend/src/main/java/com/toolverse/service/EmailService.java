package com.toolverse.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {
    
    private final JavaMailSender mailSender;
    
    @Value("${spring.mail.username}")
    private String fromEmail;
    
    @Value("${app.frontend.url:http://localhost:5173}")
    private String frontendUrl;
    
    public void sendVerificationEmail(String toEmail, String token) {
        try {
            String verificationUrl = frontendUrl + "/verify-email?token=" + token;
            
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(toEmail);
            message.setSubject("Verify Your ToolVerse Account");
            message.setText("Please click the following link to verify your email address:\n\n" +
                    verificationUrl + "\n\n" +
                    "This link will expire in 1 hour.\n\n" +
                    "If you didn't create an account, please ignore this email.");
            
            mailSender.send(message);
            log.info("Verification email sent to: {}", toEmail);
        } catch (Exception e) {
            log.error("Failed to send verification email to {}: {}", toEmail, e.getMessage());
            throw new RuntimeException("Failed to send verification email");
        }
    }
    
    public void sendPasswordResetEmail(String toEmail, String token) {
        try {
            String resetUrl = frontendUrl + "/reset-password?token=" + token;
            
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(toEmail);
            message.setSubject("Reset Your ToolVerse Password");
            message.setText("Please click the following link to reset your password:\n\n" +
                    resetUrl + "\n\n" +
                    "This link will expire in 1 hour.\n\n" +
                    "If you didn't request a password reset, please ignore this email.");
            
            mailSender.send(message);
            log.info("Password reset email sent to: {}", toEmail);
        } catch (Exception e) {
            log.error("Failed to send password reset email to {}: {}", toEmail, e.getMessage());
            throw new RuntimeException("Failed to send password reset email");
        }
    }
}
