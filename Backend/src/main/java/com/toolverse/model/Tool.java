package com.toolverse.model;

import com.toolverse.model.enums.PricingModel;
import com.toolverse.model.enums.ToolStatus;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "tools")
public class Tool {
    @Id
    private String id;
    
    private String name;
    
    private String description;
    
    private String category;
    
    private List<String> tags;
    
    private PricingModel pricingModel;
    
    private boolean isFree;
    
    private Integer dailyCredits;
    
    private String creditUnit;
    
    private String primaryUseCase;
    
    private String websiteUrl;
    
    private String logoUrl;
    
    private List<String> pros;
    
    private List<String> limitations;
    
    private List<String> alternatives;
    
    private ToolStatus status;
    
    private boolean featured;
    
    private boolean trending;
    
    private boolean isNew;
    
    private LocalDateTime createdAt;
    
    private LocalDateTime updatedAt;
    
    // Pre-update method to update timestamp
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
