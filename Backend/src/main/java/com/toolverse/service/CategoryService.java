package com.toolverse.service;

import com.toolverse.model.Category;
import com.toolverse.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryService {
    
    private final CategoryRepository categoryRepository;
    
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
    
    public Category getCategoryById(@NonNull String id) {
        return categoryRepository.findById(id).orElse(null);
    }
    
    public Category getCategoryByName(@NonNull String name) {
        return categoryRepository.findByNameIgnoreCase(name);
    }
    
    public Category saveCategory(@NonNull Category category) {
        category.preUpdate();
        return categoryRepository.save(category);
    }
    
    public Category updateCategory(@NonNull String id, @NonNull Category category) {
        Category existingCategory = getCategoryById(id);
        if (existingCategory != null) {
            category.setId(id);
            category.preUpdate();
            return categoryRepository.save(category);
        }
        return null;
    }
    
    public void deleteCategory(@NonNull String id) {
        categoryRepository.deleteById(id);
    }
}
