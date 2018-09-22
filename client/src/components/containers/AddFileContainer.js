import React from "react";
import AddFile from "../presentational/AddFile";
import { log } from "util";
class AddFileContainer extends React.Component {
  state = {};

  _onDragEnter = () => {
    console.log("Drag Enter");
  };
  _onDragLeave = () => {
    console.log("Drag Leave");
  };
  _onDragOver = e => {
    e.preventDefault();
    console.log("Drag Over");
  };
  _onDrop = e => {
    e.preventDefault();
  };
  componentDidMount() {}
  render() {
    return (
      <AddFile
        id="dragbox"
        onDragOver={this._onDragOver}
        onDrop={this._onDrop}
        onDragEnter={this._onDragEnter}
        onDragLeave={this._onDragLeave}
      />
    );
  }
}
export default AddFileContainer;
