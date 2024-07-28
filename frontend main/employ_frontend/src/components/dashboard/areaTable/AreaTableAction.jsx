import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./AreaTableAction.scss"; // Importing stylesheet for this component

const AreaTableAction = () => {
  // State to manage the visibility of the dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Ref to attach to the dropdown menu for detecting clicks outside
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const handleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  // Handle clicks outside the dropdown menu to close it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  // Use effect to add and remove event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="action-dropdown-container">
      {/* Button to toggle dropdown menu */}
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
        aria-haspopup="true" // Indicates the button controls a dropdown menu
        aria-expanded={showDropdown} // Indicates whether the dropdown is visible
      >
        <HiDotsHorizontal size={18} />
      </button>
      
      {/* Dropdown menu */}
      {showDropdown && (
        <div className="action-dropdown-menu" ref={dropdownRef}>
          <ul className="dropdown-menu-list">
            {/* Menu item for viewing details */}
            <li className="dropdown-menu-item">
              <Link to="/view" className="dropdown-menu-link">
                View
              </Link>
            </li>
            {/* Menu item for editing details */}
            <li className="dropdown-menu-item">
              <Link to="/edit" className="dropdown-menu-link">
                Edit
              </Link>
            </li>
            {/* Menu item for deleting details */}
            <li className="dropdown-menu-item">
              <Link to="/delete" className="dropdown-menu-link">
                Delete
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AreaTableAction;
