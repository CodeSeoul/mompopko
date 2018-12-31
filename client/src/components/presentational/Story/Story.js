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
              alt="Not Loaded"
              src={"http://localhost:5000/api/stories/image/" + story.image[0]}
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
