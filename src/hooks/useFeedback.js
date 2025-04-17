// Custom hook for handling feedback
import { useState, useEffect } from 'react';
import api from '../services/api';

const useFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    // Fetch feedbacks from API
    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await api.get('/feedbacks');
                setFeedbacks(response.data);
            } catch (error) {
                console.error('Failed to fetch feedbacks: ', error);
            }
        };

        fetchFeedbacks();
    }, []);

    return { feedbacks, setFeedbacks };
};

export default useFeedback;