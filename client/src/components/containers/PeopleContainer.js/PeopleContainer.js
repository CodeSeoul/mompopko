import React, { Component } from "react";
import config from "../../../config/config";
import People from "../../../styles/components/People/People";
import Person from "../../presentational/Person/Person";
const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp(config);
const db = firebase.firestore();

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
        {people}
      </People>
    );
  }
}
export default PeopleContainer;
