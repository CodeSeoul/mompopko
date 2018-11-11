import React from "react";
import FbApp from "../../../../config/firebase";
import { Link, Switch, Route } from "react-router-dom";
import AddOpeningsContainer from "./AddOpeningsContainer/AddOpeningsContainer";

const db = FbApp.firestore();
const storage = FbApp.storage();

db.settings({
  timestampsInSnapshots: true
});

class EditOpeningsContainer extends React.Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    db.collection("openings")
      .orderBy("timeCreated", "desc")
      .get()
      .then(collection => {
        const openings = collection.docs.map(doc => {
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ openings: openings, isLoaded: true });
      });
  }
  render() {
    return (
      <Switch>
        <Route
          path="/admin/openings"
          render={() => {
            return <div>Edit Openings</div>;
          }}
        />
        <Route path="/admin/openings/add" component={AddOpeningsContainer} />
        <Route
          path="/admin/openings/edit/:id"
          render={() => {
            return <div>edit</div>;
          }}
        />
      </Switch>
    );
  }
}

export default EditOpeningsContainer;
