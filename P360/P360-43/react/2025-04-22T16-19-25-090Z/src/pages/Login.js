import React, { useContext } from "react";
import apiService from "../services/apiService";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const { authenticate } = useContext(AuthContext);
  
  const handleLogin = async (username, password) => {
    try {
      const response = await apiService.post("/login", { username, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      authenticate(token);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  // Render login form
  // ...
};