import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema using Yup
const schema = yup.object().shape({
  deceasedName: yup.string().required('Deceased Name is required'),
  dateOfDeath: yup.date().required('Date of Death is required').max(new Date(), 'Date of Death cannot be in the future'),
  placeOfDeath: yup.string().required('Place of Death is required'),
  ageAtDeath: yup.number().required('Age at Death is required').positive('Age must be a positive number'),
  causeOfDeath: yup.string().required('Cause of Death is required'),
  informantName: yup.string().required('Informant Name is required'),
  informantRelation: yup.string().required('Relation to Deceased is required'),
  informantContact: yup.string().required('Informant Contact is required').matches(/^[0-9]{10}$/, 'Must be a valid phone number'),
  informantAddress: yup.string().required('Informant Address is required'),
  documents: yup.mixed().required('Documents are required').test('fileSize', 'File size is too large', (value) => value && value.size <= 10485760), // Limit file size to 10MB
});

type FormData = yup.InferType<typeof schema>;

const DeathCertificateForm: React.FC = () => {
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

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Application for Death Certificate</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-black pb-2">Deceased Information</h2>
          <div className='flex justify-between'>
            <Controller
              name="deceasedName"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Deceased Name</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.deceasedName && <p className="text-red-500 text-sm">{errors.deceasedName.message}</p>}
                </div>
              )}
            />
            <Controller
              name="dateOfDeath"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Date of Death</label>
                  <input type="date" {...field} className="p-2 border rounded w-full" />
                  {errors.dateOfDeath && <p className="text-red-500 text-sm">{errors.dateOfDeath.message}</p>}
                </div>
              )}
            />
            <Controller
              name="placeOfDeath"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Place of Death</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.placeOfDeath && <p className="text-red-500 text-sm">{errors.placeOfDeath.message}</p>}
                </div>
              )}
            />
            <Controller
              name="ageAtDeath"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Age at Death</label>
                  <input type="number" {...field} className="p-2 border rounded w-full" />
                  {errors.ageAtDeath && <p className="text-red-500 text-sm">{errors.ageAtDeath.message}</p>}
                </div>
              )}
            />
            <Controller
              name="causeOfDeath"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Cause of Death</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.causeOfDeath && <p className="text-red-500 text-sm">{errors.causeOfDeath.message}</p>}
                </div>
              )}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-black pb-2">Informant Information</h2>
          <div className='flex justify-between'>
            <Controller
              name="informantName"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Informant's Name</label>
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
                  <label className="block text-sm font-medium mb-1">Relation to Deceased</label>
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
                  <label className="block text-sm font-medium mb-1">Informant's Contact Number</label>
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
                  <label className="block text-sm font-medium mb-1">Informant's Address</label>
                  <input type="text" {...field} className="p-2 border rounded w-full" />
                  {errors.informantAddress && <p className="text-red-500 text-sm">{errors.informantAddress.message}</p>}
                </div>
              )}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-black pb-2">Upload Documents</h2>
          <div className="mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Upload Supporting Documents</label>
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                {...register('documents')}
                className="p-2 border rounded w-full"
              />
              {errors.documents && <p className="text-red-500 text-sm">{errors.documents.message}</p>}

            </div>
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

export default DeathCertificateForm;
