import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema using Yup
const schema = yup.object().shape({
  applicantName: yup.string().required('Applicant Name is required'),
  contactNumber: yup.string().required('Contact Number is required').matches(/^[0-9]{10}$/, 'Must be a valid phone number'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  propertyAddress: yup.string().required('Property Address is required'),
  plotNumber: yup.string().required('Plot Number is required'),
  projectType: yup.string().required('Project Type is required'),
  estimatedCost: yup.number().required('Estimated Cost is required').positive('Cost must be a positive number'),
  caseType: yup.string().required('Case Type is required'),
  consultantName: yup.string().required('Consultant Name is required'),
  consultantContact: yup.string().required('Consultant Contact is required').matches(/^[0-9]{10}$/, 'Must be a valid phone number'),
  ownerName: yup.string().required('Owner Name is required'),
  ownerContact: yup.string().required('Owner Contact is required').matches(/^[0-9]{10}$/, 'Must be a valid phone number'),
  ownerAddress: yup.string().required('Owner Address is required'),
  layoutApprovalType: yup.string().required('Layout Approval Type is required'),
  additionalFar: yup.boolean(),
  plotMortgaged: yup.boolean(),
  additionalParking: yup.boolean(),
  waterSupplySanctioned: yup.boolean(),
  drainageSanctioned: yup.boolean(),
  roadType: yup.string().required('Road Type is required'),
  ulbName: yup.string().required('ULB Name is required'),
  zone: yup.string().required('Zone is required'),
  ward: yup.string().required('Ward is required'),
  colonyName: yup.string().required('Colony Name is required'),
  plotNumberTable: yup.string().required('Plot Number is required'),
});

type FormData = yup.InferType<typeof schema>;

const BuildingPermitForm: React.FC = () => {
  const [page, setPage] = useState(1);
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Building Permit Application</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {page === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <Controller
              name="applicantName"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Applicant Name</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.applicantName && <p className="text-red-500 text-sm">{errors.applicantName.message}</p>}
                </div>
              )}
            />
            <Controller
              name="contactNumber"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Contact Number</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>}
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input type="email" {...field} className="p-2 border rounded w-full" />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
              )}
            />
            <Controller
              name="propertyAddress"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Property Address</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.propertyAddress && <p className="text-red-500 text-sm">{errors.propertyAddress.message}</p>}
                </div>
              )}
            />
            <Controller
              name="plotNumber"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Plot Number</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.plotNumber && <p className="text-red-500 text-sm">{errors.plotNumber.message}</p>}
                </div>
              )}
            />
            {/* Add additional fields for project type, estimated cost, etc. */}
          </div>
        )}
        {page === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
            <Controller
              name="projectType"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Project Type</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.projectType && <p className="text-red-500 text-sm">{errors.projectType.message}</p>}
                </div>
              )}
            />
            <Controller
              name="estimatedCost"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Estimated Cost (INR)</label>
                  <input type="number" {...field} className="p-2 border rounded w-full" />
                  {errors.estimatedCost && <p className="text-red-500 text-sm">{errors.estimatedCost.message}</p>}
                </div>
              )}
            />
            {/* Add additional fields for case type, consultant info, etc. */}
          </div>
        )}
        {/* Add additional pages as needed */}
        
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
          {page < 2 ? (
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BuildingPermitForm;
