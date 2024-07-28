import React from 'react';
// Importing icons from 'react-icons/fa' library
import { FaMap, FaUsers, FaLanguage, FaHome, FaMale, FaFemale, FaBuilding, FaCity, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';

const DistrictInfo: React.FC = () => {
    return (
        <div className="shadow-md w-full max-w-lg">
            {/* Heading for the section */}
            <h2 className="text-2xl font-bold mb-2">About the District</h2>
            <div>
                {/* Description of the district */}
                <p>Indore is situated on the Malwa plateau at an altitude of 553 m above sea level, on the banks of two small rivulets – the Saraswati and the Khan.</p>
            </div>
            <div className='mt-10'>
                {/* Sub-heading for the glance section */}
                <h3 className="text-2xl font-bold mb-4 ">At a Glance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Each item below represents a piece of information about the district */}
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaMap className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Area:</strong> 3898 Sq. Km.</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaUsers className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Population:</strong> 32,76,697</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaLanguage className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Language:</strong> Hindi</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaHome className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Villages:</strong> 676</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaMale className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Male:</strong> 16,99,627</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaFemale className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Female:</strong> 15,77,070</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaBuilding className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Municipal Corporation:</strong> 1</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaCity className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Nagar Parishad:</strong> 8</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaMapMarkerAlt className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Tehsil:</strong> 10</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaShieldAlt className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Blocks:</strong> 4</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <FaShieldAlt className="text-blue-600 mr-3 text-2xl" />
                        <span><strong>Police Stations:</strong> 49</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DistrictInfo;
