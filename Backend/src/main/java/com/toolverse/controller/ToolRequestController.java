package com.toolverse.controller;

import com.toolverse.model.ToolRequest;
import com.toolverse.service.ToolRequestService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/requests")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
public class ToolRequestController {
    
    private final ToolRequestService toolRequestService;
    
    @GetMapping
    public ResponseEntity<List<ToolRequest>> getAllRequests() {
        List<ToolRequest> requests = toolRequestService.getAllRequests();
        return ResponseEntity.ok(requests);
    }
    
    @GetMapping("/status/{status}")
    public ResponseEntity<List<ToolRequest>> getRequestsByStatus(@PathVariable @NonNull String status) {
        List<ToolRequest> requests = toolRequestService.getRequestsByStatus(status);
        return ResponseEntity.ok(requests);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ToolRequest> getRequestById(@PathVariable @NonNull String id) {
        ToolRequest request = toolRequestService.getRequestById(id);
        if (request != null) {
            return ResponseEntity.ok(request);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<ToolRequest> submitRequest(@RequestBody @NonNull ToolRequest request) {
        ToolRequest savedRequest = toolRequestService.submitRequest(request);
        return ResponseEntity.ok(savedRequest);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ToolRequest> updateRequestStatus(@PathVariable @NonNull String id, @RequestParam @NonNull String status) {
        ToolRequest updatedRequest = toolRequestService.updateRequestStatus(id, status);
        if (updatedRequest != null) {
            return ResponseEntity.ok(updatedRequest);
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRequest(@PathVariable @NonNull String id) {
        toolRequestService.deleteRequest(id);
        return ResponseEntity.noContent().build();
    }
}
