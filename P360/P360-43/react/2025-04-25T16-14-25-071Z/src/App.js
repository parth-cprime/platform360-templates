import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FeedbackForm from './pages/FeedbackForm';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

// Main App component
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/submit-feedback" component={FeedbackForm} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;