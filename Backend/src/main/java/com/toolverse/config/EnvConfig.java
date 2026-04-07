package com.toolverse.config;

import org.springframework.context.annotation.Configuration;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

@Configuration
public class EnvConfig {
    
    public EnvConfig() {
        // Load .env file if it exists
        File file = new File(".env");
        if (file.exists()) {
            Properties props = new Properties();
            try (FileInputStream fis = new FileInputStream(file)) {
                props.load(fis);
            } catch (IOException e) {
                System.out.println("Could not load .env file: " + e.getMessage());
            }
            
            // Set system properties from .env
            props.forEach((key, value) -> {
                System.setProperty(key.toString(), value.toString());
            });
        }
    }
}
