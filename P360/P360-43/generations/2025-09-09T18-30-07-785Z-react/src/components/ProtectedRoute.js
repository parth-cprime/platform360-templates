import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    // Show loading indicator while authentication state is being determined
    if (loading) {
        return <div>Loading...</div>;
    }

    // Redirect to login if no user is authenticated
    if (!user) {
        return <Navigate to="/login" />;
    }

    // Render the child components if user is authenticated
    return children;
};

export default ProtectedRoute;