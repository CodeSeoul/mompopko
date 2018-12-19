import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import AddStories from "./AddStories";

class ManageStories extends Component {
  render() {
    console.log(this.props.stories.level1);
    return (
      <React.Fragment>
        <Link to="/admin/stories/add">Add Stories</Link>
        <Switch>
          {/* <Route path="/admin/stories/add" component={AddStories}/> */}
          <Route
            path="/admin/stories/add"
            render={() => {
              console.log(this.props);
              return <AddStories />;
            }}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default ManageStories;
