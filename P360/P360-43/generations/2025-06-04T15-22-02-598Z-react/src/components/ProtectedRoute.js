import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Show loading state while checking auth status
    }

    if (!user) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render children components if authenticated
};

export default ProtectedRoute;