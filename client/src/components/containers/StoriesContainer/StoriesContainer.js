import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Stories from "../../presentational/Stories/Stories";
import StoryStyle from "../../../styles/components/containers/StoryStyle/StoryStyle";
import MenuNavi from "../../presentational/MenuNavi";

class StoriesContainer extends React.Component {
  state = {
    isLoaded: false,
    stories: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/stories")
      .then(res => {
        console.log(res);
        this.setState({ isLoaded: true, stories: res.data.stories });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return this.state.isLoaded === true ? (
      <React.Fragment>
        <StoryStyle>
          <MenuNavi menuName="Stories" />
          <Switch>
            <Route
              exact
              path="/stories"
              render={() => {
                return <Stories stories={this.state.stories} />;
              }}
            />
            <Route path="/stories/:id" />
          </Switch>
        </StoryStyle>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <StoryStyle>
          <MenuNavi menuName="Stories" />
          <div>Loading</div>
        </StoryStyle>
      </React.Fragment>
    );
  }
}

export default StoriesContainer;
