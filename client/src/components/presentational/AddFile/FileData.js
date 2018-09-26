import React from "react";

const FileData = props => {
  const { data } = props;
  let render =
    data.length > 0 ? (
      <section>
        <p>Number of businesses: {data.length - 1}</p>
        <table>
          <tbody>
            <tr>
              <th>name</th>
              <th>location</th>
              <th>opening</th>
              <th>tel</th>
              <th>type</th>
            </tr>
            {data.map((business, i) => {
              const { uid, name, location, opening, tel, type } = business;
              return (
                <tr key={uid}>
                  <th>{name}</th>
                  <th>{location}</th>
                  <th>{opening}</th>
                  <th>{tel}</th>
                  <th>{type}</th>
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
