import React from "react";
import FbApp from "../../../config/firebase";
import { Switch, Route } from "react-router-dom";

const db = FbApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

class StoriesContainer extends React.Component {
  state = {
    isLoaded: false,
    stories: []
  };

  componentDidMount() {
    db.collection("stories")
      .orderBy("timeCreated", "desc")
      .get()
      .then(collection => {
        const stories = collection.docs.map(doc => {
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ stories: stories, isLoaded: true });
      });
  }
  render() {
    return this.state.isLoaded === true ? (
      <Switch>
        <Route path="/stories" />
        <Route path="/stories/:id" />
      </Switch>
    ) : null;
  }
}

export default StoriesContainer;
