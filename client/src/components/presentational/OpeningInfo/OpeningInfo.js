import React, { Component } from "react";

class OpeningsInfo extends Component {
  render() {
    return (
      <div>
        Opening Info Page
        {props.opening.id}
      </div>
    );
  }
}

export default OpeningsInfo;
