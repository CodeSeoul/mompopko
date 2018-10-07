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
    imgFile: null,
    subImgFiles: FileList
  };

  changeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "image": {
        let imgFile = e.target.files[0];
        this.setState({
          imgFile: imgFile
        });
        break;
      }

      case "subImages": {
        let subImages = [...e.target.files];
        this.setState({
          subImgFiles: subImages
        });
        break;
      }
      default:
        this.setState(prevState => ({
          People: { ...prevState.People, [name]: value }
        }));
    }
  };

  uploadHandler = e => {
    e.preventDefault();

    const People = this.state.People;
    const mainImg = this.state.imgFile;
    const subImgs = this.state.subImgFiles;

    console.log("upload handler working");

    db.collection("people")
      .add(People)
      .then(person => {
        // Uploading main image

        const mainImgUploadTask = storage
          .ref(`people/${person.id}/${person.id}_main`)
          .put(mainImg);

        mainImgUploadTask.on(
          "state_changed",
          snapshot => {
            console.log(snapshot);
          },
          error => {
            console.log(error);
          },
          complete => {
            console.log("Main image uploaded");

            mainImgUploadTask.snapshot.ref.getDownloadURL().then(imgURL => {
              db.collection("/people")
                .doc(person.id)
                .set({ imgURL: imgURL }, { merge: true });
            });
          }
        );

        // Uploading sub images
        let subImgURLs = [];
        for (let i = 0; i < subImgs.length; i++) {
          const subImgsUploadTask = storage
            .ref(`people/${person.id}/${person.id}_sub${i}`)
            .put(subImgs[i]);

          subImgsUploadTask.on(
            "state_changed",
            snapshot => {
              console.log(snapshot);
            },
            error => {
              console.log(error);
            },
            complete => {
              subImgsUploadTask.snapshot.ref
                .getDownloadURL()
                .then(subImgURL => {
                  subImgURLs[`${i}`] = subImgURL;

                  db.collection("/people")
                    .doc(person.id)
                    .set(
                      {
                        subImgURLs: subImgURLs
                      },
                      { merge: true }
                    );
                });
            }
          );
        }
      })
      .catch(err => console.log(err));
    e.target.reset();
    this.setState({ People: {}, imgFile: null, subImgFiles: FileList });
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
