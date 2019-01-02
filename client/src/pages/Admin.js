import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import ManageStories from "../components/containers/Admin/ManageStories/ManageStories";
import AdminStyle from "../styles/pages/AdminStyle";
import Login from "../components/containers/Login/Login";
import setAuthToken from "../utils/setAuthToken";

class Admin extends React.Component {
  state = {
    isLoggedIn: true
  };

  signOut = () => {

  };

  signInHandler = (email, password) => {
    const data = {
      email,
      password
    };

  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.props.history.push("stories");
    }
  }

  render() {
    console.log(this.props);
    return ( <
      React.Fragment >
      <
      AdminStyle > {
        this.state.isLoggedIn ? ( <
          div >
          <
          button id = "signout"
          onClick = {
            () => this.signOut()
          } >
          sign out <
          /button> <
          Switch > { /* <Route path="/admin/stories" component={ManageStories} /> */ } <
          Route path = "/admin/stories"
          render = {
            props => {
              return ( <
                ManageStories { ...props
                }
                stories = {
                  this.props.stories
                }
                />
              );
            }
          }
          /> <
          Route path = "/admin/data" / >
          <
          Route path = "/admin/about" / >
          <
          /Switch> < /
          div >
        ) : ( <
          Login submitHandler = {
            (email, password) =>
            this.signInHandler(email, password)
          }
          />
        )
      } <
      /AdminStyle> < /
      React.Fragment >
    );
  }
}

export default Admin;