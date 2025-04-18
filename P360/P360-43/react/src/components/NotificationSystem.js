import React, { useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';

// Component for the notification system
const NotificationSystem = () => {
  const { feedbacks } = useContext(FeedbackContext);

  // Function to analyze feedback and determine urgency
  const analyzeFeedback = (feedback) => {
    // Add your own logic to determine urgent feedback
    return feedback.includes('urgent');
  }

  // Function to route feedback to team members
  const routeFeedback = (feedback) => {
    // Add logic to route feedback based on category
    return 'teamMember1';
  }

  // Render feedback notifications
  return (
    <div>
      {feedbacks.map((feedback) => {
        if (analyzeFeedback(feedback)) {
          return (
            <div key={feedback.id}>
              <p>Urgent feedback received. Please address immediately.</p>
              <p>Feedback: {feedback.text}</p>
              <p>Routed to: {routeFeedback(feedback)}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default NotificationSystem;