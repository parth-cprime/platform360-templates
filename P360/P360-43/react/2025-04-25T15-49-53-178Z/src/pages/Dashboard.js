import React, { useEffect, useState } from 'react';
import { fetchUrgentFeedback } from '../services/feedbackService';

// Dashboard component for displaying urgent feedback
const Dashboard = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const getUrgentFeedback = async () => {
      const urgentFeedback = await fetchUrgentFeedback();
      setFeedbackList(urgentFeedback);
    };
    getUrgentFeedback();
  }, []);

  return (
    <div>
      <h1>Urgent Feedback</h1>
      <ul>
        {feedbackList.map((feedback) => (
          <li key={feedback.id}>{feedback.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;