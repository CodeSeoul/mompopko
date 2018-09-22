import React from "react";
import Brand from "../../styles/presentational/Brand";

const Header = props => {
  return (
    <div className="header">
      <Brand>
        <h1>Seoul Re-visioned</h1>
      </Brand>
      <div className="navbar" />
    </div>
  );
};

export default Header;
