import axios from 'axios';

export const fetchOrders = (token) => {
  return axios.get('/api/orders', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};