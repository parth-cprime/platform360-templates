import { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * Custom hook to fetch urgent feedback from the backend.
 * It automatically triggers when the component mounts and when the refresh flag changes.
 * @param {boolean} refresh - A flag to control the refresh of the feedback data.
 * @returns {Object} The state of the fetch operation including data, loading, and error states.
 */
export const useFetchFeedback = (refresh) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedback = async () => {
            setLoading(true);
            try {
                const response = await api.get('/feedback/urgent');
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedback();
    }, [refresh]);

    return { data, loading, error };
};