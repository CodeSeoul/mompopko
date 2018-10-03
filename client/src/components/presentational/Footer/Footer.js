import React from "react";
import FooterStyle from "../../../styles/presentational/FooterStyle";
import EmailSubscription from "../../containers/EmailSubscription/EmailSubscription";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <FooterStyle>
      <div className="subscribe">Subscribe</div>
      <EmailSubscription />
      <div className="icon-container">
        <Link to="#">
          <i className="fab fa-facebook" />
        </Link>
        <Link to="#">
          <i className="fab fa-instagram" />
        </Link>
        <Link to="#">
          <i className="fab fa-youtube" />
        </Link>
      </div>
      <div className="copyright-container">
        <Link to="#">Contact</Link>
        <Link to="#">Copyright</Link>
        <Link to="#">Collaborate</Link>
      </div>
    </FooterStyle>
  );
};

export default Footer;
