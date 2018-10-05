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
    isLoaded: false
  };

  componentDidMount() {
    db.collection("people")
      .get()
      .then(collection => {
        const people = collection.docs.map(doc => {
          console.log(doc.data(), "doc");
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ people: people, isLoaded: true });
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
              key={this.state.people[i].id}
              person={this.state.people[i]}
            />
          );
      }
    } else {
      this.state.people.map(person => {
        people.push(<Person key={person.id} person={person} />);
        return null;
      });
    }

    return this.state.isLoaded ? (
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
          render={props => {
            const person = this.state.people.filter(person => {
              return person.id === props.match.params.id;
            });
            return <PeopleInfo person={person[0]} />;
          }}
        />
      </Switch>
    ) : null;
  }
}
export default PeopleContainer;
