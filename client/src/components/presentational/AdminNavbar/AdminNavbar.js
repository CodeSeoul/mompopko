import React, { Component } from "react";
import NavbarStyle from "../../../styles/presentational/AdminNavbarStyle";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../containers/HamburgerMenu/HamburgerMenu";

class AdminNavbar extends Component {
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
      <NavbarStyle adminNavbar={true} toggle={this.state.toggle}>
        <HamburgerMenu toggleHamburger={() => this.toggleHamburger()} />
        <nav className="container">
          <ul className="menu">
            <Link to="/admin/stories">Story</Link>
            <Link to="/admin/data">Data Trends</Link>
            <Link to="/admin/about">About</Link>
          </ul>
        </nav>
      </NavbarStyle>
    );
  }
}

export default AdminNavbar;
