import React from "react";
import "./BirthAllUserInfo.css";
import { Link } from "react-router-dom";

const showOSRfalt = () => {};

const BirthAllUserInfo = () => {
  return (
    <div>
      <table
        style={{
          width: 1180,
          textAlign: "center",
        }}
        className="upperTable"
      >
        <tr>
          <th>Sr No</th>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr className="hosp-one">
          <td>1</td>
          <td>Application Id</td>
          <td>4335</td>
        </tr>
        <tr className="hosp-one">
          <td>2</td>
          <td>Applicant Name</td>
          <td>Shravan jare</td>
        </tr>
        <tr className="hosp-one">
          <td>3</td>
          <td>Fathers Name</td>
          <td>Bharat Jare</td>
        </tr>
        <tr className="hosp-one">
          <td> 4</td>
          <td>Mothers Name</td>
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
          <td>Walchand College of Engineering Sangli , vishrambag - 416416</td>
        </tr>
        <tr className="hosp-two">
          <td> 8</td>
          <td>Contact Number</td>
          <td>+91-8421696703</td>
        </tr>
        <tr className="hosp-two">
          <td> 9</td>
          <td>Email</td>
          <td>shravanjare@gmail.com</td>
        </tr>
        <tr className="hosp-two">
          <td> 10</td>
          <td>Gender</td>
          <td>Male</td>
        </tr>

        <tr className="hosp-three">
          <td> 11</td>
          <td>Nationality</td>
          <td>Indian</td>
        </tr>
        <tr className="hosp-three">
          <td> 12</td>
          <td>Document Proof</td>
          <td>Hospital Discharge , Summary , Birth Affidavit</td>
        </tr>
        <tr className="hosp-three">
          <td>13 </td>
          <td>Date of Application</td>
          <td>2024-07-15</td>
        </tr>
        <tr className="hosp-three">
          <td> 14</td>
          <td>Status</td>
          <td>Pending</td>
        </tr>
        <tr className="hosp-three">
          <td> 15</td>
          <td>Remarks</td>
          <td>Additional documents required(proof of residency)</td>
        </tr>
        <tr className="hosp-three">
          <td> 16</td>
          <td>Payment Details</td>
          <td>Transition ID : ABC84545816</td>
        </tr>

        <tr className="hosp-three">
          <td> 17</td>
          <td>Applicants Relationship to Child</td>
          <td>Parent</td>
        </tr>

        <tr className="hosp-three">
          <td> 17</td>
          <td>Relation Proof Documents</td>
          <td>Aadhar Card , Pan card , Ration Card , LightBill</td>
        </tr>
      </table>

      <div>
        <div className="bottomTable">
          <table>
            <tr>
              <th>Name</th>
              <th>Applied Date</th>
              <th>OSR Accuracy</th>
              <th>OSR Fault</th>
              <th>Document Accuracy</th>
              <th>Document Fault</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Shravan Jare</td>
              <td>2024-07-12</td>
              <td>70%</td>
              <td>
                <a href="#tableBottomOne">
                  <button>View OSR Fault 30%</button>
                </a>
              </td>
              <td>80%</td>
              <td>
                <Link to="/view/doc/fault">
                  <button>View Document Fault 20%</button>
                </Link>
              </td>
              <td className="statusName">Pending</td>
            </tr>
          </table>

          <div>
            <table
              style={{
                width: 1150,
                textAlign: "center",
              }}
              className="osrFault"
              id="tableBottomOne"
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
                  2024-02-02
                </td>
                <td
                  style={{
                    color: "red",
                  }}
                >
                  2024-09-01
                </td>
              </tr>
              <tr>
                <td>Surname</td>
                <td
                  style={{
                    color: "green",
                  }}
                >
                  Jare
                </td>
                <td
                  style={{
                    color: "red",
                  }}
                >
                  Zare
                </td>
              </tr>

              <tr>
                <td>Birth-Place</td>
                <td
                  style={{
                    color: "green",
                  }}
                >
                  Sangli
                </td>
                <td
                  style={{
                    color: "red",
                  }}
                >
                  Sangola
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthAllUserInfo;
