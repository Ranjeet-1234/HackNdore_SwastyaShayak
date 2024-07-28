import React from "react";
import imgOne from "../../public/ranjaOne.png";
import imgTwo from "../../public/ranjyaTwo.png";

const ViewDocFault = () => {
  return (
    <div>
      {/* Container for displaying images and fault details */}
      <div>
        <div>
          <div
            style={{
              gap: 20, // Space between the images
              display: 'flex', // Arrange images side by side
            }}
          >
            {/* Display the first image */}
            <img
              src={imgOne}
              alt="Faulty Document Image 1"
              style={{
                height: 380, // Height of the image
                width: 550, // Width of the image
              }}
            />
            {/* Display the second image */}
            <img
              src={imgTwo}
              alt="Faulty Document Image 2"
              style={{
                height: 380, // Height of the image
                width: 550, // Width of the image
              }}
            />
          </div>
        </div>
        <div>
          {/* List of faults and details */}
          <ul>
            {/* Fault description */}
            <li
              style={{
                fontSize: 25, // Font size for the fault description
                marginTop: 10, // Space above the fault description
                color: "red", // Text color for the fault description
              }}
            >
              The First Name of User is Edited
            </li>
            {/* Expected name */}
            <li
              style={{
                color: "green", // Text color for the expected name
                fontSize: 20, // Font size for the expected name
              }}
            >
              Expected Name (UIDI_API_KEY) - Ranjeet
            </li>
            {/* Actual name */}
            <li
              style={{
                color: "red", // Text color for the actual name
                fontSize: 20, // Font size for the actual name
              }}
            >
              Actual Name - Shravan
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewDocFault;
