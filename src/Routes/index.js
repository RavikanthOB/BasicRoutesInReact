import React from "react";
import { Switch ,Route} from "react-router-dom";

import Authentication from './Authentication'

import {Welcome,Login} from '../Pages'

function Routes() {
  return (
    <Switch>
        <Route exact path={'/welcome'} exact component={Welcome} />
        <Route exact path={'/login'} exact component={Login} />
      <Authentication path="/" />
    </Switch>
  );
}

export default Routes;
