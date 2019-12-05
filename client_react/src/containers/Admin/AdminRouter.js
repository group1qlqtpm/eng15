import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "config/routes";

import ExamRouter from "./Exam/ExamRouter";

const AdminRouter = () => {
  return (
    <Switch>
      <Route to={routes.admin.exam.index} component={ExamRouter} />
    </Switch>
  );
};

export default AdminRouter;
