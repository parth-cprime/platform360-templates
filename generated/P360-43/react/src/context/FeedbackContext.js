import React, { createContext, useReducer } from 'react';
import { fetchFeedback } from '../services/FeedbackService';

export const FeedbackContext = createContext();

const initialState = {
  feedback: [],
  error: null,
};

// Reducer for handling actions related to feedback data
const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_FEEDBACK':
      return {
        ...state,
        feedback: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const FeedbackProvider = (props) => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  // Fetch feedback data from the API
  const getFeedback = async () => {
    try {
      const response = await fetchFeedback();
      dispatch({ type: 'FETCH_FEEDBACK', payload: response });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error: error.message });
    }
  };

  return (
    <FeedbackContext.Provider value={{ state, getFeedback }}>
      {props.children}
    </FeedbackContext.Provider>
  );
};