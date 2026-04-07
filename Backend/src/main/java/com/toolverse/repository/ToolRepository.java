package com.toolverse.repository;

import com.toolverse.model.Tool;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToolRepository extends MongoRepository<Tool, String> {
    
    List<Tool> findByCategory(String category);
    
    List<Tool> findByPricingModel(String pricingModel);
    
    List<Tool> findByStatus(String status);
    
    List<Tool> findByFeaturedTrue();
    
    List<Tool> findByTrendingTrue();
    
    List<Tool> findByIsNewTrue();
    
    List<Tool> findByNameContainingIgnoreCase(String name);
    
    List<Tool> findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String name, String description);
}
