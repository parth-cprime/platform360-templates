import axios from 'axios';

const BASE_URL = '/api/feedback';

// Service to interact with feedback API
const submitFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(`${BASE_URL}/submit`, feedbackData);
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw new Error('Error submitting feedback');
  }
};

const getUrgentFeedback = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/urgent`);
    return response.data;
  } catch (error) {
    console.error('Error fetching urgent feedback:', error);
    throw new Error('Error fetching urgent feedback');
  }
};

export { submitFeedback, getUrgentFeedback };