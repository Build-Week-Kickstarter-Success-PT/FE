import React from 'react'
import { Route, Redirect } from "react-router-dom";
import {getToken} from '../utils';

const User = ({ component: Component, ...routeProps }) => {

  return (
    <Route
      {...routeProps}
      render={props => {

        if (getToken()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default User;