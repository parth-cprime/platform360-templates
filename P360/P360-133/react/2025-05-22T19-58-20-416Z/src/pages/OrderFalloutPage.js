import React from 'react';
import useOrderFalloutData from '../hooks/useOrderFalloutData';

const OrderFalloutPage = () => {
    const { data, loading, error } = useOrderFalloutData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Order Fallout Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default OrderFalloutPage;