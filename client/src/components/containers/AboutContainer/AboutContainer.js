import React, { Component } from "react";
import MenuNavi from "../../presentational/MenuNavi.js";
import AboutStyle from "../../../styles/components/containers/AboutStyle/AboutStyle";

class AboutContainer extends Component {
  render() {
    return (
      <AboutStyle>
        <MenuNavi menuName="About" />
      </AboutStyle>
    );
  }
}
export default AboutContainer;
