import React from "react";
import { Switch, Route } from "react-router-dom";
import AddOpeningsContainer from "./AddOpeningsContainer/AddOpeningsContainer";

const EditOpeningsContainer = props => {
  return (
    <Switch>
      <Route path="/admin/openings/add" component={AddOpeningsContainer} />
      <Route
        path="/admin/openings/edit/:id"
        render={() => {
          return <div>edit</div>;
        }}
      />
    </Switch>
  );
};

export default EditOpeningsContainer;
