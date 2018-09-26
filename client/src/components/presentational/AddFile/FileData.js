import React from "react";

const FileData = props => {
  const { data } = props;
  let render =
    data.length > 0 ? (
      <section>
        <p>Number of businesses: {data.length - 1}</p>
        <table>
          <tbody>
            {data.map((business, i) => {
              return (
                <tr key={i}>
                  <th>{business[2]}</th>
                  <th>{business[3] + " " + business[8]}</th>
                  <th>{business[6]}</th>
                  <th>{business[7]}</th>
                  <th>{business[11]}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    ) : null;

  return render;
};

export default FileData;
