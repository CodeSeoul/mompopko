import React from "react";
import AddPeopleData from "../../presentational/AddPeopleData/AddPeopleData";

class AddPeopleContainer extends React.Component {
  state = {
    People: {}
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      People: { ...prevState.People, [name]: value }
    }));
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <AddPeopleData changeHandler={this.changeHandler} />
      </React.Fragment>
    );
  }
}
export default AddPeopleContainer;
