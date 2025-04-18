// Import necessary libraries
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import authService from "./services/authService";
import LoginForm from "./components/LoginForm";

// Define App component
const App = () => {
    const user = authService.getCurrentUser();

    return (
        <React.Fragment>
            <Switch>
                <Route path="/login" component={LoginForm} />
                {user && <Route path="/" component={MainComponent} />}
                {!user && <Redirect to="/login" />}
            </Switch>
        </React.Fragment>
    );
};

// Export App component
export default App;