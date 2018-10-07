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
    url,
    address,
    interview,
    image,
    subImages
  } = props;
  return (
    <AddPeopleDataStyle>
      <form onSubmit={e => props.uploadHandler(e)} action="POST">
        <span>name</span>
        <input
          value={name}
          onChange={e => props.changeHandler(e)}
          name="name"
          type="text"
        />
        <span>occupation</span>
        <input
          value={occupation}
          onChange={e => props.changeHandler(e)}
          name="occupation"
          type="text"
        />
        <span>business</span>
        <input
          value={business}
          onChange={e => props.changeHandler(e)}
          name="business"
          type="text"
        />
        <span>location</span>
        <input
          value={location}
          onChange={e => props.changeHandler(e)}
          name="location"
          type="text"
        />
        <span>category</span>
        <input
          value={category}
          onChange={e => props.changeHandler(e)}
          name="category"
          type="text"
        />
        <span>started</span>
        <input
          value={started}
          onChange={e => props.changeHandler(e)}
          name="started"
          type="date"
        />
        <span>url</span>
        <input
          value={url}
          onChange={e => props.changeHandler(e)}
          name="url"
          type="url"
        />
        <span>address</span>
        <input
          value={address}
          onChange={e => props.changeHandler(e)}
          name="address"
          type="text"
        />
        <span>interview</span>
        <textarea
          value={interview}
          onChange={e => props.changeHandler(e)}
          name="interview"
          cols="30"
          rows="10"
        />
        <span>Main image</span>
        <input
          value={image}
          onChange={e => props.changeHandler(e)}
          type="file"
          name="image"
        />
        <span>Sub images</span>
        <input
          value={subImages}
          onChange={e => props.changeHandler(e)}
          type="file"
          name="subImages"
          multiple
        />
        <button>submit</button>
      </form>
    </AddPeopleDataStyle>
  );
};

export default AddPeopleData;
