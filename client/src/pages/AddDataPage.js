import React from "react";
import AddFileContainer from "../components/containers/AddFileContainer";
import { AddData } from "../styles/pages/AddData";
//features
//should have icon to show drag and drop
//user knows when file has been accepted
//user knows when file has been processed
//user aware of any errors
//user can see summary of data to be added
//user can decide to delete some parts of data before adding to firebase
//user get notification of status of uploadin to firebase

class AddDataPage extends React.Component {
  render() {
    return (
      <div>
        <h1>AddData</h1>
        <AddFileContainer />
        {/* component to enter data */}
        {/* table to see summary of data */}
        {/* button to upload data to firebase */}
      </div>
    );
  }
}
export default AddDataPage;
