import React from "react";
import AddFileContainer from "../components/containers/AddFile/AddFileContainer";
import AddData from "../styles/pages/AddData/index";
//features
//should have icon to show drag and drop
//user knows when file has been accepted
//user knows when file has been processed
//user aware of any errors
//user can see summary of data to be added

class AddDataPage extends React.Component {
  render() {
    const { Header } = AddData;
    return (
      <div>
        <Header>
          <h1>AddData</h1>
        </Header>
        <AddFileContainer />
        {/* component to enter data */}
        {/* table to see summary of data */}
      </div>
    );
  }
}
export default AddDataPage;
