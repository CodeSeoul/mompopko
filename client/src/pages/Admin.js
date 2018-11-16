import React from "react";
import { Switch, Route } from "react-router-dom";

import EditPeopleContainer from "../components/containers/Admin/EditPeopleContainer/EditPeopleContainer";
import EditOpeningsContainer from "../components/containers/Admin/EditOpeningsContainer/EditOpeningsContainer";
import Login from "../components/containers/Login/Login";

const Admin = () => {
  let submitHandler = (email, password) => {
    console.log(email, password);
  };
  return (
    <React.Fragment>
      <Login
        submitHandler={(email, password) => submitHandler(email, password)}
      />
      <Switch>
        <Route path="/admin/people" component={EditPeopleContainer} />
        <Route path="/admin/openings" component={EditOpeningsContainer} />
        <Route path="/admin/data" />
        <Route path="/admin/about" />
      </Switch>
    </React.Fragment>
  );
};

export default Admin;
