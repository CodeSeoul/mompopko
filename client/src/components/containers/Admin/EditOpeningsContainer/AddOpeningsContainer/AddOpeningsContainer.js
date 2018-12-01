import React, { Component } from "react";
import AddOpenings from "../../../../presentational/Admin/Openings/AddOpenings/AddOpenings";
import FbApp from "../../../../../config/firebase";

const db = FbApp.firestore();
const storage = FbApp.storage();
db.settings({
  timestampsInSnapshots: true
});

class AddOpeningsContainer extends Component {
  state = {
    opening: {},
    images: FileList
  };

  uploadHandler = e => {
    e.preventDefault();

    const opening = this.state.opening;
    const images = this.state.images;

    db.collection("openings")
      .add({
        ...opening,
        timeCreated: FbApp.firebase_.firestore.Timestamp.now()
      })
      .then(opening => {
        let imgURLs = [];
        let uploadCheck = 0;
        function getURLs() {
          return new Promise(resolve => {
            for (let i = 0; i < images.length; i++) {
              const imgsUploadTask = storage
                .ref(`openings/${opening.id}/${opening.id}_sub${i}`)
                .put(images[i]);

              imgsUploadTask.on(
                "state_changed",
                snapshot => {
                  console.log(snapshot);
                },
                error => {
                  console.log(error);
                },
                complete => {
                  imgsUploadTask.snapshot.ref.getDownloadURL().then(imgURL => {
                    imgURLs[`${i}`] = imgURL;
                    ++uploadCheck;
                    if (uploadCheck == images.length) {
                      resolve();
                      uploadCheck = 0;
                    }
                  });
                }
              );
            }
          });
        }
        async function uploadImages() {
          await getURLs();
          console.log(imgURLs);
          db.collection("openings")
            .doc(opening.id)
            .set(
              {
                imgURLs: imgURLs
              },
              { merge: true }
            );
        }
        uploadImages();
      })
      .catch(err => console.log(err));
    e.target.reset();
    this.setState({ opening: {} });
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
