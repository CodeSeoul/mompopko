import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import AddOpeningsContainer from "./AddOpeningsContainer/AddOpeningsContainer";

class EditOpeningsContainer extends React.Component {
  state = {
    isLoaded: false
  };

  deleteHandler = (id, imgURLs) => {};

  componentDidMount() {}

  render() {
    const tableData = !this.state.isLoaded
      ? null
      : this.state.openings.map((row, index) => {
          return (
            <tr key={row.id}>
              <td>{index}</td>
              <td>{row.name}</td>
              <td>
                <Link to={`/admin/openings/${row.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
              <td>
                <button onClick={() => this.deleteHandler(row.id, row.imgURLs)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        });
    return (
      <Switch>
        <Route
          exact
          path="/admin/openings"
          render={() => {
            return (
              <table className="table">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Business</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{tableData}</tbody>
              </table>
            );
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
