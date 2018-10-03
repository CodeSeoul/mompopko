import React, { Component } from "react";
import People from "../../../styles/components/People/People";
import Person from "../../presentational/Person/Person";
import FbApp from "../../../config/firebase";

const db = FbApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

class PeopleContainer extends Component {
  state = {
    people: []
  };
  componentDidMount() {
    db.collection("people")
      .get()
      .then(collection => {
        const people = collection.docs.map(doc => {
          console.log(doc.data(), "doc");
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ people: people });
      });
  }

  render() {
    console.log(this.state);
    const people = this.state.people.map(person => {
      return <Person key={person.id} person={person} />;
    });
    return (
      <People>
        <div className="header">People</div>
        <div className="container">
          <div className="grid-container" id="people">
            {people}
          </div>
        </div>
      </People>
    );
  }
}
export default PeopleContainer;
