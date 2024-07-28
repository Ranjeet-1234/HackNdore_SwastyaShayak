import React from "react";
import "./BirthAllUserInfo.css";
import { Link } from "react-router-dom";

// Initialize an empty object to store API response data
let result = {};

// Fetch data from the server
const response = await fetch("http://localhost:8000/upload/result", {
  method: "GET",
});

// Parse the response data as JSON
const res = await response.json();
result = res.result;

// Extract mismatches from the result
const mismatch1 = result[1].mismatches[0];
const mismatch2 = result[1].mismatches[1];
const mismatch3 = result[1].mismatches[2];

const BirthAllUserInfo = () => {
  return (
    <div>
      {/* Table displaying user information */}
      <table
        style={{
          width: 1180,
          textAlign: "center",
        }}
        className="upperTable"
      >
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Field</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hosp-one">
            <td>1</td>
            <td>Application Id</td>
            <td>4335</td>
          </tr>
          <tr className="hosp-one">
            <td>2</td>
            <td>Applicant Name</td>
            <td>Shravan Jare</td>
          </tr>
          <tr className="hosp-one">
            <td>3</td>
            <td>Father's Name</td>
            <td>Bharat Jare</td>
          </tr>
          <tr className="hosp-one">
            <td>4</td>
            <td>Mother's Name</td>
            <td>Prapti Jare</td>
          </tr>
          <tr className="hosp-one">
            <td>5</td>
            <td>Date of Birth</td>
            <td>2024-01-01</td>
          </tr>

          <tr className="hosp-two">
            <td>6</td>
            <td>Place of Birth</td>
            <td>Sangli</td>
          </tr>
          <tr className="hosp-two">
            <td>7</td>
            <td>Address</td>
            <td>Walchand College of Engineering Sangli, Vishrambag - 416416</td>
          </tr>
          <tr className="hosp-two">
            <td>8</td>
            <td>Contact Number</td>
            <td>+91-8421696703</td>
          </tr>
          <tr className="hosp-two">
            <td>9</td>
            <td>Email</td>
            <td>shravanjare@gmail.com</td>
          </tr>
          <tr className="hosp-two">
            <td>10</td>
            <td>Gender</td>
            <td>Male</td>
          </tr>

          <tr className="hosp-three">
            <td>11</td>
            <td>Nationality</td>
            <td>Indian</td>
          </tr>
          <tr className="hosp-three">
            <td>12</td>
            <td>Document Proof</td>
            <td>Hospital Discharge, Summary, Birth Affidavit</td>
          </tr>
          <tr className="hosp-three">
            <td>13</td>
            <td>Date of Application</td>
            <td>2024-07-15</td>
          </tr>
          <tr className="hosp-three">
            <td>14</td>
            <td>Status</td>
            <td>Pending</td>
          </tr>
          <tr className="hosp-three">
            <td>15</td>
            <td>Remarks</td>
            <td>Additional documents required (proof of residency)</td>
          </tr>
          <tr className="hosp-three">
            <td>16</td>
            <td>Payment Details</td>
            <td>Transaction ID: ABC84545816</td>
          </tr>

          <tr className="hosp-three">
            <td>17</td>
            <td>Applicant's Relationship to Child</td>
            <td>Parent</td>
          </tr>

          <tr className="hosp-three">
            <td>18</td>
            <td>Relation Proof Documents</td>
            <td>Aadhar Card, PAN Card, Ration Card, Light Bill</td>
          </tr>
        </tbody>
      </table>

      {/* Table displaying additional information about the application */}
      <div>
        <div className="bottomTable">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Applied Date</th>
                <th>OCR Accuracy</th>
                <th>OCR Fault</th>
                <th>Document Accuracy</th>
                <th>Document Fault</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shravan Jare</td>
                <td>2024-07-12</td>
                <td>80%</td>
                <td>
                  <a href="#bottomTableOne">
                    <button onClick={()=>{
                      document.getElementById('bottomTableOne').style.display = "block";
                    }}>View OCR Fault</button>
                  </a>
                </td>
                <td style={{ textIndent: "30px" }}>80%</td>
                <td>
                  <Link to="/view/doc/fault">
                    <button
                     
                    >
                      View Document Fault 20%
                    </button>
                  </Link>
                </td>
                <td className="statusName">Pending</td>
              </tr>
            </tbody>
          </table>

          {/* Detailed table showing OCR fault details */}
          <div>
            <table
              style={{
                width: 1150,
                textAlign: "center",
                display: "none",
              }}
              className="osrFault"
              id="bottomTableOne"
            >
              <thead>
                <tr>
                  <th>Data Input</th>
                  <th>Expected Data</th>
                  <th>Actual Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Date-of-Birth</td>
                  <td style={{ color: "green" }}>
                    {mismatch2.expected}
                  </td>
                  <td style={{ color: "red" }}>
                    {mismatch2.actual}
                  </td>
                </tr>
                <tr>
                  <td>Surname</td>
                  <td style={{ color: "green" }}>
                    {mismatch1.actual}
                  </td>
                  <td style={{ color: "red" }}>
                    {mismatch1.expected}
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td style={{ color: "green" }}>
                    {mismatch3.expected}
                  </td>
                  <td style={{ color: "red" }}>
                    {mismatch3.actual}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthAllUserInfo;
