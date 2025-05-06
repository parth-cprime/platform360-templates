import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

// Main application entry point
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" exact component={FeedbackPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;