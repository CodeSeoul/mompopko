import React from "react";
import AddPeopleData from "../../presentational/AddPeopleData/AddPeopleData";
import FbApp from "../../../config/firebase";

const db = FbApp.firestore();
const storage = FbApp.storage();

db.settings({
  timestampsInSnapshots: true
});

class AddPeopleContainer extends React.Component {
  state = {
    People: {},
    imgFile: null
  };

  changeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "image") {
      this.setState({
        imgFile: e.target.files[0]
      });
      console.log(this.state);
    }
    this.setState(prevState => ({
      People: { ...prevState.People, [name]: value }
    }));
  };

  uploadHandler = e => {
    e.preventDefault();
    const People = this.state.People;
    const img = this.state.imgFile;
    console.log("upload handler working");
    db.collection("people")
      .add(People)
      .then(person => {
        const uploadTask = storage.ref(`people/${person.id}`).put(img);
        uploadTask.on(
          "state_changed",
          snapshot => {
            console.log(snapshot);
          },
          error => {
            console.log(error);
          },
          complete => {
            console.log("image uploading finished");
          }
        );
      });
    e.target.reset();
    this.setState({ People: {}, imgFile: null });
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
