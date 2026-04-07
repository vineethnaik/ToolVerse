package com.toolverse.repository;

import com.toolverse.model.ToolRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToolRequestRepository extends MongoRepository<ToolRequest, String> {
    
    List<ToolRequest> findByStatus(String status);
    
    List<ToolRequest> findByEmailIgnoreCase(String email);
}
