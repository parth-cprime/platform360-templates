import React, { createContext, useState } from 'react';
import { decodeToken, isTokenExpired } from '../utils/jwtUtils';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (newToken) => {
    const decodedToken = decodeToken(newToken);
    if (!isTokenExpired(decodedToken)) {
      setToken(newToken);
      setUser(decodedToken.user);
    } else {
      console.log('Token is expired');
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;