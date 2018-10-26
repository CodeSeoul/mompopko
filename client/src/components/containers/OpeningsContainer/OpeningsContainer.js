import React, { Component } from "react";
import OpeningsStyle from "../../../styles/components/containers/OpeningsStyle/OpeningsStyle";
import Opening from "../../presentational/Opening/Opening";
import FbApp from "../../../config/firebase";

const db = FbApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

class OpeningsContainer extends Component {
  state = {};

  componentDidMount() {
    db.collection("openings")
      .get()
      .then(collection => {
        const openings = collection.docs.map(doc => {
          return { ...doc.data(), id: doc.id };
        });
        this.setState({
          openings: openings
        });
      });
  }

  render() {
    return (
      <OpeningsStyle>
        <Opening />
      </OpeningsStyle>
    );
  }
}

export default OpeningsContainer;
