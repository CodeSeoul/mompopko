import React from "react";
import AddFile from "../../presentational/AddFile/AddFile";
import FileData from "../../presentational/AddFile/FileData";
import XLSX from "xlsx";
class AddFileContainer extends React.Component {
  state = {
    className: "",
    rawFileArray: [],
    formattedFileData: []
  };

  _onDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Drag Enter");
    this.setState({
      className: "drop_enter"
    });
  };
  _onDragLeave = () => {
    console.log("Drag Leave");
    this.setState({
      className: ""
    });
  };
  _onDragOver = e => {
    e.preventDefault();
    console.log("Drag Over");
  };
  _onDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files.length > 0) {
      const reader = new FileReader();
      //file droppeed into container
      const file = e.dataTransfer.files[0];
      this.setState(prevState => {
        return {
          ...prevState,
          className: "dropped"
        };
      });
      reader.onload = event => {
        //console.log("e.evententTarget.result", event.target.result);
        /* Parse data */
        const buffer = event.target.result;
        const workbook = XLSX.read(buffer, { type: "array" });
        /* Get first worksheet */
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        /* Convert array of arrays  to JSON*/
        const data = XLSX.utils.sheet_to_json(ws, {
          header: 1,
          //raw: false keeps dates and phone numbers as strings
          raw: false
        });

        /* remove empty rows of data */
        const filteredData = data.filter(item => {
          return item.length > 0;
        });
        //format data for firebase
        const formattedFileData = filteredData.reduce(
          (formattedData, item, i) => {
            const uid =
              "id_" +
              Math.random()
                .toString(36)
                .substr(2, 12);
            const business = {
              uid,
              name: item[2],
              location: `${item[3]} ${item[8]}`,
              tel: item[6],
              opening: item[7],
              type: item[11]
            };
            console.log("formattedData", formattedData);
            console.log("business", business);
            return [...formattedData, business];
          },
          []
        );
        this.setState(prevState => {
          return {
            className: "drop_processed",
            rawFileArray: filteredData,
            formattedFileData
          };
        });
      };
      reader.readAsArrayBuffer(file);
    } else {
      console.log("Must drop in a file");
    }
  };
  render() {
    console.log("State", this.state);
    return (
      <React.Fragment>
        <AddFile
          id="dragbox"
          onDragOver={this._onDragOver}
          onDrop={this._onDrop}
          onDragEnter={this._onDragEnter}
          onDragLeave={this._onDragLeave}
          className={this.state.className}
        />
        {this.state.rawFileArray.length > 0 && (
          <button>Upload New Businesses</button>
        )}
        <FileData data={this.state.formattedFileData} />
      </React.Fragment>
    );
  }
}
export default AddFileContainer;
