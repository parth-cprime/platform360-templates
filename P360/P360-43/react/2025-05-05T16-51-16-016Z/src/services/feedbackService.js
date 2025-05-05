import axios from 'axios';

const API_URL = '/api/feedback';

export const submitFeedback = async (feedbackData) => {
    try {
        const response = await axios.post(`${API_URL}/submit`, feedbackData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Error submitting feedback');
    }
};

export const getUrgentFeedback = async () => {
    try {
        const response = await axios.get(`${API_URL}/urgent`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Error fetching urgent feedback');
    }
};