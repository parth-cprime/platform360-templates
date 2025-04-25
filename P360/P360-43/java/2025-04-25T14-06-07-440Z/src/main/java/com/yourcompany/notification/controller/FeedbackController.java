package com.yourcompany.notification.controller;

import com.yourcompany.notification.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    private final FeedbackService feedbackService;

    @Autowired
    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping
    public ResponseEntity<?> submitFeedback(@RequestBody String feedback, @RequestParam String userEmail) {
        feedbackService.analyzeAndNotify(feedback, userEmail);
        return ResponseEntity.ok().build();
    }
}