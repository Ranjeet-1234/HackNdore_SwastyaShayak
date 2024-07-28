// src/components/NavLinks.tsx
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavLinks: React.FC = () => {
  // State variables to manage the visibility of dropdowns
  const [showDepartments, setShowDepartments] = useState(false);
  const [showOnlineServices, setShowOnlineServices] = useState(false);
  const [showEmployeeServices, setShowEmployeeServices] = useState(false);

  // Refs to track the dropdown elements
  const departmentsRef = useRef<HTMLDivElement>(null);
  const onlineServicesRef = useRef<HTMLDivElement>(null);
  const employeeServicesRef = useRef<HTMLDivElement>(null);

  // Function to handle clicks outside the dropdowns to close them
  const handleClickOutside = (event: MouseEvent) => {
    if (
      departmentsRef.current && !departmentsRef.current.contains(event.target as Node) &&
      onlineServicesRef.current && !onlineServicesRef.current.contains(event.target as Node) &&
      employeeServicesRef.current && !employeeServicesRef.current.contains(event.target as Node)
    ) {
      setShowDepartments(false);
      setShowOnlineServices(false);
      setShowEmployeeServices(false);
    }
  };

  // Adding event listener to detect clicks outside the dropdowns
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // Main navigation bar container
    <nav className="border-b border-t border-gray-300 p-2 flex justify-evenly text-black font-semibold uppercase mt-5 relative">
      <Link to='/'><a className="hover:text-gray-400">Home</a></Link>

      {/* Departments dropdown */}
      <div className="relative" ref={departmentsRef}>
        <a
          href="#departments"
          className="hover:text-gray-400 flex items-center cursor-pointer"
          onClick={() => setShowDepartments(!showDepartments)}
        >
          Departments <FaChevronDown className="ml-1" />
        </a>
        {showDepartments && (
          <div className="absolute top-full left-0 bg-white shadow-lg mt-2 p-2 z-10 w-48">
            <a href="#health" className="block px-4 py-2 hover:bg-gray-200">Health</a>
            <a href="#education" className="block px-4 py-2 hover:bg-gray-200">Education</a>
            <a href="#transport" className="block px-4 py-2 hover:bg-gray-200">Transport</a>
          </div>
        )}
      </div>

      {/* Online Services dropdown */}
      <div className="relative" ref={onlineServicesRef}>
        <a
          className="hover:text-gray-400 flex items-center cursor-pointer"
          onClick={() => setShowOnlineServices(!showOnlineServices)}
        >
          Online Services <FaChevronDown className="ml-1" />
        </a>
        {showOnlineServices && (
          <div className="absolute top-full left-0 bg-white shadow-lg mt-2 p-2 z-10 w-60">
            <Link to='/birth' className="block px-4 py-2 hover:bg-gray-200">Birth Certificate</Link>
            <Link to="/death" className="block px-4 py-2 hover:bg-gray-200">Death Certificate</Link>
            <Link to="/uploadocs" className="block px-4 py-2 hover:bg-gray-200">Download Documents</Link>
            <Link to='/permits' className="block px-4 py-2 hover:bg-gray-200">Building Permission</Link>
          </div>
        )}
      </div>

      {/* Employee Services dropdown */}
      <div className="relative" ref={employeeServicesRef}>
        <a
          href="#employee-services"
          className="hover:text-gray-400 flex items-center cursor-pointer"
          onClick={() => setShowEmployeeServices(!showEmployeeServices)}
        >
          Employee Services <FaChevronDown className="ml-1" />
        </a>
        {showEmployeeServices && (
          <div className="absolute top-full left-0 bg-white shadow-lg mt-2 p-2 z-10 w-72">
            <a href="#payroll" className="block px-4 py-2 hover:bg-gray-200">Civil Registration Department</a>
            <a href="#benefits" className="block px-4 py-2 hover:bg-gray-200">Fire Safety NoC</a>
            <a href="#leave" className="block px-4 py-2 hover:bg-gray-200">Building Safety NoC</a>
            <a href="#leave" className="block px-4 py-2 hover:bg-gray-200">Sewage Safety NoC</a>
            <a href="#leave" className="block px-4 py-2 hover:bg-gray-200">Health Safety NoC</a>
          </div>
        )}
      </div>

      <a href="#contact" className="hover:text-gray-400">Contact</a>
    </nav>
  );
};

export default NavLinks;
