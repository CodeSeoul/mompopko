import React, { Component } from "react";
import AddOpenings from "../../../../presentational/Admin/Openings/AddOpenings/AddOpenings";
import FbApp from "../../../../../config/firebase";

const db = FbApp.firestore();
db.settings({
  timestampsInSnapshots: true
});

class AddOpeningsContainer extends Component {
  state = {
    opening: {}
  };

  uploadHandler = e => {
    e.preventDefault();
    const opening = this.state.opening;
    db.collection("openings").add({
      ...opening,
      timeCreated: FbApp.firebase_.firestore.Timestamp.now()
    });
    e.target.reset();
    this.setState({ opening: {} });
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    const newOpening = { ...this.state.opening };

    this.setState({
      opening: { ...newOpening, [name]: value }
    });
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
