// import necessary libraries and components
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route {...rest} render={props => {
      if (currentUser) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }} />
  );
};

export default ProtectedRoute;