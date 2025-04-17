import React, { useState, useEffect } from 'react';
import api from './services/api';

// Main Application Component
function App() {
  const [orders, setOrders] = useState([]);

  // Fetch Orders from API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };
    fetchOrders();
  }, []);

  // Render
  return (
    <div>
      <h1>Order Management</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>{order.name}</h2>
          <p>{order.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;