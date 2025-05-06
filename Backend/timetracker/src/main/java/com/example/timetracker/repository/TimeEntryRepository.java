package com.example.timetracker.repository;

import com.example.timetracker.model.TimeEntry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TimeEntryRepository extends JpaRepository<TimeEntry, Long> {
    List<TimeEntry> findByStartTimeAfter(LocalDateTime date);
}
