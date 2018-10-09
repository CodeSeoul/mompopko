import React from "react";
import AddPeopleDataStyle from "../../../styles/presentational/AddPeopleDataStyle";

const AddPeopleData = props => {
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
  } = props.people;

  return (
    <AddPeopleDataStyle>
      <div className="profile-box-container">
        <form onSubmit={e => props.uploadHandler(e)} action="POST">
          <h5>name</h5>
          <input
            spellcheck="false"
            value={name}
            onChange={e => props.changeHandler(e)}
            name="name"
            type="text"
          />
          <h5>occupation</h5>
          <input
            spellcheck="false"
            value={occupation}
            onChange={e => props.changeHandler(e)}
            name="occupation"
            type="text"
          />
          <h5>business</h5>
          <input
            spellcheck="false"
            value={business}
            onChange={e => props.changeHandler(e)}
            name="business"
            type="text"
          />
          <h5>location</h5>
          <input
            spellcheck="false"
            value={location}
            onChange={e => props.changeHandler(e)}
            name="location"
            type="text"
          />
          <h5>category</h5>
          <input
            spellcheck="false"
            value={category}
            onChange={e => props.changeHandler(e)}
            name="category"
            type="text"
          />
          <h5>started</h5>
          <input
            spellcheck="false"
            value={started}
            onChange={e => props.changeHandler(e)}
            name="started"
            type="date"
          />
          <h5>Website URL</h5>
          <input
            spellcheck="false"
            value={urls.website}
            group="url"
            onChange={e => props.changeHandler(e)}
            name="website"
            type="url"
          />
          <h5>Facebook URL</h5>
          <input
            spellcheck="false"
            value={urls.facebook}
            group="url"
            onChange={e => props.changeHandler(e)}
            name="facebook"
            type="url"
          />
          <h5>Instagram URL</h5>
          <input
            spellcheck="false"
            value={urls.instagram}
            group="url"
            onChange={e => props.changeHandler(e)}
            name="instagram"
            type="url"
          />
          <h5>Youtube URL</h5>
          <input
            spellcheck="false"
            value={urls.youtube}
            group="url"
            onChange={e => props.changeHandler(e)}
            name="youtube"
            type="url"
          />
          <h5>address</h5>
          <input
            spellcheck="false"
            value={address}
            onChange={e => props.changeHandler(e)}
            name="address"
            type="text"
          />
          <h5>interview</h5>
          <textarea
            value={interview}
            onChange={e => props.changeHandler(e)}
            name="interview"
            cols="30"
            rows="10"
          />
          <h5>Main image</h5>
          <input
            spellcheck="false"
            value={image}
            onChange={e => props.changeHandler(e)}
            type="file"
            name="image"
          />
          <h5>Sub images</h5>
          <input
            spellcheck="false"
            value={subImages}
            onChange={e => props.changeHandler(e)}
            type="file"
            name="subImages"
            multiple
          />
          <button>submit</button>
        </form>
      </div>
    </AddPeopleDataStyle>
  );
};

export default AddPeopleData;
