import React from "react";
import Brand from "../Brand";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const Header = props => {
  return (
    <div className="header">
      <Brand />
      <AdminNavbar />
    </div>
  );
};

export default Header;
