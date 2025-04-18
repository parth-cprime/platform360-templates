```javascript
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OrdersPage from './pages/OrdersPage';

// Main application
const App = () => (
    <Router>
        <div>
            <Route path="/orders" component={OrdersPage} />
        </div>
    </Router>
);

export default App;
```