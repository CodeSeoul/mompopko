import React from "react";
import { Switch, Route } from "react-router-dom";

import EditPeopleContainer from "../components/containers/Admin/EditPeopleContainer/EditPeopleContainer";

import EditOpeningsContainer from "../components/containers/Admin/EditOpeningsContainer/EditOpeningsContainer";

const Admin = () => {
  return (
    <Switch>
      <Route path="/admin/people" component={EditPeopleContainer} />
      <Route path="/admin/openings" component={EditOpeningsContainer} />
      <Route path="/admin/data" />
      <Route path="/admin/about" />
    </Switch>
  );
};

export default Admin;
