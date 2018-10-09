import React, { Component } from "react";
import FbApp from "../../../../config/firebase";
import EditPeopleStyle from "../../../../styles/components/containers/admin/EditPeopleStyle/EditPeopleStyle";

const db = FbApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

class EditPeopleContainer extends Component {
  state = {};
  componentDidMount() {
    db.collection("people")
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
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          );
        });
    return (
      <EditPeopleStyle>
        <div>EditPeople</div>
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
      </EditPeopleStyle>
    );
  }
}

export default EditPeopleContainer;
