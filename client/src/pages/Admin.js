import React from "react";
import { Switch, Route } from "react-router-dom";
import ManageStories from "../components/containers/Admin/ManageStories/ManageStories";
import AdminStyle from "../styles/pages/AdminStyle";
import Login from "../components/containers/Login/Login";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../actions/authActions";

class Admin extends React.Component {
  state = {};

  signOut = () => {
    this.props.logoutUser();
  };

  signInHandler = (email, password) => {
    const userData = {
      email,
      password
    };
    this.props.loginUser(userData);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth) {
      return { auth: nextProps.auth };
    }
    return null;
  }

  render() {
    const { errors, auth } = this.state;

    return (
      <React.Fragment>
        <AdminStyle>
          {auth.isAuthenticated ? (
            <div>
              <button id="signout" onClick={() => this.signOut()}>
                sign out
              </button>
              <Switch>
                <Route path="/admin/stories" component={ManageStories} />
                <Route path="/admin/data" />
                <Route path="/admin/about" />
              </Switch>
            </div>
          ) : (
            <Login
              submitHandler={(email, password) =>
                this.signInHandler(email, password)
              }
            />
          )}
        </AdminStyle>
      </React.Fragment>
    );
  }
}

Admin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, logoutUser }
)(Admin);
