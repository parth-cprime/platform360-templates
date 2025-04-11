import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;