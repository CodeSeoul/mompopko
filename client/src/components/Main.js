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
        <Route path="/data" component={Data} />
        <Route path="/about" component={About} />
        <Route path="admin" component={Admin} />
      </Switch>
    </main>
  );
};

export default Main;
