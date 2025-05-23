package services;

import models.Feedback;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {

    // This method should analyze feedback and determine if it's urgent
    public boolean isFeedbackUrgent(Feedback feedback) {
        // Implement logic to analyze feedback content for urgency
        // For simplicity, this example assumes a method exists to determine urgency
        return feedback.getContent().contains("urgent");
    }

    // This method should notify the appropriate team member
    public void notifyTeamMember(Feedback feedback) {
        // Implement notification logic here
        // For demonstration, this is just a placeholder method
        System.out.println("Notifying team member about urgent feedback: " + feedback.getContent());
    }
}