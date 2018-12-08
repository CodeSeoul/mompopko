import React, { Component } from "react";
import FbApp from "../../../../config/firebase";
import { Switch, Link, Route } from "react-router-dom";
import AddStories from "./AddStories";

class ManageStories extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/admin/stories/add">Add Stories</Link>
        <Switch>
          {/* <Route path="/admin/stories/add" component={AddStories}/> */}
          <Route path="/admin/stories/add" render={()=> {console.log(this.props); return <AddStories/>}} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default ManageStories;
