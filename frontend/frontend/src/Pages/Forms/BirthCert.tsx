import React, { useState } from 'react';

const BirthCertificateForm = () => {
  // Initial state for form data
  const [formData, setFormData] = useState({
    childName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    gender: '',
    parentName: '',
    parentContact: '',
    parentAddress: '',
    informantName: '',
    informantRelation: '',
    informantContact: '',
    informantAddress: '',
    documents: null,
  });

  // Handle input changes
  const handleChange = (e: { target: { name: any; value: any; files: any; }; }) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handle file inputs
    });
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData); // Perform form submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Application for Birth Certificate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-black pb-2">Child Information</h2>
          <div className='flex justify-between'>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">Child Name</label>
              <input type="text" name="childName" value={formData.childName} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">Date of Birth</label>
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">Place of Birth</label>
              <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-black pb-2">Parent and Informant Information</h2>
          <div className='flex justify-between'>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">Parent Name</label>
              <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">Parent Contact Number</label>
              <input type="text" name="parentContact" value={formData.parentContact} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">Parent Address</label>
              <input type="text" name="parentAddress" value={formData.parentAddress} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">Informant Name</label>
              <input type="text" name="informantName" value={formData.informantName} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">Relation to Child</label>
            <input type="text" name="informantRelation" value={formData.informantRelation} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">Informant Contact Number</label>
            <input type="text" name="informantContact" value={formData.informantContact} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">Informant Address</label>
            <input type="text" name="informantAddress" value={formData.informantAddress} onChange={handleChange} className="p-2 border border-gray-400 rounded w-full" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-black pb-2">Upload Documents</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">Upload Aadhar Card</label>
            <input
              type="file"
              name="documents"
              accept=".pdf,.jpg,.png"
              onChange={handleChange}
              className="p-2 border border-gray-400 rounded w-full"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BirthCertificateForm;
