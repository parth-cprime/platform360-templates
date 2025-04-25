import axios from 'axios';

// Replace 'apiBaseUrl' with the actual backend API URL for fetching feedback
const apiBaseUrl = 'http://example.com/api';

export const fetchUrgentFeedback = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/feedback/urgent`);
    return response.data;
  } catch (error) {
    console.error('Error fetching urgent feedback:', error);
    throw error;
  }
};