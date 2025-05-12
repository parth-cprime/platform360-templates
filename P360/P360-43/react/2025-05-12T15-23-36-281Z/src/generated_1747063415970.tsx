To address the task requirements, we'll start by creating the necessary React components, services, and utilities to build a notification system for customer feedback. This system will include JWT authentication, input validation, error handling, and security configurations. 

First, let's define the JWT setup, then proceed to the main React components and services.

### JWT Setup and Utilities

#### Environment Variables
File: `.env`
```
REACT_APP_JWT_SECRET=your_jwt_secret_here
REACT_APP_API_URL=http://localhost:3001
```

#### API Service for Authentication
File: `src/services/authService.js`
```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response.data);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  login,
  logout,
};
```

#### Utility for HTTP Requests with JWT
File: `src/utils/http.js`
```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const get = async (path) => {
  try {
    const response = await axios.get(`${API_URL}${path}`);
    return response.data;
  } catch (error) {
    console.error('HTTP GET error:', error.response.data);
    throw error;
  }
};

// Additional HTTP methods (post, put, delete) would be implemented here similarly

export const http = {
  get,
};
```

### Main React Components

#### App Component
File: `src/App.js`
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
```

#### Login Page
File: `src/pages/LoginPage.js`
```javascript
import React, { useState } from 'react';
import authService from '../services/authService';

function LoginPage({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(username, password);
      history.push('/dashboard');
    } catch (error) {
      alert('Failed to login');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
```

#### Dashboard Page
File: `src/pages/DashboardPage.js`
```javascript
import React from 'react';

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Implementation of the dashboard features goes here */}
    </div>
  );
}

export default DashboardPage;
```

This setup covers the initial structure for the authentication flow and dashboard access. For the notification system, further development would include implementing services to handle incoming feedback, analyze it for urgency, and notify the appropriate team members, which can be built upon the provided structure.