import React, { Component } from "react";
import PersonStyle from "../../../styles/components/Person/PersonStyle";

class Person extends Component {
  render() {
    const person = this.props.person;
    console.log("people", person);

    return (
      <PersonStyle>
        <div id="container">
          <h1 id="nav">People</h1>
          <div>{person.id}</div>
        </div>
      </PersonStyle>
    );
  }
}
export default Person;
