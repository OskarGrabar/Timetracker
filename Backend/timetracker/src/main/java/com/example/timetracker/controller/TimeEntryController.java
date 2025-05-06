package com.example.timetracker.controller;


import com.example.timetracker.model.TimeEntry;
import com.example.timetracker.service.TimeEntryService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/time-entry")
public class TimeEntryController {

    private final TimeEntryService service;

    public TimeEntryController(TimeEntryService service) {
        this.service = service;
    }

    @PostMapping("/check-in")
    public TimeEntry checkIn(@RequestBody Map<String, Long> payload) {
        return service.checkIn(payload.get("categoryId"));
    }

    @PostMapping("/check-out")
    public TimeEntry checkOut() {
        return service.checkOut();
    }

    @GetMapping
    public List<TimeEntry> getAll() {
        return service.getAll();
    }

    @GetMapping("/stats")
    public Map<String, Long> getWeeklyStats() {
        return service.getWeeklyStats();
    }
}
