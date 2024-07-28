import { Link } from "react-router-dom";

const TABLE_HEADS = [
  "Name",
  "Applied Date",
  "DOB",
  "Gender",
  "Address",
  "Parent Name",
  "Contact",
  "Relation", // verified
  "Certificate Type", // death birth
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Shravan Jare",
    date: "Jun 24 , 2024",
    dob: "12-12-2003",
    gender: "Male",
    address: "Vishrambag , Sangli",
    parent: "Bharat Jare",
    contact: "8421696703",
    relation: "Parent",
    type: "Death",
  },
  {
    id: 101,
    name: "Manas Gedam",
    date: "Jun 01 , 2023",
    dob: "12-12-2003",
    gender: "Male",
    address: "Solpaur",
    parent: "Prapti Jare",
    contact: "8421696703",
    relation: "Mother",
    type: "Birth",
  },
  {
    id: 102,
    name: "Sharvari Jadhav",
    date: "April 24 , 2024",
    dob: "20-02-2003",
    gender: "Female",
    address: "Kolhapur",
    parent: "Pappaji Jadhav",
    contact: "8421696703",
    relation: "Parent",
    type: "Birth",
  },
  {
    id: 103,
    name: "Ali Jare",
    date: "Jun 24 , 2024",
    dob: "12-12-2003",
    gender: "Male",
    address: "Vishrambag , Sangli",
    parent: "Mohmad Jare",
    contact: "8421696703",
    relation: "Parent",
    type: "Death",
  },
  {
    id: 104,
    name: "Shravan Jare",
    date: "Jun 24 , 2024",
    dob: "12-12-2003",
    gender: "Male",
    address: "Vishrambag , Sangli",
    parent: "Bharat Jare",
    contact: "8421696703",
    relation: "Parent",
    type: "Death",
  },
  {
    id: 105,
    name: "Ranjeet Jare",
    date: "Jun 24 , 2024",
    dob: "12-12-2003",
    gender: "Male",
    address: "Nagpur",
    parent: "Pappaji revatkar",
    contact: "8421696703",
    relation: "Parent",
    type: "Death",
  },
  {
    id: 106,
    name: "Shivam Mathapati",
    date: "May 24 , 2024",
    dob: "06-1-2005",
    gender: "Male",
    address: "Solapur",
    parent: " Vivek Mathapati",
    contact: "966584412",
    relation: "Parent",
    type: "Birth",
  },
  {
    id: 107,
    name: "Nayna Mathapati",
    date: "Jun 4 , 2024",
    dob: "12-12-1903",
    gender: "Female",
    address: "Latur",
    parent: "Prem Mathapati",
    contact: "8654613516",
    relation: "Parent",
    type: "Birth",
  },
];

const HospitaloneData = () => {
  return (
    <>
      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">
            Peoples Data - Birth / Death Certificates
          </h4>
        </div>
        <div className="data-table-diagram">
          <table>
            <thead>
              <tr>
                {TABLE_HEADS?.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.date}</td>
                    <td>{dataItem.dob}</td>
                    <td>{dataItem.gender}</td>
                    <td>
                      <div>{dataItem.address}</div>
                    </td>
                    <td className="dt-cell-action">
                      <div>{dataItem.parent}</div>
                    </td>
                    <td>
                      <div>{dataItem.contact}</div>
                    </td>
                    <td>
                      <div>{dataItem.relation}</div>
                    </td>
                    <td>
                      <div>{dataItem.type}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HospitaloneData;
