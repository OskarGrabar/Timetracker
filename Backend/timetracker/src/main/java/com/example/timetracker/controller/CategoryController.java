package com.example.timetracker.controller;



import com.example.timetracker.model.Category;
import com.example.timetracker.service.MockService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final MockService mockService;

    public CategoryController(MockService mockService) {
        this.mockService = mockService;
    }

    @GetMapping
    public List<Category> getAll() {
        return mockService.getAllCategories();
    }

    @PostMapping
    public Category add(@RequestBody Category category) {
        return mockService.addCategory(category);
    }


    @PutMapping("/{id}")
public Category updateCategory(@PathVariable Long id, @RequestBody Category updatedCategory) {
    return mockService.updateCategory(id, updatedCategory.getName());
}

}
