import React from "react";
import { Switch, Route } from "react-router-dom";

const Admin = () => {
  return (
    <Switch>
      <Route path="/admin/people" />
      <Route path="/admin/openings" />
      <Route path="/admin/data" />
      <Route path="/admin/about" />
    </Switch>
  );
};

export default Admin;
