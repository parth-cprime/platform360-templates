import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
