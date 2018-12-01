import React from "react";
import FbApp from "../../../config/firebase";
import { Switch, Route } from "react-router-dom";
import Story from "../../presentational/Story/Story";

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
    const stories = this.state.stories.map((story, index) => {
      if (index > 15) {
        return null;
      }
      return <Story story={story} />;
    });

    console.log(stories);
    return this.state.isLoaded == true ? (
      <Switch>
        <Route
          exact
          path="/stories"
          render={() => {
            return stories;
          }}
        />
        <Route path="/stories/:id" />
      </Switch>
    ) : (
      <div>Loading</div>
    );
  }
}

export default StoriesContainer;
