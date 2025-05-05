package com.example.timetracker.controller;


import com.example.timetracker.model.TimeEntry;
import com.example.timetracker.service.MockService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/time-entry")
public class TimeEntryController {

    private final MockService mockService;

    public TimeEntryController(MockService mockService) {
        this.mockService = mockService;
    }

    @PostMapping("/check-in")
    public TimeEntry checkIn(@RequestBody Map<String, Long> payload) {
        return mockService.checkIn(payload.get("categoryId"));
    }

    @PostMapping("/check-out")
    public TimeEntry checkOut() {
        return mockService.checkOut();
    }

    @GetMapping
    public List<TimeEntry> getAll() {
        return mockService.getAllEntries();
    }
}
