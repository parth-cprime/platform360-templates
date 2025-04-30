package utils;

import models.Feedback;
import org.springframework.stereotype.Component;

@Component
public class FeedbackNotifier {

    public boolean isUrgentFeedback(Feedback feedback) {
        // Implement logic to analyze feedback content for urgency
        // For simplicity, let's assume a simple keyword check here
        String content = feedback.getContent().toLowerCase();
        return content.contains("urgent") || content.contains("immediately");
    }

    public void notifyTeamMember(Feedback feedback) {
        // Implementation to notify the appropriate team member
        // This could integrate with an email service, SMS gateway, or internal messaging system
        System.out.println("Notifying team member about urgent feedback: " + feedback.getId());
        // Note: Logging here is for demonstration. Use a proper logging framework in production.
    }
}