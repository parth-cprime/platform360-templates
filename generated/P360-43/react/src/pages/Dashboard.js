import React, { useEffect, useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';

// Dashboard page where feedback data is displayed
const Dashboard = () => {
  const { state, getFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <div>
      {/* Display feedback data here */}
    </div>
  );
};

export default Dashboard;