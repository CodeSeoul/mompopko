import React, { Component } from "react";

class EditPerson extends Component {
  state = {};

  render() {
    console.log(this.props.person);
    return <div>Editing this</div>;
  }
}

export default EditPerson;
