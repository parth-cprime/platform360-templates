import { useState } from 'react';

export const useApi = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchApi = async (options) => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    return { data, error, loading, fetchApi };
};