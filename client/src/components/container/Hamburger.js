import React, { Component } from "react";
import HamburgerStyle from "../../styles/presentational/HamburgerStyle";

class Hamburger extends Component {
  render() {
    return (
      <HamburgerStyle>
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
      </HamburgerStyle>
    );
  }
}

export default Hamburger;
