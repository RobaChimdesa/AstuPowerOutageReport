
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Signin Data:', formData);
    alert('Signin successful!'); // Placeholder for API call
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg sm:max-w-xl bg-white p-8 sm:p-10 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
            Sign In
          </h2>
          <div className="space-y-8">
            {/* Email */}
            <div>
              <label className="block text-base sm:text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
                placeholder="Enter your email"
              />
              {errors.email && <p className="mt-2 text-base text-red-600">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-base sm:text-lg font-semibold text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
                placeholder="Enter your password"
              />
              {errors.password && <p className="mt-2 text-base text-red-600">{errors.password}</p>}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white py-3 sm:py-4 px-4 rounded-md text-lg sm:text-xl font-bold hover:bg-indigo-700 transition"
            >
              Sign In
            </button>

            {/* Navigation Links */}
            <div className="text-center text-base sm:text-lg text-gray-600 space-y-2">
              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="text-indigo-600 hover:underline">
                  Sign Up
                </Link>
              </p>
              <p>
                <Link to="/" className="text-indigo-600 hover:underline">
                  Back to Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;