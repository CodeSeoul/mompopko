import React from "react";
import { Switch, Route } from "react-router-dom";
import FbApp from "../config/firebase";
import EditPeopleContainer from "../components/containers/Admin/EditPeopleContainer/EditPeopleContainer";
import EditOpeningsContainer from "../components/containers/Admin/EditOpeningsContainer/EditOpeningsContainer";
import Login from "../components/containers/Login/Login";

const auth = FbApp.auth();

const Admin = () => {
  let signInHandler = (email, password) => {
    if (auth.currentUser) {
      auth.signOut();
    }
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong Password");
      } else {
        alert(errorMessage);
      }
    });
  };

  auth.onAuthStateChanged(user => {
    if (user) {
      const { uid } = user;
      console.log(user);
    } else {
    }
  });

  return (
    <React.Fragment>
      <Login
        submitHandler={(email, password) => signInHandler(email, password)}
      />
      <Switch>
        <Route path="/admin/people" component={EditPeopleContainer} />
        <Route path="/admin/openings" component={EditOpeningsContainer} />
        <Route path="/admin/data" />
        <Route path="/admin/about" />
      </Switch>
    </React.Fragment>
  );
};

export default Admin;
