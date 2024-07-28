import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  landUse: string;
  grossPlotArea: number;
  netPlotArea: number;
  roadWidth: number;
  buildingUse: string;
  typeOfDevelopment: string;
  proposedGroundCoverage: number;
  buildingHeight: number;
  provisionForDivyand: string;
  additionalParkingType: string;
  designCompliance: string;
  electricLineDistanceCompliance: string;
  mandatoryDocuments: File | null;
  cornerPlotFlag: boolean;
}

const BuildingPermitForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    landUse: '',
    grossPlotArea: 0,
    netPlotArea: 0,
    roadWidth: 0,
    buildingUse: '',
    typeOfDevelopment: '',
    proposedGroundCoverage: 0,
    buildingHeight: 0,
    provisionForDivyand: '',
    additionalParkingType: '',
    designCompliance: '',
    electricLineDistanceCompliance: '',
    mandatoryDocuments: null,
    cornerPlotFlag: false,
  });
  let navigate=useNavigate()
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [page, setPage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.landUse) newErrors.landUse = 'Land Use is required';
    if (formData.grossPlotArea <= 0) newErrors.grossPlotArea = 'Gross Plot Area must be positive';
    if (formData.netPlotArea <= 0) newErrors.netPlotArea = 'Net Plot Area must be positive';
    if (formData.roadWidth <= 0) newErrors.roadWidth = 'Road Width must be positive';
    if (!formData.buildingUse) newErrors.buildingUse = 'Building Use is required';
    if (!formData.typeOfDevelopment) newErrors.typeOfDevelopment = 'Type of Development is required';
    if (formData.proposedGroundCoverage <= 0) newErrors.proposedGroundCoverage = 'Ground Coverage must be positive';
    if (formData.buildingHeight <= 0) newErrors.buildingHeight = 'Building Height must be positive';
    if (!formData.provisionForDivyand) newErrors.provisionForDivyand = 'Provision for Divyand is required';
    if (!formData.additionalParkingType) newErrors.additionalParkingType = 'Additional Parking Type is required';
    if (!formData.designCompliance) newErrors.designCompliance = 'Design Compliance is required';
    if (!formData.electricLineDistanceCompliance) newErrors.electricLineDistanceCompliance = 'Electric Line Distance Compliance is required';
    if (!formData.mandatoryDocuments) newErrors.mandatoryDocuments = 'Mandatory Documents are required';
    else if (formData.mandatoryDocuments.size > 10485760) newErrors.mandatoryDocuments = 'File size is too large';
    if (formData.cornerPlotFlag === undefined) newErrors.cornerPlotFlag = 'Corner Plot Flag is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files ? files[0] : null : value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetch('http://localhost:8000/certificate/build',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })
    .then((res)=> res.json())
    .then((response)=>{
        if(response.success === true){
            navigate('/');
        }
    })
    .catch((err)=>{
        console.log("some problem please try again");
    })
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Building Permit Application</h1>
      {submitMessage && <p className="text-green-500 text-lg mb-4">{submitMessage}</p>}
      <form onSubmit={handleSubmit}>
        {page === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2 border-black pb-2">Building Information</h2>
            <div className="flex flex-wrap">
              {/* Land Use Input */}
              <div className="mb-4 w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1 text-gray-700">Land Use</label>
                <input
                  type="text"
                  name="landUse"
                  value={formData.landUse}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.landUse && <p className="text-red-500 text-sm">{errors.landUse}</p>}
              </div>
              {/* Gross Plot Area Input */}
              <div className="mb-4 w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1 text-gray-700">Gross Plot Area (sq. meters)</label>
                <input
                  type="number"
                  name="grossPlotArea"
                  value={formData.grossPlotArea}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.grossPlotArea && <p className="text-red-500 text-sm">{errors.grossPlotArea}</p>}
              </div>
              {/* Net Plot Area Input */}
              <div className="mb-4 w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1 text-gray-700">Net Plot Area (sq. meters)</label>
                <input
                  type="number"
                  name="netPlotArea"
                  value={formData.netPlotArea}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.netPlotArea && <p className="text-red-500 text-sm">{errors.netPlotArea}</p>}
              </div>
              {/* Road Width Input */}
              <div className="mb-4 w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1 text-gray-700">Road Width (meters)</label>
                <input
                  type="number"
                  name="roadWidth"
                  value={formData.roadWidth}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.roadWidth && <p className="text-red-500 text-sm">{errors.roadWidth}</p>}
              </div>
              {/* Building Use Input */}
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium mb-1 text-gray-700">Building Use</label>
                <input
                  type="text"
                  name="buildingUse"
                  value={formData.buildingUse}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.buildingUse && <p className="text-red-500 text-sm">{errors.buildingUse}</p>}
              </div>
              {/* Type of Development Input */}
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium mb-1 text-gray-700">Type of Development</label>
                <input
                  type="text"
                  name="typeOfDevelopment"
                  value={formData.typeOfDevelopment}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.typeOfDevelopment && <p className="text-red-500 text-sm">{errors.typeOfDevelopment}</p>}
              </div>
              {/* Proposed Ground Coverage Input */}
              <div className="mb-4 w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1 text-gray-700">Proposed Ground Coverage (%)</label>
                <input
                  type="number"
                  name="proposedGroundCoverage"
                  value={formData.proposedGroundCoverage}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.proposedGroundCoverage && <p className="text-red-500 text-sm">{errors.proposedGroundCoverage}</p>}
              </div>
              {/* Building Height Input */}
              <div className="mb-4 w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1 text-gray-700">Building Height (meters)</label>
                <input
                  type="number"
                  name="buildingHeight"
                  value={formData.buildingHeight}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.buildingHeight && <p className="text-red-500 text-sm">{errors.buildingHeight}</p>}
              </div>
              {/* Provision for Divyand Input */}
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium mb-1 text-gray-700">Provision for Divyand</label>
                <input
                  type="text"
                  name="provisionForDivyand"
                  value={formData.provisionForDivyand}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.provisionForDivyand && <p className="text-red-500 text-sm">{errors.provisionForDivyand}</p>}
              </div>
              {/* Additional Parking Type Input */}
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium mb-1 text-gray-700">Additional Parking Type</label>
                <input
                  type="text"
                  name="additionalParkingType"
                  value={formData.additionalParkingType}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.additionalParkingType && <p className="text-red-500 text-sm">{errors.additionalParkingType}</p>}
              </div>
              {/* Design Compliance Input */}
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium mb-1 text-gray-700">Design Compliance</label>
                <input
                  type="text"
                  name="designCompliance"
                  value={formData.designCompliance}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.designCompliance && <p className="text-red-500 text-sm">{errors.designCompliance}</p>}
              </div>
              {/* Electric Line Distance Compliance Input */}
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium mb-1 text-gray-700">Electric Line Distance Compliance</label>
                <input
                  type="text"
                  name="electricLineDistanceCompliance"
                  value={formData.electricLineDistanceCompliance}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.electricLineDistanceCompliance && <p className="text-red-500 text-sm">{errors.electricLineDistanceCompliance}</p>}
              </div>
              {/* Corner Plot Flag Input */}
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium mb-1 text-gray-700">Corner Plot Flag</label>
                <input
                  type="checkbox"
                  name="cornerPlotFlag"
                  checked={formData.cornerPlotFlag}
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded"
                />
                {errors.cornerPlotFlag && <p className="text-red-500 text-sm">{errors.cornerPlotFlag}</p>}
              </div>
            </div>
          </div>
        )}

        {page === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2 border-black pb-2">Upload Mandatory Documents</h2>
            <div className="flex flex-wrap">
              {/* Mandatory Documents Upload */}
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium mb-1 text-gray-700">Upload Mandatory Documents (PDF, JPG, PNG)</label>
                <input
                  type="file"
                  name="mandatoryDocuments"
                  accept=".pdf,.jpg,.png"
                  onChange={handleChange}
                  className="p-2 border border-gray-400 rounded w-full"
                />
                {errors.mandatoryDocuments && <p className="text-red-500 text-sm">{errors.mandatoryDocuments}</p>}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          {page > 1 && (
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
          )}
          {page < 2 && (
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          )}
          {page === 2 && (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BuildingPermitForm;
