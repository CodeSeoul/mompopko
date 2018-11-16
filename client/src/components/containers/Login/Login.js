import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    <form>
      <input
        value={this.state.email}
        name="email"
        onChange={e => {
          this.changeHandler(e);
        }}
        type="email"
      />
      <input
        name="password"
        value={this.state.password}
        onChange={e => {
          this.changeHandler(e);
        }}
        type="password"
      />
    </form>;
  }
}

Login.propTypes = {
  email: PropTypes.any.isRequired,
  password: PropTypes.any.isRequired
};
export default Login;
