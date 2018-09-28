import React, { Component } from "react";
import injectGlobal from "../styles/globalStyle";
import Main from "./Main.js";
import firebase from "firebase";

const App = () => {
  return (
    <injectGlobal>
      <Main />
    </injectGlobal>
  );
};

export default App;
