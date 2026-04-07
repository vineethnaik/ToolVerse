package com.toolverse.controller;

import com.toolverse.model.Tool;
import com.toolverse.service.ToolService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tools")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
public class ToolController {
    
    private final ToolService toolService;
    
    @GetMapping
    public ResponseEntity<Page<Tool>> getAllTools(@NonNull Pageable pageable) {
        Page<Tool> tools = toolService.getAllTools(pageable);
        return ResponseEntity.ok(tools);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<Tool>> searchTools(@RequestParam @NonNull String q) {
        List<Tool> tools = toolService.searchTools(q);
        return ResponseEntity.ok(tools);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Tool> getToolById(@PathVariable @NonNull String id) {
        Tool tool = toolService.getToolById(id);
        if (tool != null) {
            return ResponseEntity.ok(tool);
        }
        return ResponseEntity.notFound().build();
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Tool>> getToolsByCategory(@PathVariable @NonNull String category) {
        List<Tool> tools = toolService.getToolsByCategory(category);
        return ResponseEntity.ok(tools);
    }
    
    @GetMapping("/featured")
    public ResponseEntity<List<Tool>> getFeaturedTools() {
        List<Tool> tools = toolService.getFeaturedTools();
        return ResponseEntity.ok(tools);
    }
    
    @GetMapping("/free")
    public ResponseEntity<List<Tool>> getFreeTools() {
        List<Tool> tools = toolService.getFreeTools();
        return ResponseEntity.ok(tools);
    }
    
    @PostMapping
    public ResponseEntity<Tool> createTool(@RequestBody @NonNull Tool tool) {
        Tool savedTool = toolService.saveTool(tool);
        return ResponseEntity.ok(savedTool);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Tool> updateTool(@PathVariable @NonNull String id, @RequestBody @NonNull Tool tool) {
        Tool updatedTool = toolService.updateTool(id, tool);
        if (updatedTool != null) {
            return ResponseEntity.ok(updatedTool);
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTool(@PathVariable @NonNull String id) {
        toolService.deleteTool(id);
        return ResponseEntity.noContent().build();
    }
}
