package com.toolverse.service;

import com.toolverse.model.ToolRequest;
import com.toolverse.repository.ToolRequestRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ToolRequestService {
    
    private final ToolRequestRepository toolRequestRepository;
    
    public List<ToolRequest> getAllRequests() {
        return toolRequestRepository.findAll();
    }
    
    public List<ToolRequest> getRequestsByStatus(@NonNull String status) {
        return toolRequestRepository.findByStatus(status);
    }
    
    public List<ToolRequest> getRequestsByEmail(@NonNull String email) {
        return toolRequestRepository.findByEmailIgnoreCase(email);
    }
    
    public ToolRequest getRequestById(@NonNull String id) {
        return toolRequestRepository.findById(id).orElse(null);
    }
    
    public ToolRequest submitRequest(@NonNull ToolRequest request) {
        request.preUpdate();
        return toolRequestRepository.save(request);
    }
    
    public ToolRequest updateRequestStatus(@NonNull String id, @NonNull String status) {
        ToolRequest existingRequest = getRequestById(id);
        if (existingRequest != null) {
            existingRequest.setStatus(status);
            existingRequest.preUpdate();
            return toolRequestRepository.save(existingRequest);
        }
        return null;
    }
    
    public void deleteRequest(@NonNull String id) {
        toolRequestRepository.deleteById(id);
    }
}
