import axios from 'axios';

const BASE_URL = 'https://api.example.com';

export const login = async (username, password) => {
  const response = await axios.post(`${BASE_URL}/login`, { username, password });
  return response.data.token;
};

export const getFeedback = async () => {
  const response = await axios.get(`${BASE_URL}/feedback`);
  return response.data;
};

export const getFeedbackById = async (id) => {
  const response = await axios.get(`${BASE_URL}/feedback/${id}`);
  return response.data;
};

export const updateFeedback = async (id, data) => {
  const response = await axios.patch(`${BASE_URL}/feedback/${id}`, data);
  return response.data;
};
