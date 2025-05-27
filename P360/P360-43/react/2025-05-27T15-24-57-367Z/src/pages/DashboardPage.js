import React, { useContext, useEffect } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
import FeedbackList from '../components/FeedbackList';

function DashboardPage() {
  const { fetchFeedback, feedback } = useContext(FeedbackContext);

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default DashboardPage;