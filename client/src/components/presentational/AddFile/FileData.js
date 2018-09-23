import React from "react";

const FileData = props => {
  const { data } = props;
  let render =
    data.length > 0 ? (
      <div>
        <p>Number of businesses: {data.length - 1}</p>
      </div>
    ) : null;

  return render;
};

export default FileData;
