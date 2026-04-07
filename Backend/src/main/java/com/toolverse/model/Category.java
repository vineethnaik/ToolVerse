package com.toolverse.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "categories")
public class Category {
    @Id
    private String id;
    
    private String name;
    
    private String icon;
    
    private Integer count;
    
    private String color;
    
    private LocalDateTime createdAt;
    
    private LocalDateTime updatedAt;
    
    // Pre-update method to update timestamp
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
