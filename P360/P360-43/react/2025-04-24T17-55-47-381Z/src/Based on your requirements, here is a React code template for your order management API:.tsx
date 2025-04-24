// src/services/OrderService.js
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export class OrderService {
    async getOrders() {
        const token = localStorage.getItem('jwtToken');
        const decodedToken = jwtDecode(token);
        const response = await axios.get('/api/orders', { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    }

    async createOrder(order) {
        const token = localStorage.getItem('jwtToken');
        const decodedToken = jwtDecode(token);
        const response = await axios.post('/api/orders', order, { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    }
}

// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    async function login(username, password) {
        const response = await axios.post('/api/auth/login', { username, password });
        const { token } = response.data;
        localStorage.setItem('jwtToken', token);
        const user = jwtDecode(token);
        setUser(user);
    }

    async function logout() {
        localStorage.removeItem('jwtToken');
        setUser(null);
    }

    const contextValue = {
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import OrdersPage from './pages/OrdersPage';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <ProtectedRoute path="/orders" component={OrdersPage} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;