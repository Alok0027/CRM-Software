import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmEmail = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Confirm your Email
          </h2>
          <p className="mt-4 text-center text-sm text-gray-600">
            We've sent a verification link to your email address. Please click the link to verify your email.
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            If you cannot find the email, please check your spam folder. It might have been accidentally marked as spam.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
          >
            Send new Verification Link
          </button>
        </div>
        <div className="text-sm text-center">
            <p className="text-gray-600">Already confirmed? <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
