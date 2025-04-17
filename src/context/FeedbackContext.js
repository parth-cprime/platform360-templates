// Feedback context for managing state
import React, { createContext } from 'react';
import useFeedback from '../hooks/useFeedback';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const { feedbacks, setFeedbacks } = useFeedback();

    return (
        <FeedbackContext.Provider value={{ feedbacks, setFeedbacks }}>
            {children}
        </FeedbackContext.Provider>
    );
};