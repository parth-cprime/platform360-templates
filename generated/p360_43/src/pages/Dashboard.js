import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      {/* Dashboard content goes here */}
    </div>
  );
};

export default Dashboard;