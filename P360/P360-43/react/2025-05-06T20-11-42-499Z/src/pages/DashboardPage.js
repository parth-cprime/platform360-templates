import React from 'react';
import { useAuth } from '../context/AuthContext';

// Dashboard page showing pending and acknowledged feedback
const DashboardPage = () => {
  const { logout } = useAuth();

  // Mock data - replace with actual data from the backend
  const feedbackItems = [
    { id: 1, content: 'Urgent issue with product X', status: 'pending' },
    { id: 2, content: 'Problem with billing', status: 'acknowledged' }
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            {item.content} - <strong>{item.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;