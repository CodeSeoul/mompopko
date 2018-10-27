import React, { Component } from "react";
import OpeningStyle from "../../../styles/presentational/OpeningStyle.js";
import { Link } from "react-router-dom";

class Opening extends Component {
  state = {};

  render() {
    const { opening } = this.props;
    return (
      <OpeningStyle>
        <Link to={`/openings/${opening.id}`}>
          <div className="opening-card">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_960_720.jpg"
            />
            <div className="description">
              <div id="opening-category">
                <i className="fas fa-user" />
                {opening.category}
              </div>
              <br />
              <div id="opening-businessName">{opening.businessName}</div>
            </div>
          </div>
        </Link>
      </OpeningStyle>
    );
  }
}

export default Opening;
