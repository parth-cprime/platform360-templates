import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

// Define the context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const history = useHistory();

  // Check if user is logged in on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Verify token and get user info
    if (token) {
      const decodedToken = jwt_decode(token);

      // Check if token is expired
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
      } else {
        setUser(decodedToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    // Perform API request to login
    const response = await axios.post("/api/login", { email, password });

    // Store token in local storage
    localStorage.setItem("token", response.data.token);

    // Set user and authorization header
    const decodedToken = jwt_decode(response.data.token);
    setUser(decodedToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

    // Redirect to dashboard
    history.push("/");
  };

  // Logout function
  const logout = () => {
    // Remove token and user
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setUser(null);

    // Redirect to login
    history.push("/login");
  };

  // Auth context value
  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };