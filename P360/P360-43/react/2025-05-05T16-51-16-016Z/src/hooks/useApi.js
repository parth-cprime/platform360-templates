import { useState } from 'react';
import axios from 'axios';

export const useApi = (endpoint, { method = 'GET', body = null, headers = {} } = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem('token');
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios({
                method,
                url: endpoint,
                data: body,
                headers,
            });
            setData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
};