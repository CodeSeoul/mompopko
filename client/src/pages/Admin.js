import React from "react";
import { Switch, Route } from "react-router-dom";
import FbApp from "../config/firebase";
import EditPeopleContainer from "../components/containers/Admin/EditPeopleContainer/EditPeopleContainer";
import EditOpeningsContainer from "../components/containers/Admin/EditOpeningsContainer/EditOpeningsContainer";
import ManageStories from "../components/containers/Admin/ManageStories/ManageStories";
import Login from "../components/containers/Login/Login";

const auth = FbApp.auth();

auth.onAuthStateChanged(user => {
  if (user) {
    const { uid } = user;
    console.log(user);
  } else {
  }
});

class Admin extends React.Component {
  state = {
    isLoggedIn: true
  };
  signInHandler = (email, password) => {
    if (auth.currentUser) {
      auth.signOut();
      this.setState({
        isLoggedIn: false
      });
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong Password");
        } else {
          alert(errorMessage);
        }
      });
  };

  signOut = () => {
    auth.signOut().then(
      this.setState({
        isLoggedIn: false
      })
    );
  };
  render() {
    return (
      <React.Fragment>
        {this.state.isLoggedIn ? (
          <div>
            <button onClick={() => this.signOut()}>sign out</button>
            <Switch>
              <Route path="/admin/people" component={EditPeopleContainer} />
              <Route path="/admin/openings" component={EditOpeningsContainer} />
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
      </React.Fragment>
    );
  }
}

export default Admin;
