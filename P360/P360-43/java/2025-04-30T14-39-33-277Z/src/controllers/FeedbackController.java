package controllers;

import models.Feedback;
import services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @PostMapping("/submit")
    public ResponseEntity<Feedback> submitFeedback(@RequestBody Feedback feedback) {
        try {
            Feedback savedFeedback = feedbackService.submitFeedback(feedback);
            return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
        } catch (Exception e) {
            // Logging the exception
            System.out.println("Error when submitting feedback: " + e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllFeedback() {
        try {
            return new ResponseEntity<>(feedbackService.getAllFeedback(), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Error when fetching feedback: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}