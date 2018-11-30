import React from "react";
import FbApp from "../../../config/firebase";
import { Switch, Route } from "react-router-dom";

const db = FbApp.firestore();
db.settings({
  timestampsInSnapshots: true
});

class PeopleAndOpeningsContainer extends React.Component {
  render() {
    return <div>People And Openings</div>;
  }
}

export default PeopleAndOpeningsContainer;
