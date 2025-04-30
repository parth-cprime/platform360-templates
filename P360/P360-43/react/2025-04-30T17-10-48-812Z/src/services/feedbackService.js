import axios from 'axios';

export const fetchUrgentFeedback = async () => {
  try {
    const response = await axios.get('/api/feedback/urgent');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch urgent feedback:', error);
    throw error;
  }
};