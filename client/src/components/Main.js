import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Homepage";
import People from "../pages/People";
import Openings from "../pages/Openings";
import Profile from "../pages/Profile";
import Data from "../pages/Data";
import About from "../pages/About";
import Admin from "../pages/Admin";
import AddData from "../pages/AddDataPage";
import AddPeople from "../pages/AddPeople";
import Header from "./presentational/Header";
import Footer from "./presentational/Footer/Footer";

const Main = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={People} />
        <Route path="/openings" component={Openings} />
        <Route path="/profile" component={Profile} />
        <Route path="/data" component={Data} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={Admin} />
        <Route path="/addData" component={AddData} />
        <Route path="/addPeople" component={AddPeople} />
      </Switch>
      <Footer />
    </main>
  );
};

export default Main;
