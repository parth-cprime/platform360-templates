import React, { useState, useEffect } from 'react';
import { getUrgentFeedback } from '../services/feedbackService';
import NotificationAlert from '../components/NotificationAlert';

// Dashboard page component showing urgent feedback and allowing acknowledgment
const Dashboard = () => {
  const [urgentFeedbacks, setUrgentFeedbacks] = useState([]);

  useEffect(() => {
    const fetchUrgentFeedback = async () => {
      try {
        const feedbacks = await getUrgentFeedback();
        setUrgentFeedbacks(feedbacks);
      } catch (error) {
        console.error('Failed to fetch urgent feedback:', error);
      }
    };

    fetchUrgentFeedback();
  }, []);

  const handleAcknowledge = (feedbackId) => {
    // Implement the acknowledge logic here
    console.log(`Acknowledged feedback with ID: ${feedbackId}`);
    // Ideally, here we would call an API to acknowledge the feedback on the server
  };

  return (
    <div className="dashboard">
      <h2>Urgent Feedback</h2>
      {urgentFeedbacks.map(feedback => (
        <NotificationAlert
          key={feedback.id}
          message={feedback.message}
          onAcknowledge={() => handleAcknowledge(feedback.id)}
        />
      ))}
    </div>
  );
};

export default Dashboard;