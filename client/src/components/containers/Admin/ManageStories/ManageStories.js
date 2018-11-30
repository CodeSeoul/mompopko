import React, { Component } from "react";
import FbApp from "../../../../config/firebase";
import { Switch, Link, Route } from "react-router-dom";

class ManageStories extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/admin/stories/add">Add Stories</Link>
        <Switch>
          <Route path="/admin/stories/add" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default ManageStories;
