import React from 'react';

const ResetPassword = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset your Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your new Password below!
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="new-password" className="font-medium text-gray-700">New Password</label>
              <input id="new-password" name="new-password" type="password" required className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm mt-1" placeholder="New Password" />
            </div>
            <div className="pt-4">
              <label htmlFor="confirm-password" className="font-medium text-gray-700">Confirm Password</label>
              <input id="confirm-password" name="confirm-password" type="password" required className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm mt-1" placeholder="Confirm Password" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Submit
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
            <p className="text-gray-600">If you didn't request a Password Change, please ignore this Page.</p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
