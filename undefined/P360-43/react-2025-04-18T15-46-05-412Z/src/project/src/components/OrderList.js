```javascript
import React, { useEffect, useState } from 'react';
import orderService from '../services/orderService';

// A component to display list of orders
const OrderList = () => {
    const [orders, setOrders] = useState([]);

    // Fetch orders when component is mounted
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orders = await orderService.fetchOrders();
                setOrders(orders);
            } catch (error) {
                console.error('Failed to fetch orders', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Orders</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
```