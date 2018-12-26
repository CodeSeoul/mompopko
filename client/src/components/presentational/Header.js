import React from "react";
import Brand from "./Brand";
import Navbar from "./Navbar";
import Search from "./Search";
const Header = props => {
  return (
    <div className="header">
      <Brand />
      <Navbar />
      <Search />
    </div>
  );
};

export default Header;
