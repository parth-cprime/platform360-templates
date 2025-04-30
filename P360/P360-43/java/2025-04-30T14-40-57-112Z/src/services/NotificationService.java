package services;

import dtos.FeedbackDTO;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    public void notifyTeamMember(String email, FeedbackDTO feedbackDTO) {
        // Implementation for sending notification (e.g., email, SMS, etc.)
    }
}