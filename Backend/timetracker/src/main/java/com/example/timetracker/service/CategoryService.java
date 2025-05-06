package com.example.timetracker.service;

import com.example.timetracker.model.Category;
import com.example.timetracker.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository repo;

    public CategoryService(CategoryRepository repo) {
        this.repo = repo;
    }

    public List<Category> getAll() {
        return repo.findAll();
    }

    public Category add(Category c) {
        return repo.save(c);
    }

    public Category update(Long id, String name) {
        Category cat = repo.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        cat.setName(name);
        return repo.save(cat);
    }

    public Category getById(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
    }
}
