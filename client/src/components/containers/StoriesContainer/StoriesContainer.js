import React from "react";
import { Switch, Route } from "react-router-dom";
import Stories from "../../presentational/Stories/Stories";
import StoryStyle from "../../../styles/components/containers/StoryStyle/StoryStyle";
import MenuNavi from "../../presentational/MenuNavi";
import { connect } from "react-redux";

class StoriesContainer extends React.Component {
  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.story) {
      return { story: nextProps.story };
    }
    return null;
  }

  render() {
    const { stories, isLoaded } = this.state.story;

    return isLoaded === true ? (
      <React.Fragment>
        <StoryStyle>
          <MenuNavi menuName="Stories" />
          <Switch>
            <Route
              exact
              path="/stories"
              render={() => {
                return <Stories stories={stories} />;
              }}
            />
            <Route
              path="/stories/:id"
              render={props => {
                return <div>Hello</div>;
              }}
            />
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

const mapStateToProps = state => {
  return {
    story: state.story
  };
};

export default connect(
  mapStateToProps,
  {}
)(StoriesContainer);
