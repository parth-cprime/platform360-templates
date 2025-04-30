package services;

import models.Feedback;
import repositories.FeedbackRepository;
import utils.FeedbackNotifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;
    private final FeedbackNotifier feedbackNotifier;

    @Autowired
    public FeedbackService(FeedbackRepository feedbackRepository, FeedbackNotifier feedbackNotifier) {
        this.feedbackRepository = feedbackRepository;
        this.feedbackNotifier = feedbackNotifier;
    }

    public Feedback submitFeedback(Feedback feedback) {
        // Basic validation can be performed here
        Feedback savedFeedback = feedbackRepository.save(feedback);
        
        // Analyze feedback for urgency and route notifications if necessary
        if (feedbackNotifier.isUrgentFeedback(feedback)) {
            feedbackNotifier.notifyTeamMember(savedFeedback);
        }
        
        return savedFeedback;
    }

    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }
}