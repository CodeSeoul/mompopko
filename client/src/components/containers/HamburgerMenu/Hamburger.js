import React, { Component } from "react";
import HamburgerMenuStyle from "../../../styles/presentational/HamburgerMenuStyle";

class HamburgerMenu extends Component {
  render() {
    return (
      <HamburgerMenuStyle onClick={() => this.props.toggleHamburger()}>
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
      </HamburgerMenuStyle>
    );
  }
}

export default HamburgerMenu;
