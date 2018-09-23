import React from "react";
import AddFile from "../../../styles/components/AddFile/index";
const Addfile = props => {
  const { Wrapper } = AddFile;
  const { onDragOver, onDrop, onDragLeave, onDragEnter, className } = props;
  console.log("className", className);
  let dropText;
  switch (className) {
    case "drop_enter":
      dropText = "Drop File!";
      break;
    case "dropped":
      dropText = "Processing!";
      break;
    case "drop_processed":
      dropText = "Done!";
      break;
    default:
      dropText = "Drop Files Here";
  }
  return (
    <Wrapper>
      <div
        onDragOver={e => onDragOver(e)}
        onDragEnter={e => onDragEnter(e)}
        onDragLeave={e => onDragLeave(e)}
        onDrop={e => {
          onDrop(e);
        }}
        className={className}
      >
        <p className={className}>{dropText}</p>
      </div>
    </Wrapper>
  );
};

export default Addfile;
