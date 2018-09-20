import React, { Component } from "react";
import injectGlobal from "../styles/globalStyle";
import Main from "./Main.js";

const App = () => {
  return (
    <injectGlobal>
      <Main />
    </injectGlobal>
  );
};

export default App;
