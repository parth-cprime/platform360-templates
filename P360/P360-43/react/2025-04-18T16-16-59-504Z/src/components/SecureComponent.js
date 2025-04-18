import React, { useState, useEffect } from 'react';
import { verifyToken } from '../services/authService';

// This is a higher order component that wraps around components that need authentication
export default function SecureComponent(WrappedComponent) {
  return function(props) {
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (token && verifyToken(token)) {
        setAuthenticated(true);
      } else {
        console.error('User is not authenticated');
      }
    }, []);

    if (!isAuthenticated) {
      // You can redirect to login page or any other error handling
      return <h1>User is not authenticated</h1>;
    }

    return <WrappedComponent {...props} />;
  };
}