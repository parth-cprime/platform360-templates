import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { authToken } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!authToken ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;