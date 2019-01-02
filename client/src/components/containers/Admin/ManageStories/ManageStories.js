import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import AddStories from "./AddStories";
import axios from "axios";

class ManageStories extends Component {
  state = {
    isLoaded: false,
    stories: []
  };

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
    console.log(this.state.stories);
    const tableData = this.state.stories.map(story => {
      return (
        <tr>
          <td>{story.business.name}</td>
          <td>{story.createdDate}</td>
          <td>{story.owner.name}</td>
          <td>
            <Link to={`/admin/stories/${story._id}`}>
              <button>Edit</button>
            </Link>
          </td>
          <td>
            <button onClick={() => this.deleteHandler(story._id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="manage-stories">
        <Link id="add-stories-button" to="/admin/stories/add">
          Add
        </Link>
        <Switch>
          <Route
            exact
            path="/admin/stories"
            render={() => {
              return (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Business Name</th>
                        <th>Created Date</th>
                        <th>Owner Name</th>
                        <th>Level</th>
                        <th>Delete</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>{tableData}</tbody>
                  </table>
                </div>
              );
            }}
          />
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
