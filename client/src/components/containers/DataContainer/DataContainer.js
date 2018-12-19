import React, { Component } from "react";
import MenuNavi from "../../presentational/MenuNavi.js";
import DataStyle from "../../../styles/components/containers/DataStyle/DataStyle";

class DataContainer extends Component {
  render() {
    return (
      <DataStyle>
        <MenuNavi menuName="Data" />
      </DataStyle>
    );
  }
}
export default DataContainer;
