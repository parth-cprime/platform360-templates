package com.yourcompany.notification.service;

import org.springframework.stereotype.Service;

@Service
public class FeedbackService {

    private final NotificationService notificationService;

    public FeedbackService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void analyzeAndNotify(String feedback, String userEmail) {
        // Analyze feedback content
        if (isUrgent(feedback)) {
            // Notify the relevant team member
            notificationService.notifyTeamMember(userEmail, feedback);
        }
    }

    private boolean isUrgent(String feedback) {
        // Implement logic to analyze feedback for urgency
        // This can be as simple as keyword matching or as complex as integrating an NLP library for sentiment analysis
        return feedback.contains("urgent");
    }
}