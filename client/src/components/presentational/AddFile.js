import React from "react";
import AddFile from "../../styles/components/AddFile/index";
const Addfile = props => {
  const { Wrapper } = AddFile;
  const { onDragOver, onDrop, onDragLeave, onDragEnter } = props;
  console.log("AddData", Wrapper);
  return (
    <Wrapper
      onDragOver={e => onDragOver(e)}
      onDragEnter={e => onDragEnter(e)}
      onDragLeave={e => onDragLeave(e)}
      onDrop={e => {
        onDrop(e, "wip");
      }}
    >
      AddFiles
    </Wrapper>
  );
};

export default Addfile;
