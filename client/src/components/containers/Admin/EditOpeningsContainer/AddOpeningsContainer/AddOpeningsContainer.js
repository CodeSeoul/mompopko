import React, { Component } from "react";
import AddOpenings from "../../../../presentational/Admin/Openings/AddOpenings/AddOpenings";

class AddOpeningsContainer extends Component {
  state = {};

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  render() {
    return (
      <AddOpenings opening={this.state} changeHandler={this.changeHandler}>
        Add Openings
      </AddOpenings>
    );
  }
}

export default AddOpeningsContainer;
