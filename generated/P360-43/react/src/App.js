import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { FeedbackProvider } from './context/FeedbackContext';
import Dashboard from './pages/Dashboard';
import FeedbackForm from './pages/FeedbackForm';

// Main application where routing is defined.
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path="/feedback" component={FeedbackForm} />
      </Router>
    </FeedbackProvider>
  );
}

export default App;