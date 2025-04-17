// This is the order component that displays the order data.

import React, { useState, useEffect } from 'react';
import { getOrder, saveOrder } from '../services/orderService';

function OrderComponent({ match }) {
    const [ order, setOrder ] = useState({});

    useEffect(() => {
        const fetchOrder = async () => {
            const { data } = await getOrder(match.params.id);
            setOrder(data);
        };
        fetchOrder();
    }, [ match.params.id ]);

    const handleChange = ({ currentTarget: input }) => {
        setOrder({ ...order, [input.name]: input.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await saveOrder(order);
    };

    return (
        <div>
            <h2>Order Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Order Name:</label>
                    <input type="text" name="name" value={order.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Order Description:</label>
                    <input type="text" name="description" value={order.description} onChange={handleChange} />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default OrderComponent;