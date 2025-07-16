import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    // Show loading message while authentication state is being verified
    if (loading) {
        return <div>Loading...</div>;
    }

    // If no user is authenticated, redirect to the login page
    if (!user) {
        return <Navigate to="/login" />;
    }

    // If user is authenticated, show the requested route's content
    return children;
};

export default ProtectedRoute;