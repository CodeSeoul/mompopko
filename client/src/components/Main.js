import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Homepage";
import People from "../pages/People";
import Openings from "../pages/Openings";
import Stories from "../pages/Stories";
import Profile from "../pages/Profile";
import Data from "../pages/Data";
import About from "../pages/About";
import Admin from "../pages/Admin";
import AddData from "../pages/AddDataPage";
import AddPeople from "../pages/AddPeople";
import Header from "./presentational/Header";
import Footer from "./presentational/Footer/Footer";
import AdminHeader from "./presentational/AdminHeader/AdminHeader";
import FbApp from "../config/firebase";

const db = FbApp.firestore();
db.settings({
  timestampsInSnapshots: true
});

class Main extends React.Component {
  state = {
    story: {}
  };

  componentDidMount() {
    var newState = { ...this.state };

    db.collection("stories")
      .doc("level1")
      .collection("data")
      .get()
      .then(collection => {
        newState.story.level1 = collection.docs.map(doc => {
          return doc.data();
        });
      });
    db.collection("stories")
      .doc("level2")
      .collection("data")
      .get()
      .then(collection => {
        newState.story.level2 = collection.docs.map(doc => {
          return doc.data();
        });
      });
    db.collection("stories")
      .doc("level3")
      .collection("data")
      .get()
      .then(collection => {
        newState.story.level3 = collection.docs.map(doc => {
          return doc.data();
        });
      });
    this.setState(newState);
    console.log(this.state);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path="/admin" component={AdminHeader} />
          <Route path="/" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stories" component={Stories} />
          <Route path="/profile" component={Profile} />
          <Route path="/data" component={Data} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          <Route path="/addData" component={AddData} />
          <Route path="/addPeople" component={AddPeople} />
        </Switch>
        <Switch>
          <Route path="/admin" />
          <Route path="/" component={Footer} />
        </Switch>
      </main>
    );
  }
}

export default Main;
