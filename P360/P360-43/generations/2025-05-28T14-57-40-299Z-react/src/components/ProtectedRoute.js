import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        // Show loading indicator while authentication state is being determined
        return <div>Loading...</div>;
    }

    if (!user) {
        // Redirect to login if user is not authenticated
        return <Navigate to="/login" />;
    }

    return children; // Render children if user is authenticated
};

export default ProtectedRoute;