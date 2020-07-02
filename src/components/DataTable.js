import React from "react";

const DataTable = ({headers, data}) => (
  <table>
    <thead>
      <tr>
        {headers.map((header) => (
          <th>{header}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {data.map((element) => (
        <tr>
          {Object.keys(element).map((key) => (
            <td>{element[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;