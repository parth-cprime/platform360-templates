import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import NotFoundPage from './pages/NotFoundPage';

// Main application component
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MarketingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;