import axios from 'axios';

// Service to fetch urgent feedback
export const fetchUrgentFeedback = async () => {
    try {
        const response = await axios.get('/api/feedback/urgent');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching urgent feedback');
    }
};

// Service to acknowledge urgent feedback
export const acknowledgeFeedback = async (id) => {
    try {
        await axios.post(`/api/feedback/${id}/acknowledge`);
    } catch (error) {
        throw new Error('Error acknowledging feedback');
    }
};