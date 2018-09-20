import React from "react";
import { Switch, Route } from "react-router-dom";
const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={People} />
        <Route path="/openings" component={Openings} />
        <Route path="/profile" component={Profile} />
        <Route path="/Data" component={Data} />
        <Route path="/About" component={About} />
      </Switch>
    </main>
  );
};

export default Main;
