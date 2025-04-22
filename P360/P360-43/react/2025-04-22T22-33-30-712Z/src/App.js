import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AuthContextProvider from './context/AuthContext';

// Main application file that handles the routing
// and wraps everything inside AuthContextProvider for JWT authentication

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;