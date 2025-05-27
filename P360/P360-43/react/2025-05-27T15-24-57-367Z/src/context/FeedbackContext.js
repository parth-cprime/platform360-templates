import React, { createContext, useState } from 'react';

export const FeedbackContext = createContext();

export default function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([]);

  const fetchFeedback = async () => {
    // Implement fetch logic here
    // Placeholder data
    setFeedback([
      { id: 1, title: 'Urgent Issue', message: 'This is an urgent issue.' },
      { id: 2, title: 'Feedback', message: 'General feedback.' }
    ]);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, fetchFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}