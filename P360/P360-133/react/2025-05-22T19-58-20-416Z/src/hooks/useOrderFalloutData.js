import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const useOrderFalloutData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { authToken } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/order-fallout', {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
                if (!response.ok) throw new Error('Failed to fetch order fallout data');
                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [authToken]);

    return { data, loading, error };
};

export default useOrderFalloutData;