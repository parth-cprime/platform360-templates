package controllers;

import models.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.FeedbackService;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
        boolean isUrgent = feedbackService.isFeedbackUrgent(feedback);
        if (isUrgent) {
            feedbackService.notifyTeamMember(feedback);
            return ResponseEntity.ok("Feedback received and notification sent for urgent feedback.");
        }
        return ResponseEntity.ok("Feedback received. Thank you!");
    }
}