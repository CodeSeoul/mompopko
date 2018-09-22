import React from "react";
import AddFile from "../../styles/components/AddFile/index";
const Addfile = props => {
  const { Wrapper } = AddFile;
  const { onDragOver, onDrop, onDragLeave, onDragEnter, className } = props;
  console.log("className", className);
  const dropText =
    className === "drop_enter" ? "Drop File!" : "Drop Files Here";
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
        <p className={className}>{dropText}</p>
      </div>
    </Wrapper>
  );
};

export default Addfile;
