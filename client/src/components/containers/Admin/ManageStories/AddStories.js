import React, { Component } from "react";
import FbApp from "../../../../config/firebase";
import firebase from "firebase";

const db = FbApp.firestore();
const storage = FbApp.storage();

db.settings({
  timestampsInSnapshots: true
});

class AddStories extends Component {
  state = {
    story: { level: "level1" },
    images: FileList
  };

  uploadHandler(e) {
    e.preventDefault();

    let story = this.state.story;
    const images = this.state.images;

    db.collection("stories")
      .add({
        ...story,
        timeCreated: FbApp.firebase_.firestore.Timestamp.now()
      })
      .then(story => {
        for (let i = 0; i < images.length; i++) {
          const imagesUploadTask = storage
            .ref(`stories/${story.id}/${story.id}_${i}`)
            .put(images[i]);

          imagesUploadTask.on(
            "state_changed",
            snapshot => {
              console.log(snapshot);
            },
            error => {
              console.log(error);
            },
            complete => {
              imagesUploadTask.snapshot.ref.getDownloadURL().then(imageURL => {
                db.collection("stories")
                  .doc(story.id)
                  .update({
                    imageURLs: firebase.firestore.FieldValue.arrayUnion(
                      imageURL
                    )
                  });
              });
            }
          );
        }
      });
  }

  changeHandler(e) {
    const name = e.target.name;
    var value = "";
    if (e.target.name === "images") {
      value = [...e.target.files];
      this.setState({
        images: value
      });
    } else {
      value = e.target.value;
      this.setState(prevState => ({
        story: { ...prevState.story, [name]: value }
      }));
    }
  }

  render() {
    return (
      <div className="wrapper">
        <form>
          <h5>Chosse Business Level</h5>
          <input
            onChange={e => this.changeHandler(e)}
            type="radio"
            value="level1"
            name="level"
            checked={this.state.story.level === "level1"}
          />
          <label htmlFor="level1">Level 1</label>
          <input
            onChange={e => this.changeHandler(e)}
            type="radio"
            value="level2"
            name="level"
            checked={this.state.story.level === "level2"}
          />
          <label htmlFor="level2">Level 2</label>
          <input
            onChange={e => this.changeHandler(e)}
            type="radio"
            value="level3"
            name="level"
            checked={this.state.story.level === "level3"}
          />
          <label htmlFor="level3">Level 3</label>

          <h5>Business Category</h5>
          <input
            onChange={e => this.changeHandler(e)}
            spellCheck="false"
            name="category"
            type="text"
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
          <h5>New Zipcode</h5>
          <input
            onChange={e => this.changeHandler(e)}
            spellCheck="false"
            name="newZipCode"
            type="text"
          />
          <h5>Old Zipcode</h5>
          <input
            onChange={e => this.changeHandler(e)}
            spellCheck="false"
            name="oldZipCode"
            type="text"
          />
          <h5>Business Type</h5>
          <input
            onChange={e => this.changeHandler(e)}
            spellCheck="false"
            name="type"
            type="text"
          />

          {this.state.story.level === "level2" ||
          this.state.story.level === "level3" ? (
            <div>
              <h5>interview</h5>
              <textarea
                onChange={e => this.changeHandler(e)}
                name="interview"
                cols="30"
                rows="10"
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
          ) : null}
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
          <button
            onClick={e => {
              this.uploadHandler(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddStories;
