import { useLocation, useNavigate } from 'react-router-dom';

const ApplicationSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { applicantName = 'Applicant', trackingNo = '00000', jobTitle = 'the position' } = state || {};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="text-green-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Congratulations!</h1>
        <p className="text-lg text-gray-600 mb-6">Your Online Application Submitted Successfully!</p>
        
        <div className="text-left bg-gray-50 p-4 rounded-md mb-6">
          <p className="mb-2"><span className="font-semibold">Mr/Mrs</span>: {applicantName}</p>
          <p className="mb-2"><span className="font-semibold">Your Tracking No</span>: {trackingNo}</p>
          <p className="mb-2"><span className="font-semibold">Post</span>: {jobTitle}</p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <span className="font-medium">Note:</span> Please preserve the Tracking No. & NID No. to download the applicant's copy and for further procedures.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back to Job Listings
        </button>
      </div>
    </div>
  );
};

export default ApplicationSuccess;