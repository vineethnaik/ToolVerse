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
@Document(collection = "tool_requests")
public class ToolRequest {
    @Id
    private String id;
    
    private String toolIdea;
    
    private String problemItSolves;
    
    private String desiredCategory;
    
    private String email;
    
    private String status;
    
    private LocalDateTime createdAt;
    
    private LocalDateTime updatedAt;
    
    // Pre-update method to update timestamp
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
