import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    id: "",
    password: ""
  };

  render() {
    <form>
      <input type="email" />
      <input type="password" />
    </form>;
  }
}

Login.propTypes = {
  id: PropTypes.any.isRequired,
  password: PropTypes.any.isRequired
};
export default Login;
