package com.example.timetracker.service;


import com.example.timetracker.model.Category;
import com.example.timetracker.model.TimeEntry;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class MockService {
    private final Map<Long, Category> categories = new HashMap<>();
    private final List<TimeEntry> entries = new ArrayList<>();
    private Long categoryIdCounter = 1L;
    private Long entryIdCounter = 1L;
    private TimeEntry currentEntry = null;

    public List<Category> getAllCategories() {
        return new ArrayList<>(categories.values());
    }

    public Category addCategory(Category c) {
        c.setId(categoryIdCounter++);
        categories.put(c.getId(), c);
        return c;
    }

    public Category updateCategory(Long id, Category c) {
        Category existing = categories.get(id);
        if (existing != null) {
            existing.setName(c.getName());
        }
        return existing;
    }

    public TimeEntry checkIn(Long categoryId) {
        currentEntry = new TimeEntry(entryIdCounter++, categoryId, LocalDateTime.now(), null);
        return currentEntry;
    }

    public TimeEntry checkOut() {
        if (currentEntry != null) {
            currentEntry.setEndTime(LocalDateTime.now());
            entries.add(currentEntry);
            TimeEntry finished = currentEntry;
            currentEntry = null;
            return finished;
        }
        return null;
    }

    public List<TimeEntry> getAllEntries() {
        return entries;
    }
}
