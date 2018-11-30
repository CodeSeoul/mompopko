import React from "react";
import FbApp from "../../../config/firebase";
import { Switch, Route } from "react-router-dom";

const db = FbApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

class StoriesContainer extends React.Component {
  state = {
    isPeopleLoaded: false,
    isOpeningsLoaded: false,
    people: [],
    openings: []
  };

  componentDidMount() {
    db.collection("openings")
      .orderBy("timeCreated", "desc")
      .get()
      .then(collection => {
        const openings = collection.docs.map(doc => {
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ openings: openings, isOpeningsLoaded: true });
      });

    db.collection("people")
      .orderBy("timeCreated", "desc")
      .get()
      .then(collection => {
        const people = collection.docs.map(doc => {
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ people: people, isPeopleLoaded: true });
      });
  }
  render() {
    return (
      <Switch>
        <Route path="/stories" />
        <Route path="/stories/:id" />
      </Switch>
    );
  }
}

export default StoriesContainer;
