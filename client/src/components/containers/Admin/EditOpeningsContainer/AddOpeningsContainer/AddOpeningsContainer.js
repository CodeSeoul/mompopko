import React, { Component } from "react";
import AddOpenings from "../../../../presentational/Admin/Openings/AddOpenings/AddOpenings";

class AddOpeningsContainer extends Component {
  state = {
    opening: {},
    images: FileList
  };

  uploadHandler = e => {
    e.preventDefault();
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newOpening = { ...this.state.opening };

    switch (name) {
      case "images": {
        let images = [...e.target.files];
        this.setState({
          images: images
        });
        break;
      }
      default: {
        this.setState({
          opening: { ...newOpening, [name]: value }
        });
      }
    }

    console.log(this.state);
  };

  render() {
    return (
      <AddOpenings
        opening={this.state.opening}
        changeHandler={this.changeHandler}
        uploadHandler={this.uploadHandler}
      >
        Add Openings
      </AddOpenings>
    );
  }
}

export default AddOpeningsContainer;
