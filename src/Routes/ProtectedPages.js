import React from "react";
import { Route } from "react-router-dom";

import { Home, DashBoard } from "../Pages";

function ProtectedPages() {
  return (
    <>
      <Route path={["/", "/home"]} exact component={Home} />
      <Route path={"/dashboard"} exact component={DashBoard} />
    </>
  );
}

export default ProtectedPages;
