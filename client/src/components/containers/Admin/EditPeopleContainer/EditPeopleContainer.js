import React, { Component } from "react";
import FbApp from "../../../../config/firebase";
import EditPeopleStyle from "../../../../styles/components/containers/admin/EditPeopleStyle/EditPeopleStyle";

const db = FbApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

class EditPeopleContainer extends Component {
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
    return (
      <EditPeopleStyle>
        <div>EditPeople</div>
        <table className="table">
          <tr>
            <th>Number</th>
            <th>Owner</th>
            <th>Business</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </table>
      </EditPeopleStyle>
    );
  }
}

export default EditPeopleContainer;
