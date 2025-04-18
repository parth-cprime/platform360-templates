import React, { createContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';

// Context for managing feedback data
export const FeedbackContext = createContext();

// Provider component for the Feedback context
export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Function to fetch feedback data from API
  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('/api/feedbacks', {
        headers: {
          'Authorization': `Bearer ${jwt.sign({ app: 'Order Management API'}, 'secret')}`
        }
      });
      setFeedbacks(res.data);
    } catch (error) {
      console.error('Failed to fetch feedbacks:', error);
    }
  }

  return (
    <FeedbackContext.Provider value={{ feedbacks, fetchFeedbacks }}>
      {children}
    </FeedbackContext.Provider>
  );
}