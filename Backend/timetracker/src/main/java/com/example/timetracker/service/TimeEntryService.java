package com.example.timetracker.service;

import com.example.timetracker.model.Category;
import com.example.timetracker.model.TimeEntry;
import com.example.timetracker.repository.CategoryRepository;
import com.example.timetracker.repository.TimeEntryRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class TimeEntryService {

    private final TimeEntryRepository entryRepo;
    private final CategoryRepository categoryRepo;
    private TimeEntry currentEntry;

    public TimeEntryService(TimeEntryRepository entryRepo, CategoryRepository categoryRepo) {
        this.entryRepo = entryRepo;
        this.categoryRepo = categoryRepo;
    }

    public TimeEntry checkIn(Long categoryId) {
        Category cat = categoryRepo.findById(categoryId).orElseThrow();
        currentEntry = new TimeEntry(cat, LocalDateTime.now());
        return entryRepo.save(currentEntry);
    }

    public TimeEntry checkOut() {
        if (currentEntry == null) return null;

        currentEntry.setEndTime(LocalDateTime.now());
        TimeEntry saved = entryRepo.save(currentEntry);
        currentEntry = null;
        return saved;
    }

    public List<TimeEntry> getAll() {
        return entryRepo.findAll();
    }

    public Map<String, Long> getWeeklyStats() {
        Map<String, Long> stats = new HashMap<>();
        List<TimeEntry> recent = entryRepo.findByStartTimeAfter(LocalDateTime.now().minusDays(7));

        for (TimeEntry entry : recent) {
            if (entry.getEndTime() != null) {
                long minutes = java.time.Duration.between(entry.getStartTime(), entry.getEndTime()).toMinutes();
                String categoryName = entry.getCategory().getName();
                stats.put(categoryName, stats.getOrDefault(categoryName, 0L) + minutes);
            }
        }

        return stats;
    }
}
