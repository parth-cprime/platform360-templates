package services;

import dto.FeedbackDTO;
import models.Feedback;
import repositories.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utils.FeedbackNotificationUtil;

import java.util.List;

/**
 * Service layer for handling business logic related to feedback.
 */
@Service
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;
    private final FeedbackNotificationUtil notificationUtil;

    @Autowired
    public FeedbackService(FeedbackRepository feedbackRepository, FeedbackNotificationUtil notificationUtil) {
        this.feedbackRepository = feedbackRepository;
        this.notificationUtil = notificationUtil;
    }

    /**
     * Saves feedback and triggers notification if necessary.
     * 
     * @param feedbackDTO Data transfer object containing feedback details.
     * @return Saved feedback entity.
     */
    public Feedback submitFeedback(FeedbackDTO feedbackDTO) {
        Feedback feedback = new Feedback(feedbackDTO);
        feedback = feedbackRepository.save(feedback);

        if (feedback.requiresImmediateAttention()) {
            notificationUtil.notifyRelevantTeamMember(feedback);
        }

        return feedback;
    }

    /**
     * Retrieves all feedback marked as urgent and not yet acknowledged.
     * 
     * @return List of feedback.
     */
    public List<Feedback> getPendingUrgentFeedback() {
        return feedbackRepository.findAllByIsUrgentAndIsAcknowledged(false, false);
    }

    /**
     * Marks a feedback as acknowledged.
     * 
     * @param feedbackId ID of the feedback to acknowledge.
     * @return Updated feedback entity.
     */
    public Feedback acknowledgeFeedback(Long feedbackId) {
        Feedback feedback = feedbackRepository.findById(feedbackId)
                .orElseThrow(() -> new IllegalArgumentException("Feedback not found with id: " + feedbackId));
        feedback.setAcknowledged(true);
        return feedbackRepository.save(feedback);
    }
}