import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import ProtectedPages from './ProtectedPages'


function Authentication(rest) {
    const isloggedIN = localStorage.getItem("isloggedIN"); //login condition
  return (
    <Route
      {...rest}
      render={(props) => {
        return isloggedIN ? (
          <Switch>
            <ProtectedPages />
          </Switch>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

export default Authentication;
