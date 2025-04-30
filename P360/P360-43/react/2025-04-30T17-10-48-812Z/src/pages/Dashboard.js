import React, { useEffect, useState } from 'react';
import { fetchUrgentFeedback } from '../services/feedbackService';

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const loadFeedbacks = async () => {
      const urgentFeedbacks = await fetchUrgentFeedback();
      setFeedbacks(urgentFeedbacks);
    };

    loadFeedbacks();
  }, []);

  return (
    <div>
      <h1>Urgent Feedback Dashboard</h1>
      {feedbacks.map(feedback => (
        <div key={feedback.id}>{feedback.message}</div>
      ))}
    </div>
  );
};

export default Dashboard;