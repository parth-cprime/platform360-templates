import axios from 'axios';

// Fetch feedback data from the API
export const fetchFeedback = async () => {
  try {
    const response = await axios.get('/api/feedback', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback data:', error);
    throw error;
  }
};