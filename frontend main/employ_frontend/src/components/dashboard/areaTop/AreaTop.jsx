import { MdOutlineMenu } from "react-icons/md"; // Importing menu icon from react-icons
import "./AreaTop.scss"; // Importing stylesheet for the component
import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext"; // Importing sidebar context to control sidebar
import "react-date-range/dist/styles.css"; // Importing default styles for date range picker
import "react-date-range/dist/theme/default.css"; // Importing theme styles for date range picker
import { addDays } from "date-fns"; // Utility function for date manipulation
import { DateRange } from "react-date-range"; // Date range picker component

const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext); // Getting function to open sidebar from context

  // State to manage the date range
  const [state, setState] = useState([
    {
      startDate: new Date(), // Start date set to current date
      endDate: addDays(new Date(), 7), // End date set to 7 days from current date
      key: "selection",
    },
  ]);

  // State to control the visibility of the date picker
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null); // Ref to handle clicks outside the date picker

  // Handler to show the date picker when the input is clicked
  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  // Handler to close the date picker if clicked outside
  const handleClickOutside = (event) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  // Adding and cleaning up the event listener for clicks outside of the date picker
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="content-area-top">
      <div className="area-top-l">
        {/* Button to open the sidebar */}
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        {/* Title of the section */}
        <h2 className="area-top-title">Dashboard</h2>
      </div>
      <div className="area-top-r">
        {/* Wrapper for the date range picker */}
        <div
          ref={dateRangeRef}
          className={`date-range-wrapper ${
            !showDatePicker ? "hide-date-range" : ""
          }`}
          onClick={handleInputClick}
        >
          {/* Date range picker component */}
          <DateRange
            editableDateInputs={true} // Allows editing of date inputs
            onChange={(item) => setState([item.selection])} // Updates state on date change
            moveRangeOnFirstSelection={false} // Prevents moving range on first selection
            ranges={state} // Sets the date range
            showMonthAndYearPickers={false} // Hides month and year pickers
          />
        </div>
      </div>
    </section>
  );
};

export default AreaTop;
