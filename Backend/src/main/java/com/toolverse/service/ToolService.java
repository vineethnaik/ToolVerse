package com.toolverse.service;

import com.toolverse.model.Tool;
import com.toolverse.repository.ToolRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ToolService {
    
    private final ToolRepository toolRepository;
    
    public Page<Tool> getAllTools(@NonNull Pageable pageable) {
        return toolRepository.findAll(pageable);
    }
    
    public List<Tool> searchTools(@NonNull String query) {
        if (query.trim().isEmpty()) {
            return toolRepository.findAll();
        }
        return toolRepository.findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(query, query);
    }
    
    public Tool getToolById(@NonNull String id) {
        return toolRepository.findById(id).orElse(null);
    }
    
    public List<Tool> getToolsByCategory(@NonNull String category) {
        return toolRepository.findByCategory(category);
    }
    
    public List<Tool> getFeaturedTools() {
        return toolRepository.findByFeaturedTrue();
    }
    
    public List<Tool> getTrendingTools() {
        return toolRepository.findByTrendingTrue();
    }
    
    public List<Tool> getNewTools() {
        return toolRepository.findByIsNewTrue();
    }
    
    public List<Tool> getFreeTools() {
        return toolRepository.findByPricingModel("FREE");
    }
    
    public Tool saveTool(@NonNull Tool tool) {
        tool.preUpdate();
        return toolRepository.save(tool);
    }
    
    public Tool updateTool(@NonNull String id, @NonNull Tool tool) {
        Tool existingTool = getToolById(id);
        if (existingTool != null) {
            tool.setId(id);
            tool.preUpdate();
            return toolRepository.save(tool);
        }
        return null;
    }
    
    public void deleteTool(@NonNull String id) {
        toolRepository.deleteById(id);
    }
}
