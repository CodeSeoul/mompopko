import React from "react";
import { Switch, Route } from "react-router-dom";
import ManageStories from "../components/containers/Admin/ManageStories/ManageStories";
import Login from "../components/containers/Login/Login";
import axios from "axios";

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
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };
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
