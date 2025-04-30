import { useState, useEffect } from 'react';
import { fetchUrgentFeedback, acknowledgeFeedback } from '../services/feedbackService';

// Custom hook for managing notifications
const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUrgentFeedback();
                setNotifications(data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };
        fetchData();
    }, []);

    const acknowledge = async (id) => {
        try {
            await acknowledgeFeedback(id);
            setNotifications(prev => prev.filter(n => n.id !== id));
        } catch (error) {
            console.error('Error acknowledging notification:', error);
        }
    };

    return { notifications, acknowledge };
};

export default useNotifications;