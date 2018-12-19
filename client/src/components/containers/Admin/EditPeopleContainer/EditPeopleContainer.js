import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import EditPeopleStyle from "../../../../styles/components/containers/admin/EditPeopleStyle/EditPeopleStyle";
import EditPerson from "../EditPerson/EditPerson";

class EditPeopleContainer extends Component {
  state = {};
  deleteHandler = (id, subImgURLs) => {};
  componentDidMount() {}
  render() {
    const tableData = !this.state.isLoaded
      ? null
      : this.state.people.map((row, index) => {
          return (
            <tr key={row.id}>
              <td>{index}</td>
              <td>{row.name}</td>
              <td>{row.business}</td>
              <td>
                <Link to={`/admin/people/${row.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => this.deleteHandler(row.id, row.subImgURLs)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        });
    return !this.state.isLoaded ? null : (
      <EditPeopleStyle>
        <div>EditPeople</div>
        <Switch>
          <Route
            exact
            path="/admin/people"
            render={() => {
              return (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Owner</th>
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
          <Route
            path="/admin/people/:id"
            render={props => {
              const person = this.state.people.filter(person => {
                return person.id === props.match.params.id;
              });
              return <EditPerson person={person[0]} />;
            }}
          />
        </Switch>
      </EditPeopleStyle>
    );
  }
}

export default EditPeopleContainer;
