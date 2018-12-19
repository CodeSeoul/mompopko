import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Homepage";
import Stories from "../pages/Stories";
import Profile from "../pages/Profile";
import Data from "../pages/Data";
import About from "../pages/About";
import Admin from "../pages/Admin";
import AddData from "../pages/AddDataPage";
import Header from "./presentational/Header";
import Footer from "./presentational/Footer/Footer";
import AdminHeader from "./presentational/AdminHeader/AdminHeader";

class Main extends React.Component {
  state = {
    stories: {}
  };

  componentDidMount() {}

  render() {
    return (
      <main>
        <Switch>
          <Route path="/admin" component={AdminHeader} />
          <Route path="/" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/stories"
            render={props => {
              return <Stories {...props} stories={this.state.stories} />;
            }}
          />
          <Route path="/profile" component={Profile} />
          <Route path="/data" component={Data} />
          <Route path="/about" component={About} />
          {/* <Route path="/admin" component={Admin}  /> */}
          <Route
            path="/admin"
            render={props => <Admin {...props} stories={this.state.stories} />}
          />
          <Route path="/addData" component={AddData} />
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
