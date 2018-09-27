import React from "react";

const AddPeopleData = props => {
  return (
    <form action="POST">
      <span>name</span>
      <input onChange={e => props.changeHandler(e)} name="name" type="text" />
      <span>occupation</span>
      <input
        onChange={e => props.changeHandler(e)}
        name="occupation"
        type="text"
      />
      <span>business</span>
      <input
        onChange={e => props.changeHandler(e)}
        name="business"
        type="text"
      />
      <span>location</span>
      <input
        onChange={e => props.changeHandler(e)}
        name="location"
        type="text"
      />
      <span>fashion</span>
      <input
        onChange={e => props.changeHandler(e)}
        name="fashion"
        type="text"
      />
      <span>category</span>
      <input
        onChange={e => props.changeHandler(e)}
        name="category"
        type="text"
      />
      <span>started</span>
      <input
        onChange={e => props.changeHandler(e)}
        name="started"
        type="date"
      />
      <span>url</span>
      <input onChange={e => props.changeHandler(e)} name="url" type="url" />
      <span>address</span>
      <input
        onChange={e => props.changeHandler(e)}
        name="address"
        type="text"
      />
      <span>interview</span>
      <textarea
        onChange={e => props.changeHandler(e)}
        name="interview"
        cols="30"
        rows="10"
      />
      <input onChange={e => props.changeHandler(e)} type="file" name="image" />
      <button>submit</button>
    </form>
  );
};

export default AddPeopleData;
