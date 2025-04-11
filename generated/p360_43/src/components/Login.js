import React, { useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await axios.post('/api/login', { email, password });
    const decoded = jwt.verify(token.data, 'secret');
    localStorage.setItem('token', decoded);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;