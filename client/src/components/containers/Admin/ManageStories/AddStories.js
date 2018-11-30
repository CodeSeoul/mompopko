import React, { Component } from "react";
import FbApp from "../../../../config/firebase";

const db = FbApp.firestore();
const storage = FbApp.storage();
db.settings({
  timestampsInSnapshots: true
});

class AddStories extends Component {
  state = {};

  render() {
    return (
      <div className="wrapper">
        <form>
          <div className="people-form">
            <span>People Form</span>
          </div>
          <div className="business-form">
            <span>Business Form</span>
          </div>
        </form>
      </div>
    );
  }
}

export default AddStories;
