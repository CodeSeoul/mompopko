import React from "react";
import { Switch, Route } from "react-router-dom";
import AddOpeningsContainer from "./AddOpeningsContainer/AddOpeningsContainer";

class EditOpeningsContainer extends React.Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route
          path="/admin/openings"
          render={() => {
            return <div>Edit Openings</div>;
          }}
        />
        <Route path="/admin/openings/add" component={AddOpeningsContainer} />
        <Route
          path="/admin/openings/edit/:id"
          render={() => {
            return <div>edit</div>;
          }}
        />
      </Switch>
    );
  }
}

export default EditOpeningsContainer;
