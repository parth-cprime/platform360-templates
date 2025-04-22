import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
  });

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      const { token } = response.data;
      const user = jwt_decode(token);
      setAuthState({ token, user });
    } catch (error) {
      console.error('Failed to login', error);
      throw error;
    }
  };

  const logout = () => {
    setAuthState({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};