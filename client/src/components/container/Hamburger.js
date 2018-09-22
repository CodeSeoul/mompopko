import React, { Component } from "react";
import HamburgerStyle from "../../styles/presentational/HamburgerStyle";

class Hamburger extends Component {
  state = {
    toggle: false
  };

  toggleHamburger = () => {
    const newToggle = !this.state.toggle;
    this.setState({
      toggle: newToggle
    });
  };

  render() {
    return (
      <HamburgerStyle onClick={() => this.toggleHamburger}>
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
      </HamburgerStyle>
    );
  }
}

export default Hamburger;
