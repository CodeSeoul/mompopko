import React, { Component } from "react";
import FbApp from "../../../../config/firebase";
import { Link, Switch, Route } from "react-router-dom";
import EditPeopleStyle from "../../../../styles/components/containers/admin/EditPeopleStyle/EditPeopleStyle";
import EditPerson from "../EditPerson/EditPerson";

const db = FbApp.firestore();
const storage = FbApp.storage();

db.settings({
  timestampsInSnapshots: true
});

class EditPeopleContainer extends Component {
  state = {};
  deleteHandler = (id, subImgURLs) => {
    console.log(id, subImgURLs);
    db.collection("people")
      .doc(id)
      .delete()
      .then(() => {
        console.log("successfully deleted");
      })
      .catch(err => {
        console.log(err);
      });
    for (let i = 0; i < subImgURLs.length; i++) {
      let personRef = storage
        .ref()
        .child("people")
        .child(id)
        .child(`${id}_sub${i}`);
      personRef
        .delete()
        .then(() => {
          console.log("successfully deleted");
        })
        .catch(err => {
          console.log(err);
        });
    }
    let personRef = storage
      .ref()
      .child("people")
      .child(id)
      .child(`${id}_main`);
    personRef
      .delete()
      .then(() => {
        console.log("successfully deleted");
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    db.collection("people")
      .orderBy("timeCreated", "desc")
      .get()
      .then(collection => {
        const people = collection.docs.map(doc => {
          console.log(doc.data(), "doc");
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ people: people, isLoaded: true });
      });
  }
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
