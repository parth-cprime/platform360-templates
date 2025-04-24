// import necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;