import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      {/* Dashboard content */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
