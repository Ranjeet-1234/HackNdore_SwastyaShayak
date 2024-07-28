import React from "react";
import "./OsrFault.css";

let result = {};

const response = await fetch('http://localhost:8000/upload/result', {
    method: "GET"
  })
  const res = await response.json();
  result = res.result;
  
const mismatch1 = result[1].mismatches[0];
const mismatch2 = result[1].mismatches[1];
const mismatch3 = result[1].mismatches[2];
console.log(mismatch2);
// console.log(result);
const ViewOSRFault = () => {
  return (
    <div>
      <table
        style={{
          width: 1150,
          textAlign: "center",
        }}
        className="osrFault"
      >
        <tr>
          <th>Data Input</th>
          <th>Expected Data</th>
          <th>Actual Data</th>
        </tr>
        <tr>
          <td>Date-of-Birth</td>
          <td
            style={{
              color: "green",
            }}
          >
            {mismatch2.expected}
          </td>
          <td
            style={{
              color: "red",
            }}
          >
            {mismatch2.actual}
          </td>
        </tr>
        <tr>
          <td>Surname</td>
          <td
            style={{
              color: "green",
            }}
          >
            {mismatch1.actual}
          </td>
          <td
            style={{
              color: "red",
            }}
          >
            {mismatch1.expected}
          </td>
        </tr>

        <tr>
          <td>Gender</td>
          <td
            style={{
              color: "green",
            }}
          >
            {mismatch3.expected}
          </td>
          <td
            style={{
              color: "red",
            }}
          >
            {mismatch3.actual}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ViewOSRFault;
