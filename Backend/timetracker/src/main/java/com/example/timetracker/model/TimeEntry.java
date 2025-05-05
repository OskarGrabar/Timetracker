package com.example.timetracker.model;



import java.time.LocalDateTime;

public class TimeEntry {
    private Long id;
    private Long categoryId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    public TimeEntry() {}
    public TimeEntry(Long id, Long categoryId, LocalDateTime startTime, LocalDateTime endTime) {
        this.id = id;
        this.categoryId = categoryId;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getCategoryId() {
        return categoryId;
    }
    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
    public LocalDateTime getStartTime() {
        return startTime;
    }
    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }
    public LocalDateTime getEndTime() {
        return endTime;
    }
    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    
}
