import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

// Feedback form for submitting feedback
const FeedbackPage = () => {
  const { login } = useAuth();
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, integrate with the backend API to submit feedback
    console.log('Feedback submitted:', feedback);
    // Mock authentication flow
    login('mockToken');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Feedback:
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackPage;