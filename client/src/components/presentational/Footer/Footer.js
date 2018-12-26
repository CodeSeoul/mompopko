import React from "react";
import FooterStyle from "../../../styles/presentational/FooterStyle";
import EmailSubscription from "../../containers/EmailSubscription/EmailSubscription";
import Modal from "../../presentational/Modal/Modal";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";

class Footer extends React.Component {
  state = {
    show: false
  };

  ShowModal = (e, event) => {
    let newShow = this.state.show;
    this.setState({
      show: !newShow
    });
  };

  onClose = () => {
    let newShow = this.state.show;
    this.setState({
      show: !newShow
    });
  };

  render() {
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
          <a onClick={e => this.ShowModal(e)}>Contact</a>
          <Link to="#">Copyright</Link>
          <Link to="#">Collaborate</Link>
        </div>
        <Modal show={this.state.show} onClose={() => this.onClose()}>
          {/* Modal Content should be modularized
              changeHandle to be added */}
          <Contact className="contact" />
        </Modal>
      </FooterStyle>
    );
  }
}

export default Footer;
