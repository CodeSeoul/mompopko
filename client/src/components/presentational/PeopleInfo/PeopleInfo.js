import React from "react";
import Person from "../Person/Person";
import PeopleInfoStyle from "../../../styles/presentational/PeopleInfoStyle";

class PeopleInfo extends React.Component {
  render() {
    const person = this.props.person;

    return (
      <PeopleInfoStyle>
        <div>Hello</div>
      </PeopleInfoStyle>
    );
  }
}

export default PeopleInfo;
