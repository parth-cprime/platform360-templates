import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import authService from '../services/authService';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthInfo } = useContext(AuthContext);

  const login = async (e) => {
    e.preventDefault();

    try {
      const { data } = await authService.login({ username, password });
      setAuthInfo(data);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <form onSubmit={login}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;