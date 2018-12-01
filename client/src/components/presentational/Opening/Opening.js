import React, { Component } from "react";
import OpeningStyle from "../../../styles/presentational/OpeningStyle.js";
import { Link } from "react-router-dom";

class Opening extends Component {
  state = {};

  render() {
    const { opening } = this.props;
    console.log(this.props.opening);
    return (
      <OpeningStyle>
        <Link to={`/openings/${opening.id}`}>
          <div className="opening-card">
            <img alt="" src={opening.imgURLs[0]} />
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
