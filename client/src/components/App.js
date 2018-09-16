import React, { Component } from "react";
import injectGlobal from "../styles/globalStyle";

class App extends Component {
  render() {
    return (
      <injectGlobal>
        <div>Seoul Revisioned</div>
      </injectGlobal>
    );
  }
}

export default App;
