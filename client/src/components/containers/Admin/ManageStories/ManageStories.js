import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import AddStories from "./AddStories";
import axios from "axios";

class ManageStories extends Component {
  state = {};

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/stories")
      .then(res => {
        console.log(res);
        this.setState({ isLoaded: true, stories: res.data.stories });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.props.stories.level1);
    return (
      <div className="manage-stories">
        <Link id="add-stories-button" to="/admin/stories/add">
          Add
        </Link>
        <Switch>
          <Route
            path="/admin/stories/add"
            render={() => {
              console.log(this.props);
              return <AddStories />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default ManageStories;
