package services;

import dtos.FeedbackDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utils.FeedbackAnalyzer;

@Service
public class FeedbackService {

    @Autowired
    private NotificationService notificationService;

    public void processFeedback(FeedbackDTO feedbackDTO) {
        boolean isUrgent = FeedbackAnalyzer.isFeedbackUrgent(feedbackDTO.getMessage());
        if (isUrgent) {
            // Logic to determine the appropriate team member based on the feedback category
            String assignedTo = determineResponsibleTeamMember(feedbackDTO.getCategory());
            notificationService.notifyTeamMember(assignedTo, feedbackDTO);
        }
    }

    private String determineResponsibleTeamMember(String category) {
        // Implementation to map feedback categories to team members
        return "teamMember@example.com";
    }
}