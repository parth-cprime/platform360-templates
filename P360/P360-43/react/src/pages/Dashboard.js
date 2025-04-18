import React, { useContext, useEffect } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
import NotificationSystem from '../components/NotificationSystem';

// Page for displaying the dashboard
const Dashboard = () => {
  const { fetchFeedbacks } = useContext(FeedbackContext);

  // Fetch feedbacks on component mount
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <NotificationSystem />
    </div>
  );
}

export default Dashboard;