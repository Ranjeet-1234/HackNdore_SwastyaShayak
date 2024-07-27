import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema using Yup
const schema = yup.object().shape({
  childName: yup.string().required('Child Name is required'),
  dateOfBirth: yup.date().required('Date of Birth is required').max(new Date(), 'Date of Birth cannot be in the future'),
  placeOfBirth: yup.string().required('Place of Birth is required'),
  gender: yup.string().required('Gender is required'),
  parentName: yup.string().required('Parent Name is required'),
  parentContact: yup.string().required('Parent Contact Number is required').matches(/^[0-9]{10}$/, 'Must be a valid phone number'),
  parentAddress: yup.string().required('Parent Address is required'),
  informantName: yup.string().required('Informant Name is required'),
  informantRelation: yup.string().required('Relation to Child is required'),
  informantContact: yup.string().required('Informant Contact is required').matches(/^[0-9]{10}$/, 'Must be a valid phone number'),
  informantAddress: yup.string().required('Informant Address is required'),
  documents: yup.mixed().required('Documents are required').test('fileSize', 'File size is too large', (value) => value && value.size <= 10485760), // Limit file size to 10MB
});

type FormData = yup.InferType<typeof schema>;

const BirthCertificateForm: React.FC = () => {
  const [page, setPage] = useState(1);
  
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  // Handle file change event
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setValue('documents', file);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Application for Birth Certificate</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {page === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Child Information</h2>
            <Controller
              name="childName"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Child Name</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.childName && <p className="text-red-500 text-sm">{errors.childName.message}</p>}
                </div>
              )}
            />
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Date of Birth</label>
                  <input type="date" {...field} className="p-2 border rounded w-full" />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
                </div>
              )}
            />
            <Controller
              name="placeOfBirth"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Place of Birth</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.placeOfBirth && <p className="text-red-500 text-sm">{errors.placeOfBirth.message}</p>}
                </div>
              )}
            />
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Gender</label>
                  <select {...field} className="p-2 border rounded w-full">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                </div>
              )}
            />
          </div>
        )}
        {page === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Parent and Informant Information</h2>
            <Controller
              name="parentName"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Parent Name</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName.message}</p>}
                </div>
              )}
            />
            <Controller
              name="parentContact"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Parent Contact Number</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.parentContact && <p className="text-red-500 text-sm">{errors.parentContact.message}</p>}
                </div>
              )}
            />
            <Controller
              name="parentAddress"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Parent Address</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.parentAddress && <p className="text-red-500 text-sm">{errors.parentAddress.message}</p>}
                </div>
              )}
            />
            <Controller
              name="informantName"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Informant Name</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.informantName && <p className="text-red-500 text-sm">{errors.informantName.message}</p>}
                </div>
              )}
            />
            <Controller
              name="informantRelation"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Relation to Child</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.informantRelation && <p className="text-red-500 text-sm">{errors.informantRelation.message}</p>}
                </div>
              )}
            />
            <Controller
              name="informantContact"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Informant Contact Number</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.informantContact && <p className="text-red-500 text-sm">{errors.informantContact.message}</p>}
                </div>
              )}
            />
            <Controller
              name="informantAddress"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Informant Address</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.informantAddress && <p className="text-red-500 text-sm">{errors.informantAddress.message}</p>}
                </div>
              )}
            />
          </div>
        )}
        {page === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Upload Supporting Documents</label>
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                {...register('documents')}
                className="p-2 border rounded w-full"
                onChange={handleFileChange}
              />
              {errors.documents && <p className="text-red-500 text-sm">{errors.documents.message}</p>}
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
          {page < 3 ? (
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

export default BirthCertificateForm;
