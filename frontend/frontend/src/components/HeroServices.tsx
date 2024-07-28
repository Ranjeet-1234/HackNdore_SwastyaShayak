// src/components/FindServices.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaClinicMedical, FaSchool, FaBuilding, FaBus } from 'react-icons/fa';

const FindServices: React.FC = () => {
  // Array of service objects with their icons, names, and links
  const services = [
    { icon: <FaClinicMedical />, name: 'Birth Certificate', link: '/birth' },
    { icon: <FaSchool />, name: 'Death Certificate', link: '/death' },
    { icon: <FaBuilding />, name: 'Download Documents', link: '/uploadocs' },
    { icon: <FaBus />, name: 'Building Permit', link: '/permits' },
  ];

  return (
    <div className="shadow-md w-full max-w-lg">
      {/* Heading for the section */}
      <h2 className="text-2xl font-bold mb-4">Find Services</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Mapping over services array to display each service */}
        {services.map((service, index) => (
          <Link to={service.link} key={index}>
            <div className="flex items-center space-x-2 p-2 border border-gray-300 shadow-sm cursor-pointer">
              {/* Service icon */}
              <div className="text-blue-600">{service.icon}</div>
              {/* Service name */}
              <span>{service.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FindServices;
