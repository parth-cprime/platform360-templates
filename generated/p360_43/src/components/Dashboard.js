import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const res = await axios.get('/api/feedbacks', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
      setFeedbacks(res.data);
    }
    fetchFeedbacks();
  }, []);

  return (
    <div>
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <p>{feedback.message}</p>
          <button onClick={() => acknowledgeFeedback(feedback.id)}>Acknowledge</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;