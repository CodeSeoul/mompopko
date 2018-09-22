import React from "react";
import HamburgerStyle from "../../styles/presentational/HamburgerStyle";
import { Link } from "react-router-dom";
const Hamburger = props => {
  return (
    <HamburgerStyle>
      <div className="hamburger-bar" />
      <div className="hamburger-bar" />
      <div className="hamburger-bar" />
    </HamburgerStyle>
  );
};

export default Hamburger;
