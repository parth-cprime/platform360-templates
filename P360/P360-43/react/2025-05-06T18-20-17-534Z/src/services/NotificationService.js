import axios from 'axios';

// Service to handle fetching and acknowledging feedback
export const NotificationService = {
    fetchUrgentFeedback: async () => {
        try {
            const response = await axios.get('/api/feedback/urgent');
            return response.data;
        } catch (error) {
            console.error("Error fetching urgent feedback", error);
            throw error;
        }
    },

    acknowledgeFeedback: async (feedbackId) => {
        try {
            await axios.post(`/api/feedback/${feedbackId}/acknowledge`);
        } catch (error) {
            console.error("Error acknowledging feedback", error);
            throw error;
        }
    },
};