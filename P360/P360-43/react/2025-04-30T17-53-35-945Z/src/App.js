import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { useAuth } from './hooks/useAuth';

function App() {
    const user = useAuth();

    return (
        <Router>
            <div>
                {!user ? (
                    <Switch>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/dashboard">
                            <DashboardPage />
                        </Route>
                    </Switch>
                )}
            </div>
        </Router>
    );
}

export default App;