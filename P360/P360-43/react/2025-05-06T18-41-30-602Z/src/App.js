import React from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Dashboard from './pages/Dashboard';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/" /> : <LoginForm />}
        </Route>
        <Route path="/">
          {isAuthenticated ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;