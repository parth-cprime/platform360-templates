import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

// This page handles the login function

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;