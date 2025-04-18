import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <FeedbackProvider>
        <Route path="/" exact component={Dashboard} />
      </FeedbackProvider>
    </Router>
  );
}

export default App;