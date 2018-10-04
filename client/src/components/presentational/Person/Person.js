import React, { Component } from "react";
import PersonStyle from "../../../styles/components/Person/PersonStyle";
import { Link } from "react-router-dom";

class Person extends Component {
  render() {
    const person = this.props.person;
    console.log("people", person);

    return (
      <PersonStyle>
        <Link to={`/people/${person.id}`}>
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
        </Link>
      </PersonStyle>
    );
  }
}
export default Person;
