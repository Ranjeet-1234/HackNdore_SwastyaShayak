// src/components/FindServices.tsx
import React from 'react';
import { FaClinicMedical, FaSchool, FaBuilding, FaBus } from 'react-icons/fa';

const FindServices: React.FC = () => {
  const services = [
    { icon: <FaClinicMedical />, name: 'Healthcare' },
    { icon: <FaSchool />, name: 'Education' },
    { icon: <FaBuilding />, name: 'Municipal Services' },
    { icon: <FaBus />, name: 'Transport' },
  ];

  return (
    <div className="shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Find Services</h2>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-2 p-2 border border-gray-300  shadow-sm">
            <div className="text-blue-600">{service.icon}</div>
            <span>{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindServices;
