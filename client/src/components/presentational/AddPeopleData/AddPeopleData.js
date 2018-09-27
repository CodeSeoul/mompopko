import React from "react";

const AddPeopleData = props => {
  return (
    <form action="POST">
      <span>name</span>
      <input name="name" type="text" />
      <span>occupation</span>
      <input name="occupation" type="text" />
      <span>business</span>
      <input name="business" type="text" />
      <span>location</span>
      <input name="location" type="text" />
      <span>fashion</span>
      <input name="fashion" type="text" />
      <span>category</span>
      <input name="category" type="text" />
      <span>started</span>
      <input name="started" type="date" />
      <span>url</span>
      <input name="url" type="url" />
      <span>address</span>
      <input name="address" type="text" />
      <span>interview</span>
      <textarea name="interview" cols="30" rows="10" />
      <button>submit</button>
    </form>
  );
};

export default AddPeopleData;
