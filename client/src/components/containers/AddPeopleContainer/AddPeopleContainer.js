import React from "react";

import AddPeopleData from "../../presentational/AddPeopleData/AddPeopleData";

class AddPeopleContainer extends React.Component {
  state = {
    PeopleArray: []
  };

  render() {
    return (
      <React.Fragment>
        <AddPeopleData />
      </React.Fragment>
    );
  }
}
export default AddPeopleContainer;
