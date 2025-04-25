import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      {/* Placeholder for dashboard content, such as listing pending and acknowledged feedback */}
    </div>
  );
};

export default Dashboard;