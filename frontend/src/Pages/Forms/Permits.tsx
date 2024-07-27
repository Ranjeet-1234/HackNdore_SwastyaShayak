import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema using Yup
const schema = yup.object().shape({
  landUse: yup.string().required('Land Use is required'),
  grossPlotArea: yup.number().required('Gross Plot Area is required').positive('Gross Plot Area must be positive'),
  netPlotArea: yup.number().required('Net Plot Area is required').positive('Net Plot Area must be positive'),
  roadWidth: yup.number().required('Road Width is required').positive('Road Width must be positive'),
  buildingUse: yup.string().required('Building Use is required'),
  typeOfDevelopment: yup.string().required('Type of Development is required'),
  proposedGroundCoverage: yup.number().required('Proposed Ground Coverage is required').positive('Ground Coverage must be positive'),
  buildingHeight: yup.number().required('Building Height is required').positive('Building Height must be positive'),
  provisionForDivyand: yup.string().required('Provision for Divyand is required'),
  additionalParkingType: yup.string().required('Additional Parking Type is required'),
  designCompliance: yup.string().required('Design Compliance is required'),
  electricLineDistanceCompliance: yup.string().required('Electric Line Distance Compliance is required'),
  mandatoryDocuments: yup.mixed().required('Mandatory Documents are required').test('fileSize', 'File size is too large', (value) => value && value.size <= 10485760), // Limit file size to 10MB
  cornerPlotFlag: yup.boolean().required('Corner Plot Flag is required'),
});

type FormData = yup.InferType<typeof schema>;

const BuildingPermitForm: React.FC = () => {
  const [page, setPage] = useState(1);

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Building Permit Application</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {page === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2 border-black pb-2">Building Information</h2>
            <div className='flex flex-wrap'>
              <Controller
                name="landUse"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full md:w-1/2">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Land Use</label>
                    <input type="text" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.landUse && <p className="text-red-500 text-sm">{errors.landUse.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="grossPlotArea"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full md:w-1/2">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Gross Plot Area (sq. meters)</label>
                   
                    <input type="number" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.grossPlotArea && <p className="text-red-500 text-sm">{errors.grossPlotArea.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="netPlotArea"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full md:w-1/2">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Net Plot Area (sq. meters)</label>
                    <input type="number" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.netPlotArea && <p className="text-red-500 text-sm">{errors.netPlotArea.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="roadWidth"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full md:w-1/2">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Road Width (meters)</label>
                    <input type="number" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.roadWidth && <p className="text-red-500 text-sm">{errors.roadWidth.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="buildingUse"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Building Use</label>
                    <input type="text" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.buildingUse && <p className="text-red-500 text-sm">{errors.buildingUse.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="typeOfDevelopment"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Type of Development</label>
                    <input type="text" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.typeOfDevelopment && <p className="text-red-500 text-sm">{errors.typeOfDevelopment.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="proposedGroundCoverage"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full md:w-1/2">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Proposed Ground Coverage (%)</label>
                    <input type="number" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.proposedGroundCoverage && <p className="text-red-500 text-sm">{errors.proposedGroundCoverage.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="buildingHeight"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full md:w-1/2">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Building Height (meters)</label>
                    <input type="number" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.buildingHeight && <p className="text-red-500 text-sm">{errors.buildingHeight.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="provisionForDivyand"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Provision for Divyand</label>
                    <input type="text" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.provisionForDivyand && <p className="text-red-500 text-sm">{errors.provisionForDivyand.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="additionalParkingType"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Additional Parking Type</label>
                    <input type="text" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.additionalParkingType && <p className="text-red-500 text-sm">{errors.additionalParkingType.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="designCompliance"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Design Compliance</label>
                    <input type="text" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.designCompliance && <p className="text-red-500 text-sm">{errors.designCompliance.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="electricLineDistanceCompliance"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Electric Line Distance Compliance</label>
                    <input type="text" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {errors.electricLineDistanceCompliance && <p className="text-red-500 text-sm">{errors.electricLineDistanceCompliance.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="cornerPlotFlag"
                control={control}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Corner Plot Flag</label>
                    <input type="checkbox" {...field} className="p-2 border border-gray-400 rounded" />
                    {errors.cornerPlotFlag && <p className="text-red-500 text-sm">{errors.cornerPlotFlag.message}</p>}
                  </div>
                )}
              />
            </div>
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-black pb-2">Upload Mandatory Documents</h2>
          <div className='flex flex-wrap'>
            <Controller
              name="mandatoryDocuments"
              control={control}
              render={({ field }) => (
                <div className="mb-4 w-full">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Upload Mandatory Documents (PDF, JPG, PNG)</label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    {...field}
                    className="p-2 border border-gray-400 rounded w-full"
                  />
                  {errors.mandatoryDocuments && <p className="text-red-500 text-sm">{errors.mandatoryDocuments.message}</p>}
                </div>
              )}
            />
          </div>
        </div>

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

export default BuildingPermitForm;
