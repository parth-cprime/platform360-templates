import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/" component={DashboardPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;