import React from "react";
import FooterStyle from "../../../styles/presentational/FooterStyle";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <FooterStyle>
      <div className="subscribe">Subscribe</div>
      <div className="email" />
      <div className="icon-container">
        <Link to="#">Instagram</Link>
        <Link to="#">Instagram</Link>
        <Link to="#">Youtube</Link>
      </div>
      <div>
        <Link to="#">Contact</Link>
        <Link to="#">Copyright</Link>
        <Link to="#">Collaborate</Link>
      </div>
    </FooterStyle>
  );
};

export default Footer;
