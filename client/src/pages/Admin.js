import React from "react";
import { Switch, Route } from "react-router-dom";
import ManageStories from "../components/containers/Admin/ManageStories/ManageStories";
import Login from "../components/containers/Login/Login";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

class Admin extends React.Component {
  state = {
    isLoggedIn: false
  };

  signOut = () => {};

  signInHandler = (email, password) => {
    const data = {
      email,
      password
    };

    axios
      .post("http://localhost:5000/api/admin/login", data)
      .then(res => {
        this.setState({ isLoggedIn: true });
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
      })
      .catch(err => console.log(err));
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.props.history.push("stories");
    }
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {this.state.isLoggedIn ? (
          <div>
            <button onClick={() => this.signOut()}>sign out</button>
            <Switch>
              {/* <Route path="/admin/stories" component={ManageStories} /> */}
              <Route
                path="/admin/stories"
                render={props => {
                  return (
                    <ManageStories {...props} stories={this.props.stories} />
                  );
                }}
              />
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
      </React.Fragment>
    );
  }
}

export default Admin;
