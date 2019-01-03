import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginStyle from "../../../styles/container/LoginStyle/LoginStyle";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = e => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <LoginStyle>
        <form method="post" onSubmit={e => this.submitHandler(e)}>
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
          <span id="error-message">
            {this.props.errors[Object.keys(this.props.errors)[0]]}
          </span>
          <button>Login</button>
        </form>
      </LoginStyle>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
};
export default Login;
