import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema for phone number and verification code
const verificationSchema = yup.object().shape({
  phoneNumber: yup.string().required('Phone number is required').matches(/^[0-9]{10}$/, 'Must be a valid phone number'),
  verificationCode: yup.string().when('isVerified', {
    is: true,
    then: yup.string().required('Verification code is required'),
  }),
});

// Validation schema for document request
const documentRequestSchema = yup.object().shape({
  documentType: yup.string().required('Document Type is required'),
  documentDetails: yup.string().required('Document Details are required'),
});

type VerificationFormData = yup.InferType<typeof verificationSchema>;
type DocumentRequestFormData = yup.InferType<typeof documentRequestSchema>;

const DownloadDocs: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [page, setPage] = useState(1);

  const {
    control: verificationControl,
    handleSubmit: handleVerificationSubmit,
    formState: { errors: verificationErrors },
    register: registerVerification,
    setValue: setValueVerification,
  } = useForm<VerificationFormData>({
    resolver: yupResolver(verificationSchema),
    mode: 'onBlur',
  });

  const {
    control: documentRequestControl,
    handleSubmit: handleDocumentRequestSubmit,
    formState: { errors: documentRequestErrors },
    register: registerDocumentRequest,
  } = useForm<DocumentRequestFormData>({
    resolver: yupResolver(documentRequestSchema),
    mode: 'onBlur',
  });

  const onVerificationSubmit = (data: VerificationFormData) => {
    // Simulate API call to verify phone number and send verification code
    console.log('Phone number:', data.phoneNumber);
    // Set isVerified to true after successful verification
    setIsVerified(true);
    setPage(2);
  };

  const onDocumentRequestSubmit = (data: DocumentRequestFormData) => {
    console.log('Document Request Data:', data);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Request Your Documents</h1>
      <form onSubmit={isVerified ? handleDocumentRequestSubmit(onDocumentRequestSubmit) : handleVerificationSubmit(onVerificationSubmit)}>
        {page === 1 && !isVerified && (
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2 border-black pb-2">Phone Number Verification</h2>
            <div className='flex flex-wrap'>
              <Controller
                name="phoneNumber"
                control={verificationControl}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Phone Number</label>
                    <input type="text" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {verificationErrors.phoneNumber && <p className="text-red-500 text-sm">{verificationErrors.phoneNumber.message}</p>}
                  </div>
                )}
              />
              <div className="mb-4 w-full">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Send Verification Code
                </button>
              </div>
            </div>
          </div>
        )}

        {page === 2 && isVerified && (
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2 border-black pb-2">Document Request</h2>
            <div className='flex flex-wrap'>
              <Controller
                name="documentType"
                control={documentRequestControl}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Document Type</label>
                    <input type="text" {...field} className="p-2 border border-gray-400 rounded w-full" />
                    {documentRequestErrors.documentType && <p className="text-red-500 text-sm">{documentRequestErrors.documentType.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="documentDetails"
                control={documentRequestControl}
                render={({ field }) => (
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Document Details</label>
                    <textarea {...field} className="p-2 border border-gray-400 rounded w-full h-24" />
                    {documentRequestErrors.documentDetails && <p className="text-red-500 text-sm">{documentRequestErrors.documentDetails.message}</p>}
                  </div>
                )}
              />
              <div className="mb-4 w-full">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Request Document
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default DownloadDocs;
