import React from "react";

const AddOpenings = props => {
  const {
    category,
    registration,
    name,
    newLocation,
    oldLocation,
    area,
    telephone,
    opening,
    newZipcode,
    oldZipcode,
    construction,
    type,
    images
  } = props.opening;

  return (
    <div>
      <form action="POST" onSubmit={e => props.uploadHandler(e)}>
        <h5>Business Catagory</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={category}
          name="category"
          type="text"
        />
        <h5>Registration Date</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={registration}
          name="registration"
          type="date"
        />
        <h5>Business Name</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={name}
          name="name"
          type="text"
        />
        <h5>Location(new system)</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={newLocation}
          name="newLocation"
          type="text"
        />
        <h5>Location(old system)</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={oldLocation}
          name="oldLocation"
          type="text"
        />
        <h5>Area</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={area}
          name="area"
          type="text"
        />
        <h5>Telephone</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={telephone}
          name="telephone"
          type="text"
        />
        <h5>Opening Date</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={opening}
          name="opening"
          type="date"
        />
        <h5>Zipcode(new system)</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={newZipcode}
          name="newZipcode"
          type="text"
        />
        <h5>Zipcode(old system)</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={oldZipcode}
          name="oldZipcode"
          type="text"
        />
        <h5>Construction date</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={construction}
          name="construction"
          type="date"
        />
        <h5>Type</h5>
        <input
          onChange={e => props.changeHandler(e)}
          spellCheck="false"
          value={type}
          name="type"
          type="text"
        />
        <h5>Images</h5>
        <input
          spellCheck="false"
          value={images}
          onChange={e => props.changeHandler(e)}
          type="file"
          name="images"
          multiple
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddOpenings;
