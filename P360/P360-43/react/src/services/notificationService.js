import axios from 'axios';

/**
 * Sends a notification to the customer service team
 * @param {string} message - The message to send
 * @returns {Promise} - Promise object that represents the response
 */
export const sendNotification = async (message) => {
  try {
    const response = await axios.post('/api/notifications', { message });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};