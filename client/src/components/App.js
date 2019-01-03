import React from "react";
import GlobalStyle from "../styles/globalStyle";
import Main from "./Main.js";
import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <GlobalStyle />
          <Main />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
