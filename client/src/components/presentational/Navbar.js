import React, { Component } from "react";
import NavbarStyle from "../../styles/presentational/NavbarStyle";
import { Link } from "react-router-dom";
import HamburgerMenu from "../containers/HamburgerMenu/HamburgerMenu";

class Navbar extends Component {
  state = {
    toggle: false
  };

  toggleHamburger = toggle => {
    const newToggle = !this.state.toggle;
    this.setState({
      toggle: newToggle
    });
  };

  render() {
    return (
      <NavbarStyle toggle={this.state.toggle}>
        <HamburgerMenu toggleHamburger={() => this.toggleHamburger()} />
        <nav className="container">
          <ul className="menu">
            <Link to="/stories">Stories</Link>
            <Link to="/data">Data Trends</Link>
            <Link to="/about">About</Link>
          </ul>
          <ul className="sns">
            <Link to="#">
              <i className="fab fa-facebook-square" />
            </Link>
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
            <Link to="#">
              <i className="fab fa-youtube" />
            </Link>
          </ul>
        </nav>
      </NavbarStyle>
    );
  }
}

export default Navbar;
