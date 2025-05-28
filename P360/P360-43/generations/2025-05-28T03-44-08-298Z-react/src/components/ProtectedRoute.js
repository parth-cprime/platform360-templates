import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    // Show loading state while auth state is being determined
    if (loading) {
        return <div>Loading...</div>;
    }

    // Redirect to login page if no user is logged in
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;