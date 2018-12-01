import React, { Component } from "react";
import StoryStyle from "../../../styles/components/containers/StoryStyle/StoryStyle";
import { Link } from "react-router-dom";

class Story extends Component {
  state = {};

  render() {
    const { story } = this.props;
    console.log(story);

    return (
      <StoryStyle>
        <Link to={`/stories/${story.id}`}>
          <div className="story-card">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2018/04/05/23/30/nature-3294543_960_720.jpg"
            />
            <div className="description">
              <div id="story-category">
                <i className="fas fa-user" />
                {story.business.category}
              </div>
              <br />
              <div id="story-businessName">{story.business.businessName}</div>
            </div>
          </div>
        </Link>
        \{" "}
      </StoryStyle>
    );
  }
}

export default Story;
