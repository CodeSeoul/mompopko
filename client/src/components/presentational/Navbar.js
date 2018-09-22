import React from "react";
import NavbarStyle from "../../styles/presentational/NavbarStyle";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <NavbarStyle>
      <nav className="container">
        <ul>
          <Link to="/people">People</Link>
          <Link to="/openings">New Openings</Link>
          <Link to="/data">Data Trends</Link>
          <Link to="/about">About</Link>
        </ul>
        <ul>
          <Link to="#">FB</Link>
          <Link to="#">IG</Link>
          <Link to="#">YT</Link>
        </ul>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
