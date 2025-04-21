import axios from 'axios';

// Function to login user
export const loginUser = async (username, password) => {
  const res = await axios.post('/api/login', { username, password });
  return res.data;
};

// Function to check token
export const checkToken = async () => {
  const res = await axios.get('/api/checkToken');
  return res.data;
};