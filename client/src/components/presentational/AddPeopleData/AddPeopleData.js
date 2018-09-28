import React from "react";

const AddPeopleData = props => {
  const {
    name,
    occupation,
    business,
    location,
    fashion,
    category,
    started,
    url,
    address,
    interview,
    image
  } = props;
  return (
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
        value={props.fashion}
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
      <span>fashion</span>
      <input
        value={fashion}
        onChange={e => props.changeHandler(e)}
        name="fashion"
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
      <input
        value={image}
        onChange={e => props.changeHandler(e)}
        type="file"
        name="image"
      />
      <button>submit</button>
    </form>
  );
};

export default AddPeopleData;
