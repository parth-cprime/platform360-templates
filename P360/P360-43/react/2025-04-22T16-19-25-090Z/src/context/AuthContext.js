import React, { createContext, useState } from "react";
import jwt from "jsonwebtoken";

// Create AuthContext
export const AuthContext = createContext();

// JWT Authentication Secret
const SECRET_KEY = process.env.JWT_SECRET;

// AuthContext Provider
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null
  });

  const authenticate = (token) => {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      setAuthState({
        isAuthenticated: true,
        user: decoded
      });
    } catch (err) {
      console.error("JWT Verification failed", err);
      setAuthState({
        isAuthenticated: false,
        user: null
      });
    }
  };

  return (
    <AuthContext.Provider value={{ authState, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};