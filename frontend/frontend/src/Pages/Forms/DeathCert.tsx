import React, { useState } from 'react';

const DeathCertificateForm = () => {
  // Initial state for form data
  const [formData, setFormData] = useState({
    deceasedName: '',
    dateOfDeath: '',
    placeOfDeath: '',
    ageAtDeath: '',
    causeOfDeath: '',
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
      <h1 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Application for Death Certificate</h1>
      <form onSubmit={handleSubmit}>
        {/* Deceased Information Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-black pb-2">Deceased Information</h2>
          <div className='flex justify-between'>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Deceased Name</label>
              <input type="text" name="deceasedName" value={formData.deceasedName} onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Date of Death</label>
              <input type="date" name="dateOfDeath" value={formData.dateOfDeath} onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Place of Death</label>
              <input type="text" name="placeOfDeath" value={formData.placeOfDeath} onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Age at Death</label>
              <input type="number" name="ageAtDeath" value={formData.ageAtDeath} onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Cause of Death</label>
              <input type="text" name="causeOfDeath" value={formData.causeOfDeath} onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
          </div>
        </div>

        {/* Informant Information Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-black pb-2">Informant Information</h2>
          <div className='flex justify-between'>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Informant's Name</label>
              <input type="text" name="informantName" value={formData.informantName} onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Relation to Deceased</label>
              <input type="text" name="informantRelation" value={formData.informantRelation} onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Informant's Contact Number</label>
              <input type="text" name="informantContact" value={formData.informantContact} onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Informant's Address</label>
              <input type="text" name="informantAddress" value={formData.informantAddress} onChange={handleChange} className="p-2 border rounded w-full" />
            </div>
          </div>
        </div>

        {/* Upload Documents Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-black pb-2">Upload Documents</h2>
          <div className="mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Upload Supporting Documents</label>
              <input
                type="file"
                name="documents"
                accept=".pdf,.jpg,.png"
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
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

export default DeathCertificateForm;
