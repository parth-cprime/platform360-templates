# React Project Structure Template

## Project Structure
```
project/
├── src/
│   ├── components/        # Reusable components
│   │   ├── auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   └── common/
│   │       ├── Button.js
│   │       └── Input.js
│   ├── pages/            # Page components
│   │   ├── Home.js
│   │   ├── Dashboard.js
│   │   └── Profile.js
│   ├── services/         # API services
│   │   ├── authService.js
│   │   ├── api.js
│   │   └── dataService.js
│   ├── hooks/            # Custom hooks
│   │   ├── useAuth.js
│   │   └── useApi.js
│   ├── context/          # Context providers
│   │   ├── AuthContext.js
│   │   └── ThemeContext.js
│   ├── utils/            # Utility functions
│   │   ├── security.js
│   │   ├── validation.js
│   │   └── encryption.js
│   ├── assets/           # Static assets
│   │   ├── images/
│   │   └── styles/
│   └── App.js            # Main application
├── public/               # Public files
│   ├── index.html
│   └── favicon.ico
├── package.json          # Project dependencies
└── README.md            # Project documentation
```

## Required Files

### 1. src/context/AuthContext.js
```javascript
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            authService.validateToken(token)
                .then(userData => setUser(userData))
                .catch(() => {
                    localStorage.removeItem('token');
                    navigate('/login');
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (credentials) => {
        const { token, user } = await authService.login(credentials);
        localStorage.setItem('token', token);
        setUser(user);
        navigate('/dashboard');
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
```

### 2. src/services/api.js
```javascript
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
```

### 3. src/components/ProtectedRoute.js
```javascript
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
```

### 4. src/utils/security.js
```javascript
import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export const validateToken = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
};
```

### 5. src/hooks/useAuth.js
```javascript
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
```

### 6. src/pages/Login.js
```javascript
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { encryptData } from '../utils/security';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const encryptedCredentials = encryptData(credentials);
        await login(encryptedCredentials);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
            />
            <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
```

## Dependencies
```json
{
    "dependencies": {
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-router-dom": "^5.3.0",
        "axios": "^0.21.1",
        "jsonwebtoken": "^8.5.1",
        "crypto-js": "^4.1.1"
    },
    "devDependencies": {
        "@testing-library/react": "^12.0.0",
        "@testing-library/jest-dom": "^5.14.1"
    }
}
```

## Security Considerations
1. Implement proper JWT token validation
2. Use secure password hashing
3. Enable CORS with proper configuration
4. Implement rate limiting
5. Use security headers
6. Encrypt sensitive data
7. Implement proper error handling
8. Use secure session management
9. Validate all input data
10. Implement proper logging

## Best Practices
1. Follow React security best practices
2. Use environment variables for sensitive data
3. Implement proper error handling
4. Use TypeScript for type safety
5. Implement comprehensive testing
6. Use proper logging
7. Follow the principle of least privilege
8. Implement proper session management
9. Use secure communication protocols
10. Regular security updates 
