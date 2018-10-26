import React, { Component } from "react";
import OpeningsStyle from "../../../styles/components/containers/OpeningsStyle/OpeningsStyle";
import Opening from "../../presentational/Opening/Opening";

class OpeningsContainer extends Component {
  state = {};

  render() {
    return (
      <OpeningsStyle>
        <Opening />
      </OpeningsStyle>
    );
  }
}

export default OpeningsContainer;
