package controllers;

import dto.FeedbackDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import services.FeedbackService;

import javax.validation.Valid;

@RestController
public class FeedbackController {

    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping("/api/feedback")
    public ResponseEntity<?> submitFeedback(@Valid @RequestBody FeedbackDTO feedbackDTO) {
        feedbackService.processFeedback(feedbackDTO);
        return ResponseEntity.ok().build();
    }
}