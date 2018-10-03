import React, { Component } from "react";
import PersonStyle from "../../../styles/components/Person/PersonStyle";

class Person extends Component {
  render() {
    const person = this.props.person;
    console.log("people", person);

    return (
      <PersonStyle>
        <div className="person-card">
          <img src={person.imgURL} />
          <div className="description">
            <div id="person-occupation">
              <i className="fas fa-user" />
              {person.occupation}
            </div>
            <br />
            <div id="person-name">{person.name}</div>
          </div>
        </div>
      </PersonStyle>
    );
  }
}
export default Person;
