package com.example.timetracker.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class TimeEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public TimeEntry() {}

    public TimeEntry(Category category, LocalDateTime startTime) {
        this.category = category;
        this.startTime = startTime;
    }

    // Getters & Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public LocalDateTime getStartTime() { return startTime; }

    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }

    public LocalDateTime getEndTime() { return endTime; }

    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }

    public Category getCategory() { return category; }

    public void setCategory(Category category) { this.category = category; }
}
