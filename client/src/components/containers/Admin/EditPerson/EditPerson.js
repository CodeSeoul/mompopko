import React, { Component } from "react";
import FbApp from "../../../../config/firebase";

const db = FbApp.firestore();
const storage = FbApp.storage();

db.settings({
  timestampsInSnapshots: true
});

class EditPerson extends Component {
  state = {
    person: this.props.person,
    mainImage: null,
    subImages: FileList
  };

  changeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    let group = e.target.getAttribute("group");

    //handling urls

    if (group === "url") {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          urls: { ...prevState.person.urls, [name]: value }
        }
      }));
      return null;
    }

    this.setState(prevState => ({
      person: { ...prevState.person, [name]: value }
    }));
  };

  imageHandler = (e, index) => {
    e.preventDefault();

    const name = e.target.name;
    const file = e.target.files[0];

    switch (name) {
      case "main-image": {
        let reader = new FileReader();
        reader.onload = () => {
          this.setState(
            prevState => {
              return {
                mainImage: file,
                person: {
                  ...prevState.person,
                  imgURL: reader.result
                }
              };
            },
            () => console.log(this.state)
          );
        };
        reader.readAsDataURL(file);
        break;
      }
      case "sub-image": {
        let reader = new FileReader();
        reader.onload = () => {
          let newImgURLs = [...this.state.person.subImgURLs];
          newImgURLs[index] = reader.result;
          let newsubImages = [...this.state.subImages];
          newsubImages[index] = file;
          console.log(newsubImages);
          this.setState(
            prevState => {
              return {
                subImages: newsubImages,
                person: {
                  ...prevState.person,
                  subImgURLs: newImgURLs
                }
              };
            },
            () => console.log(this.state)
          );
        };
        reader.readAsDataURL(file);
        break;
      }
      default:
    }
  };

  uploadHandler = e => {
    e.preventDefault();
    const person = this.state.person;
    const mainImg = this.state.mainImage;
    const subImgs = this.state.subImages;

    console.log("upload handler working");

    // uploading main image

    if (mainImg) {
      const storageRef = storage.ref();
      const folderRef = storageRef.child("people");
      const folderName = person.id;
      const mainImageRef = folderRef
        .child(folderName)
        .child(`${folderName}_main`);
      const mainImgUploadTask = mainImageRef.put(mainImg);
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
            db.collection("people")
              .doc(person.id)
              .set({ imgURL: imgURL }, { merge: true });
          });
        }
      );
    }

    //uploading sub images
    if (subImgs.length > 0) {
      const subImgURLs = [...person.subImgURLs];
      for (let i = 0; i < subImgs.length; i++) {
        if (subImgs[i] === undefined) {
          continue;
        }
        const storageRef = storage.ref();
        const folderRef = storageRef.child("people");
        const folderName = person.id;
        const subImageRef = folderRef
          .child(folderName)
          .child(`${folderName}_sub${i}`);
        const subImgUploadTask = subImageRef.put(subImgs[i]);
        subImgUploadTask.on(
          "state_changed",
          snapshot => {
            console.log(snapshot);
          },
          error => {
            console.log(error);
          },
          complete => {
            console.log("Sub image uploaded");

            subImgUploadTask.snapshot.ref.getDownloadURL().then(subImgURL => {
              subImgURLs[`${i}`] = subImgURL;
              console.log(subImgURLs);
              db.collection("people")
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
    }
  };

  render() {
    const {
      name,
      occupation,
      business,
      location,
      category,
      started,
      urls,
      address,
      interview,
      imgURL,
      subImgURLs
    } = this.state.person;

    const images = [
      <div className="images-container" key={0}>
        <label htmlFor={imgURL}>
          <img src={imgURL} />
        </label>
        <input
          name="main-image"
          onChange={e => this.imageHandler(e, 0)}
          id={imgURL}
          type="file"
        />
      </div>,
      ...subImgURLs.map((subImage, index) => {
        return (
          <div className="images-container" key={index + 1}>
            <label htmlFor={subImage}>
              <img src={subImage} />
            </label>
            <input
              name="sub-image"
              onChange={e => this.imageHandler(e, index)}
              id={subImage}
              type="file"
            />
          </div>
        );
      })
    ];

    console.log(this.state);

    return (
      <React.Fragment>
        <div>Editing this</div>
        <div className="images">{images}</div>
        <div className="profile-box-container">
          <div className="profile-box">
            <form onSubmit={e => this.uploadHandler(e)} action="POST">
              <h5>name</h5>
              <input
                spellCheck="false"
                value={name}
                onChange={e => this.changeHandler(e)}
                name="name"
                type="text"
              />
              <h5>occupation</h5>
              <input
                spellCheck="false"
                value={occupation}
                onChange={e => this.changeHandler(e)}
                name="occupation"
                type="text"
              />
              <h5>business</h5>
              <input
                spellCheck="false"
                value={business}
                onChange={e => this.changeHandler(e)}
                name="business"
                type="text"
              />
              <h5>location</h5>
              <input
                spellCheck="false"
                value={location}
                onChange={e => this.changeHandler(e)}
                name="location"
                type="text"
              />
              <h5>category</h5>
              <input
                spellCheck="false"
                value={category}
                onChange={e => this.changeHandler(e)}
                name="category"
                type="text"
              />
              <h5>started</h5>
              <input
                spellCheck="false"
                value={started}
                onChange={e => this.changeHandler(e)}
                name="started"
                type="date"
              />
              <h5>Website URL</h5>
              <input
                spellCheck="false"
                value={urls.website}
                group="url"
                onChange={e => this.changeHandler(e)}
                name="website"
                type="url"
              />
              <h5>Facebook URL</h5>
              <input
                spellCheck="false"
                value={urls.facebook}
                group="url"
                onChange={e => this.changeHandler(e)}
                name="facebook"
                type="url"
              />
              <h5>Instagram URL</h5>
              <input
                spellCheck="false"
                value={urls.instagram}
                group="url"
                onChange={e => this.changeHandler(e)}
                name="instagram"
                type="url"
              />
              <h5>Youtube URL</h5>
              <input
                spellCheck="false"
                value={urls.youtube}
                group="url"
                onChange={e => this.changeHandler(e)}
                name="youtube"
                type="url"
              />
              <h5>address</h5>
              <input
                spellCheck="false"
                value={address}
                onChange={e => this.changeHandler(e)}
                name="address"
                type="text"
              />
              <h5>interview</h5>
              <textarea
                spellCheck="false"
                value={interview}
                onChange={e => this.changeHandler(e)}
                name="interview"
                cols="30"
                rows="10"
              />
              <button onClick={() => this.uploadHandler}>Edit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditPerson;
