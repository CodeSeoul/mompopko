import React, { Component } from "react";
import People from "../../../styles/components/People/People";
import Person from "../../presentational/Person/Person";
import PeopleInfo from "../../presentational/PeopleInfo/PeopleInfo";
import FbApp from "../../../config/firebase";
import { Switch, Route } from "react-router-dom";

const db = FbApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

class PeopleContainer extends Component {
  state = {
    people: [],
    selectedPerson: null
  };

  selectPerson = index => {
    const newIndex = index;
    this.setState({
      selectedPerson: newIndex
    });
  };

  componentDidMount() {
    db.collection("people")
      .get()
      .then(collection => {
        const people = collection.docs.map(doc => {
          console.log(doc.data(), "doc");
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ people: people });
      });
  }

  render() {
    const { numberOfPeople } = this.props;

    const people = [];

    console.log(this.state);

    // shows as many people as numberOfPeople prop
    if (numberOfPeople !== undefined) {
      for (let i = 0; i < numberOfPeople; i++) {
        people[i] =
          this.state.people[i] === undefined ? null : (
            <Person
              index={i}
              key={this.state.people[i].id}
              person={this.state.people[i]}
              selectPerson={index => {
                this.selectPerson(index);
              }}
            />
          );
      }
    } else {
      this.state.people.map((person, index) => {
        people.push(
          <Person
            selectPerson={index => {
              this.selectPerson(index);
            }}
            index={index}
            key={person.id}
            person={person}
          />
        );
      });
    }

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <People>
              <div className="header">People</div>
              <div className="container">
                <div className="grid-container" id="people">
                  {people}
                </div>
              </div>
            </People>
          )}
        />
        <Route
          exact
          path="/people"
          render={() => (
            <People>
              <div className="header">People</div>
              <div className="container">
                <div className="grid-container" id="people">
                  {people}
                </div>
              </div>
            </People>
          )}
        />
        <Route
          path="/people/:id"
          render={() =>
            this.state.selectedPerson === null ? null : (
              <PeopleInfo person={this.state.people[this.state.selectedPerson]}>
                Hello
              </PeopleInfo>
            )
          }
        />
      </Switch>
    );
  }
}
export default PeopleContainer;
