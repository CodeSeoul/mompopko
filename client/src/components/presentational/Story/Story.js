import React, { Component } from "react";
import OpeningStyle from "../../../styles/presentational/OpeningStyle.js";
import { Link } from "react-router-dom";

class Story extends Component {
  state = {};

  render() {
    const { story } = this.props;
    console.log(story);

    return (
      <OpeningStyle>
        <Link to={`/stories/${story.id}`}>
          <div className="opening-card">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2018/04/05/23/30/nature-3294543_960_720.jpg"
            />
            <div className="description">
              <div id="opening-category">
                <i className="fas fa-user" />
                {story.business.category}
              </div>
              <br />
              <div id="opening-businessName">{story.business.businessName}</div>
            </div>
          </div>
        </Link>
      </OpeningStyle>
    );
  }
}

export default Story;
