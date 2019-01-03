import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import AddStories from "./AddStories";
import Search from "../../../presentational/Search";
import { connect } from "react-redux";

class ManageStories extends Component {
  state = {
    searchKey: ""
  };

  searchHandler(e) {
    e.preventDefault();
    const searchKey = e.target.value;
    this.setState({ searchKey: searchKey });
    console.log(this.state.searchKey);
  }

  static getDerivedStateFromProps(nextProps) {
    console.log(nextProps);
    if (nextProps.story) {
      return { story: nextProps.story };
    }
  }

  render() {
    const { story } = this.props;
    const tableData = story.isLoaded
      ? story.stories.map((story, index) => {
          if (story.business.name.includes(this.state.searchKey)) {
            return (
              <tr key={index}>
                <td>{story.business.name}</td>
                <td>{story.createdDate}</td>
                <td>{story.owner.name}</td>
                <td>{story.level}</td>
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
          } else {
            return null;
          }
        })
      : null;
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
                <React.Fragment>
                  <Search
                    searchHandler={e => {
                      this.searchHandler(e);
                    }}
                  />
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Business Name</th>
                          <th>Created Date</th>
                          <th>Owner Name</th>
                          <th>Level</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>{tableData}</tbody>
                    </table>
                  </div>
                </React.Fragment>
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
          <Route
            path="/admin/stories/:id"
            render={props => {
              return <div>{props.match.params.id}</div>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const MapStateToProps = state => ({
  story: state.story
});

export default connect(
  MapStateToProps,
  {}
)(ManageStories);
