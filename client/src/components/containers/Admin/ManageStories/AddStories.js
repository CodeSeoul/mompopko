import React, { Component } from "react";
import FbApp from "../../../../config/firebase";

const db = FbApp.firestore();
const storage = FbApp.storage();
db.settings({
  timestampsInSnapshots: true
});

class AddStories extends Component {
  state = {};

  changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="wrapper">
        <form>
          <div className="people-form">
            <span>People Form</span>
            <h5>Person Name</h5>
            <input
              spellCheck="false"
              onChange={e => this.changeHandler(e)}
              name="personName"
              type="text"
            />
            <h5>Occupation</h5>
            <input
              spellCheck="false"
              onChange={e => this.changeHandler(e)}
              name="occupation"
              type="text"
            />
            <h5>Website URL</h5>
            <input
              spellCheck="false"
              group="url"
              onChange={e => this.changeHandler(e)}
              name="website"
              type="url"
            />
            <h5>Facebook URL</h5>
            <input
              spellCheck="false"
              group="url"
              onChange={e => this.changeHandler(e)}
              name="facebook"
              type="url"
            />
            <h5>Instagram URL</h5>
            <input
              spellCheck="false"
              group="url"
              onChange={e => this.changeHandler(e)}
              name="instagram"
              type="url"
            />
            <h5>Youtube URL</h5>
            <input
              spellCheck="false"
              group="url"
              onChange={e => this.changeHandler(e)}
              name="youtube"
              type="url"
            />
            <h5>interview</h5>
            <textarea
              onChange={e => this.changeHandler(e)}
              name="interview"
              cols="30"
              rows="10"
            />
          </div>
          <div className="business-form">
            <span>Business Form</span>
            <h5>Business Category</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="category"
              type="text"
            />
            <h5>Registration Date</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="registration"
              type="date"
            />
            <h5>Business Name</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="businessName"
              type="text"
            />
            <h5>Location(new system)</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="newLocation"
              type="text"
            />
            <h5>Location(old system)</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="oldLocation"
              type="text"
            />
            <h5>Area</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="area"
              type="text"
            />
            <h5>Telephone</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="telephone"
              type="text"
            />
            <h5>Opening Date</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="opening"
              type="date"
            />
            <h5>Construction date</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="construction"
              type="date"
            />
            <h5>Type</h5>
            <input
              onChange={e => this.changeHandler(e)}
              spellCheck="false"
              name="type"
              type="text"
            />
            <h5>Images</h5>
            <input
              spellCheck="false"
              onChange={e => this.changeHandler(e)}
              type="file"
              name="images"
              multiple
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddStories;
