import React from "react";
import PeopleContainer from "../components/containers/PeopleContainer/PeopleContainer";

const Homepage = () => {
  return (
    <React.Fragment>
      <div>Homepage</div>
      <PeopleContainer numberOfPeople={3} />
    </React.Fragment>
  );
};

export default Homepage;
