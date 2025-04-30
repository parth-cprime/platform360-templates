package controllers;

import dtos.FeedbackDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import services.FeedbackService;

import javax.validation.Valid;

@RestController
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/api/feedback")
    public ResponseEntity<?> submitFeedback(@Valid @RequestBody FeedbackDTO feedbackDTO) {
        feedbackService.processFeedback(feedbackDTO);
        return ResponseEntity.ok().build();
    }
}