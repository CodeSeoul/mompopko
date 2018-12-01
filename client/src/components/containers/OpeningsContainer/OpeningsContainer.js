import React, { Component } from "react";
import OpeningsStyle from "../../../styles/components/containers/OpeningsStyle/OpeningsStyle";
import Opening from "../../presentational/Opening/Opening";
import OpeningInfo from "../../containers/OpeningInfo/OpeningInfo";
import FbApp from "../../../config/firebase";
import { Switch, Route } from "react-router-dom";

const db = FbApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

class OpeningsContainer extends Component {
  state = {
    openings: [],
    isLoaded: false
  };

  componentDidMount() {
    db.collection("openings")
      .get()
      .then(collection => {
        const openings = collection.docs.map(doc => {
          return { ...doc.data(), id: doc.id };
        });
        this.setState({
          openings: openings,
          isLoaded: true
        });
      });
  }

  render() {
    const openings = this.state.openings.map(opening => {
      return <Opening key={opening.id} opening={opening} />;
    });
    return this.state.isLoaded ? (
      <Switch>
        <Route
          exact
          path="/openings"
          render={() => {
            return (
              <OpeningsStyle>
                <div className="container">
                  <div className="grid-container">{openings}</div>
                </div>
              </OpeningsStyle>
            );
          }}
        />
        <Route
          path="/openings/:id"
          render={props => {
            const opening = this.state.openings.filter(opening => {
              return opening.id == props.match.params.id;
            });
            return <OpeningInfo opening={opening[0]} />;
          }}
        />
      </Switch>
    ) : null;
  }
}

export default OpeningsContainer;
