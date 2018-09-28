import React from "react";
import AddPeopleData from "../../presentational/AddPeopleData/AddPeopleData";
import FbApp from "../../../config/firebase";

const db = FbApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

class AddPeopleContainer extends React.Component {
  state = {
    People: {}
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      People: { ...prevState.People, [name]: value }
    }));
  };

  uploadHandler = e => {
    e.preventDefault();
    const People = this.state.People;
    console.log("upload handler working");
    db.collection("people").add(People);
    e.target.reset();
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <AddPeopleData
          props={this.state.People}
          uploadHandler={this.uploadHandler}
          changeHandler={this.changeHandler}
        />
      </React.Fragment>
    );
  }
}
export default AddPeopleContainer;
