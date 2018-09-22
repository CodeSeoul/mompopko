import React from "react";
import Brand from "./Brand";
import Navbar from "./Navbar";

const Header = props => {
  return (
    <div className="header">
      <Brand />
      <Navbar />
    </div>
  );
};

export default Header;
