import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// ProtectedRoute wraps around components that require authentication
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Show loading text while authentication state is being determined
    }

    if (!user) {
        return <Navigate to="/login" />; // If no user is authenticated, redirect to login page
    }

    return children; // If user is authenticated, render the child components
};

export default ProtectedRoute;