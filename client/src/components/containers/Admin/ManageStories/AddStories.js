import React, { Component } from "react";
import axios from "axios";

class AddStories extends Component {
  state = {
    story: { level: 1, channels: {} },
    images: []
  };

  async uploadHandler(e) {
    e.preventDefault();

    let data = new FormData();
    const story = { ...this.state.story };
    const images = [...this.state.images];
    data.append("story", JSON.stringify(story));
    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data; boundary='random boundary'"
      }
    };

    console.log(data);

    axios
      .post("http://localhost:5000/api/admin/stories", data, config)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  changeHandler = e => {
    const name = e.target.name;
    var value = "";

    console.log(this.state);

    if (e.target.getAttribute("group") === "channels") {
      value = e.target.value;
      let channels = { ...this.state.story.channels };
      this.setState({
        story: { ...this.state.story, channels: { ...channels, [name]: value } }
      });
      return null;
    }

    if (e.target.name === "images") {
      value = e.target.files;
      this.setState({
        images: value
      });
    } else {
      value = e.target.value;
      this.setState(prevState => ({
        story: { ...prevState.story, [name]: value }
      }));
    }
  };

  render() {
    return (
      <div className="wrapper">
        <form
          method="POST"
          encType="multipart/form-data"
          onSubmit={e => {
            this.uploadHandler(e);
          }}
        >
          <h5>Chosse Business Level</h5>
          <div className="level-input-container">
            <div className="level-input">
              <input
                onChange={e => this.changeHandler(e)}
                type="radio"
                value={1}
                name="level"
                checked={this.state.story.level == 1}
              />
              <label htmlFor="level1">Level 1</label>
            </div>
            <div className="level-input">
              <input
                onChange={e => this.changeHandler(e)}
                type="radio"
                value={2}
                name="level"
                checked={this.state.story.level == 2}
              />
              <label htmlFor="level2">Level 2</label>
            </div>
            <div className="level-input">
              <input
                onChange={e => this.changeHandler(e)}
                type="radio"
                value={3}
                name="level"
                checked={this.state.story.level == 3}
              />
              <label htmlFor="level3">Level 3</label>
            </div>
          </div>
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
          <h5>Address(new system)</h5>
          <input
            onChange={e => this.changeHandler(e)}
            spellCheck="false"
            name="newAddress"
            type="text"
          />
          <h5>Address(old system)</h5>
          <input
            onChange={e => this.changeHandler(e)}
            spellCheck="false"
            name="oldAddress"
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
            name="openingDate"
            type="date"
          />
          <h5>New Zipcode</h5>
          <input
            onChange={e => this.changeHandler(e)}
            spellCheck="false"
            name="newZipcode"
            type="text"
          />
          <h5>Old Zipcode</h5>
          <input
            onChange={e => this.changeHandler(e)}
            spellCheck="false"
            name="oldZipcode"
            type="text"
          />
          <h5>Business Type</h5>
          <input
            onChange={e => this.changeHandler(e)}
            spellCheck="false"
            name="type"
            type="text"
          />

          {this.state.story.level == 2 || this.state.story.level == 3 ? (
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
          <h5>Owner Name</h5>
          <input
            spellCheck="false"
            onChange={e => this.changeHandler(e)}
            name="ownerName"
            type="text"
          />

          <h5>Website URL</h5>
          <input
            spellCheck="false"
            group="channels"
            onChange={e => this.changeHandler(e)}
            name="website"
            type="url"
          />
          <h5>Facebook URL</h5>
          <input
            spellCheck="false"
            group="channels"
            onChange={e => this.changeHandler(e)}
            name="facebook"
            type="url"
          />
          <h5>Instagram URL</h5>
          <input
            spellCheck="false"
            group="channels"
            onChange={e => this.changeHandler(e)}
            name="instagram"
            type="url"
          />
          <h5>Youtube URL</h5>
          <input
            spellCheck="false"
            group="channels"
            onChange={e => this.changeHandler(e)}
            name="youtube"
            type="url"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddStories;
