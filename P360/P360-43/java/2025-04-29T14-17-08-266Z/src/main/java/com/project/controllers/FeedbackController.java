package com.project.controllers;

import com.project.models.Feedback;
import com.project.services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/api/feedback")
    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
        if (feedbackService.isUrgentFeedback(feedback.getText())) {
            feedbackService.assignFeedbackToTeamMember(feedback);
            // Placeholder for notification logic
            return ResponseEntity.ok("Feedback received and marked as urgent.");
        }
        return ResponseEntity.ok("Feedback received.");
    }
}