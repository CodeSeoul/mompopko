import React from "react";
import { Switch, Route } from "react-router-dom";
import Story from "../../presentational/Story/Story";

class StoriesContainer extends React.Component {
  state = {
    isLoaded: false,
    stories: []
  };

  componentDidMount() {}
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
