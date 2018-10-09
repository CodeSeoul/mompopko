import React, { Component } from "react";
import FbApp from "../../../../config/firebase";

const db = FbApp.firestore();
const storage = FbApp.storage();

db.settings({
  timestampsInSnapshots: true
});

class EditPerson extends Component {
  state = {
    person: this.props.person
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
          person: { ...prevState.person, [name]: value }
        }));
    }
  };

  uploadHandler = e => {
    e.preventDefault();
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
      image,
      subImages
    } = this.state.person;
    console.log(this.state);
    return (
      <React.Fragment>
        <div>Editing this</div>
        <form onSubmit={e => this.uploadHandler(e)} action="POST">
          <span>name</span>
          <input
            value={name}
            onChange={e => this.changeHandler(e)}
            name="name"
            type="text"
          />
          <span>occupation</span>
          <input
            value={occupation}
            onChange={e => this.changeHandler(e)}
            name="occupation"
            type="text"
          />
          <span>business</span>
          <input
            value={business}
            onChange={e => this.changeHandler(e)}
            name="business"
            type="text"
          />
          <span>location</span>
          <input
            value={location}
            onChange={e => this.changeHandler(e)}
            name="location"
            type="text"
          />
          <span>category</span>
          <input
            value={category}
            onChange={e => this.changeHandler(e)}
            name="category"
            type="text"
          />
          <span>started</span>
          <input
            value={started}
            onChange={e => this.changeHandler(e)}
            name="started"
            type="date"
          />
          <span>Website URL</span>
          <input
            value={urls.website}
            group="url"
            onChange={e => this.changeHandler(e)}
            name="website"
            type="url"
          />
          <span>Facebook URL</span>
          <input
            value={urls.facebook}
            group="url"
            onChange={e => this.changeHandler(e)}
            name="facebook"
            type="url"
          />
          <span>Instagram URL</span>
          <input
            value={urls.instagram}
            group="url"
            onChange={e => this.changeHandler(e)}
            name="instagram"
            type="url"
          />
          <span>Youtube URL</span>
          <input
            value={urls.youtube}
            group="url"
            onChange={e => this.changeHandler(e)}
            name="youtube"
            type="url"
          />
          <span>address</span>
          <input
            value={address}
            onChange={e => this.changeHandler(e)}
            name="address"
            type="text"
          />
          <span>interview</span>
          <textarea
            value={interview}
            onChange={e => this.changeHandler(e)}
            name="interview"
            cols="30"
            rows="10"
          />
          <button>submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default EditPerson;
