import axios from 'axios';

const API_URL = '/api/feedback/';

// Function to submit feedback
const submitFeedback = async (feedbackData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
        },
    };
    const response = await axios.post(API_URL + 'submit', feedbackData, config);
    return response.data;
};

export default {
    submitFeedback,
};