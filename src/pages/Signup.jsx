import React from 'react';
import { Link } from 'react-router-dom';

const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.021,35.596,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
  </svg>
);

const AppleIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.4,13.3c-0.3-1.4,0.8-2.8,2.2-3.2c-0.2-0.5-0.5-1-0.8-1.4c-1-1.2-2.3-2-3.8-2.1c-1.6-0.2-3.2,0.9-4.1,0.9 c-0.9,0-2.2-0.9-3.5-0.8c-1.6,0.1-3,1-4,2.2c-1.4,1.8-1.8,4.3-1.1,6.7c0.6,2,1.9,4,3.6,5.3c1.1,0.9,2.3,1.9,3.8,1.8 c1.4-0.1,2-0.7,3.9-0.7s2.5,0.7,3.9,0.7c1.5,0.1,2.7-0.8,3.7-1.8c1.3-1.2,2.1-2.8,2.3-4.4C20.2,15.6,19.2,14.2,17.4,13.3z M13.1,4.4c0.8-1,2.1-1.6,3.2-1.4c1.3,0.2,2.4,1.2,2.7,2.5c-0.1,0-0.1,0-0.2,0c-1.4,0-2.8,0.8-3.6,2.1c-0.8,1.1-2,1.8-3.2,1.6 c-1.3-0.2-2.4-1.2-2.7-2.5C12.4,5.5,12.6,4.8,13.1,4.4z"></path>
    </svg>
)

const Signup = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-medium text-gray-900">
            Create your Account!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please fill in your Details below.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="font-normal text-gray-700">Full Name</label>
              <input id="full-name" name="full-name" type="text" required className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm mt-1" placeholder="Your Full Name" />
            </div>
             <div className="pt-4">
              <label htmlFor="email-address" className="font-normal text-gray-700">Email Address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring--500 focus:border-orange-500 focus:z-10 sm:text-sm mt-1" placeholder="Your Email Address" />
            </div>
             <div className="pt-4">
              <label htmlFor="password" className="font-normal text-gray-700">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm mt-1" placeholder="Password" />
            </div>
             <div className="pt-4">
              <label htmlFor="confirm-password" className="font-normal text-gray-700">Confirm Password</label>
              <input id="confirm-password" name="confirm-password" type="password" required className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm mt-1" placeholder="Confirm Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I have read & agree to the <Link to="/terms" className="font-medium text-orange-600 hover:text-orange-500">Terms & Conditions</Link>
              </label>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Sign Up
            </button>
          </div>
          
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div>
             <button type="button" className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <GoogleIcon />
                Sign Up with Google
            </button>
          </div>
          <div>
             <button type="button" className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mt-3">
                <AppleIcon />
                Sign Up with Apple
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
            <p className="text-gray-600">Don't have an Account yet? <Link to="/signup" className="font-medium text-orange-600 hover:text-orange-500">Sign-Up here!</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
