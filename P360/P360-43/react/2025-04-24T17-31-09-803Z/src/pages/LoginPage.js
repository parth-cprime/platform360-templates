import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import apiService from '../services/apiService';

// This component provides a login form for users.
export function LoginPage() {
  const { logIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
      const response = await apiService.post('/login', { username, password });
      logIn(response.data.token);
    } catch (error) {
      // TODO: Handle login error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
}