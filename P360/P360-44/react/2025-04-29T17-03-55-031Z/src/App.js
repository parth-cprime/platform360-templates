import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { HelmetProvider } from 'react-helmet-async';
import { SecurityContextProvider } from './context/SecurityContext';

function App() {
  return (
    <Router>
      <HelmetProvider>
        <SecurityContextProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* Additional routes can be added here */}
          </Switch>
        </SecurityContextProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;