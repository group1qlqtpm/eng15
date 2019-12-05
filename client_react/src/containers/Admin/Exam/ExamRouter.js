import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "config/routes";

import Add from "./Add/Loadable";

const AdminRouter = () => {
  return (
    <Switch>
      <Route to={routes.admin.exam.add} component={Add} />
    </Switch>
  );
};

export default AdminRouter;
