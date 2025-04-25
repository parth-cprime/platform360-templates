package com.yourcompany.notification.service;

import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    public void notifyTeamMember(String userEmail, String message) {
        // Implement notification logic
        // This could involve sending an email, an SMS, or using a messaging platform
        System.out.println("Notifying " + userEmail + " with message: " + message);
        // Actual implementation would send a real notification
    }
}