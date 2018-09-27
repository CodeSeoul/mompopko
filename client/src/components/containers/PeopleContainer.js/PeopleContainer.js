import React, { Component } from "react";
import config from "../../../config/config";
import People from "../../../styles/components/People/People";
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
        const people = collection.docs.map(doc => doc.data());
        this.setState({ people: people });
      });
  }

  render() {
    console.log(this.state);
    return (
      <People>
        <div className="header">People</div>
        <div className="people" />
      </People>
    );
  }
}
export default PeopleContainer;
