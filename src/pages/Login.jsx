import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaMicrosoft } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
    if (email === 'admin@test.com' && password === 'password') {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      {}
      <h1 className="text-4xl font-medium text-gray-800 mb-2">CRM SAMPLE</h1>
      <p className="text-sm text-orange-500">
        Don’t have an account?{' '}
        <Link className="text-orange-500 font-medium mt-4" to="#">
          Get started free
        </Link>
      </p>

      {}
      <div className="mt-6 border border-orange-200 bg-orange-50 px-6 py-4 rounded text-center text-sm text-gray-600 w-3/4">
        <p className="font-medium">Login faster and safer to your account</p>
        <p className="text-sm mt-1">
          Next time we’ll remember how you’d like to sign in so you can skip entering an email.
          You can always go back to{' '}
          <span className="text-orange-500 font-medium cursor-pointer">classic login</span>.
        </p>
      </div>

      {}
      <div className="mt-12 flex items-center justify-between w-full max-w-4xl">
        {}
        <div className="w-5/12">
          <label className="block text-sm text-gray-700 mb-1">Email address</label>
          <input
            type="email"
            className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block text-sm text-gray-700 mb-1 mt-4">Password</label>
          <input
            type="password"
            className="w-full border rounded px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
      onClick={handleLogin}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded"
    >
      Sign In
    </button>
          {error && <p className="text-orange-500 text-sm mt-2 text-center">{error}</p>}
          <p className="text-xs text-orange-500 mt-3 text-center">
            Use <span className="font-medium">admin@test.com</span> and <span className="font-medium">password</span> to log in.
          </p>
        </div>

        {}
        <div className="relative h-48 flex items-center">
          <div className="h-full w-px bg-gray-200"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-400 font-medium">
            OR
          </div>
        </div>

        {}
        <div className="w-5/12 space-y-3">
          <button className="w-full flex items-center gap-3 justify-center border rounded py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200">
            <FcGoogle className="text-xl" /> Sign in with Google
          </button>
          <button className="w-full flex items-center gap-3 justify-center border rounded py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200">
            <FaMicrosoft className="text-orange-600 text-xl" /> Sign in with Microsoft
          </button>
          <button className="w-full flex items-center gap-3 justify-center border rounded py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200">
            <FaApple className="text-black text-xl" /> Sign in with Apple
          </button>
          
        </div>
      </div>

      {}
      <div className="mt-14 text-center text-sm text-gray-700 space-y-3">
        <p>
          Get a demo of our premium software or upgrade
          <br />
          your free account today by buying Starter
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/onboarding" className="border border-orange-500 text-orange-500 px-4 py-1 rounded hover:text-orange-700">
            Get a demo
          </Link>
          <Link to="/pricing" className="border border-orange-500 text-orange-500 px-4 py-1 rounded hover:text-orange-700">
            Buy Starter
          </Link>
        </div>
      </div>

      {}
      <div className="mt-10 text-xs text-gray-400 text-center">
        ©2025 Nexolve Technologies. All Rights Reserved.{' '}
        <a href="#" className="text-orange-500 underline">
          Privacy Policy
        </a>{' '}
        &nbsp;•&nbsp;
        <a href="#" className="text-orange-500 underline">
          Manage Cookies
        </a>
      </div>
    </div>
  );
};

export default Login;