import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to protect routes that require authentication
const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    // Redirect to login page if user is not authenticated
    if (!user) {
        return <Navigate to="/login" />;
    }

    // Render children if user is authenticated
    return <Outlet />;
};

export default ProtectedRoute;