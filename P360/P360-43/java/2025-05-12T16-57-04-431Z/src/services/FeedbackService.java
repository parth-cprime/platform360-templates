package services;

import models.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.FeedbackRepository;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    public Feedback saveFeedback(Feedback feedback) {
        // Here you would include logic for analyzing feedback content
        // and determining urgency
        return feedbackRepository.save(feedback);
    }
}