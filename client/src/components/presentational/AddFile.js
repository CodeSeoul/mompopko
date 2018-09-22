import React from "react";
import AddFile from "../../styles/components/AddFile/index";
const Addfile = props => {
  const { Wrapper } = AddFile;
  const { onDragOver, onDrop, onDragLeave, onDragEnter, className } = props;
  console.log("className", className);
  return (
    <Wrapper>
      <div
        onDragOver={e => onDragOver(e)}
        onDragEnter={e => onDragEnter(e)}
        onDragLeave={e => onDragLeave(e)}
        onDrop={e => {
          onDrop(e, "wip");
        }}
        className={className}
      >
        AddFiles
      </div>
    </Wrapper>
  );
};

export default Addfile;
