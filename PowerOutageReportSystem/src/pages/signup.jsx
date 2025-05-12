import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Footer from './Footer';
import Footer from './footer';
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: 'Student',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    id: '',
    department: '',
    office: '',
    roleSpecification: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (['Student', 'Faculty', 'Staff', 'Administrator'].includes(formData.role) && !formData.id)
      newErrors.id = `${formData.role} ID is required`;
    if (['Student', 'Faculty'].includes(formData.role) && !formData.department)
      newErrors.department = 'Department is required';
    if (formData.role === 'Staff' && !formData.office) newErrors.office = 'Office is required';
    if (formData.role === 'Administrator' && !formData.roleSpecification)
      newErrors.roleSpecification = 'Role specification is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Signup Data:', formData);
    alert('Signup successful!'); // Placeholder for API call
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg sm:max-w-xl bg-white p-8 sm:p-10 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
            Sign Up
          </h2>
          <div className="space-y-8">
            {/* Role Selection */}
            <div>
              <label className="block text-base sm:text-lg font-semibold text-gray-700">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
              >
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Staff">Staff</option>
                <option value="Administrator">Administrator</option>
              </select>
              {errors.role && <p className="mt-2 text-base text-red-600">{errors.role}</p>}
            </div>

            {/* Name */}
            <div>
              <label className="block text-base sm:text-lg font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
                placeholder="Enter your full name"
              />
              {errors.name && <p className="mt-2 text-base text-red-600">{errors.name}</p>}
            </div>

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

            {/* Confirm Password */}
            <div>
              <label className="block text-base sm:text-lg font-semibold text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="mt-2 text-base text-red-600">{errors.confirmPassword}</p>}
            </div>

            {/* Role-Specific Fields */}
            {['Student', 'Faculty', 'Staff', 'Administrator'].includes(formData.role) && (
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-700">
                  {formData.role} ID
                </label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
                  placeholder={`Enter your ${formData.role} ID`}
                />
                {errors.id && <p className="mt-2 text-base text-red-600">{errors.id}</p>}
              </div>
            )}

            {['Student', 'Faculty'].includes(formData.role) && (
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-700">Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
                >
                  <option value="">Select Department</option>
                  <option value="CSE">Computer Science and Engineering</option>
                  <option value="ECE">Electrical and Computer Engineering</option>
                  <option value="EPCE">Power and Control Engineering</option>
                  <option value="Other">Other</option>
                </select>
                {errors.department && <p className="mt-2 text-base text-red-600">{errors.department}</p>}
              </div>
            )}

            {formData.role === 'Staff' && (
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-700">Office</label>
                <input
                  type="text"
                  name="office"
                  value={formData.office}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
                  placeholder="Enter your office (e.g., Library, Admin)"
                />
                {errors.office && <p className="mt-2 text-base text-red-600">{errors.office}</p>}
              </div>
            )}

            {formData.role === 'Administrator' && (
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-700">Role Specification</label>
                <select
                  name="roleSpecification"
                  value={formData.roleSpecification}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
                >
                  <option value="">Select Role</option>
                  <option value="Maintenance Team">Maintenance Team</option>
                  <option value="Facility Manager">Facility Manager</option>
                  <option value="Other">Other</option>
                </select>
                {errors.roleSpecification && <p className="mt-2 text-base text-red-600">{errors.roleSpecification}</p>}
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white py-3 sm:py-4 px-4 rounded-md text-lg sm:text-xl font-bold hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>

            {/* Navigation Links */}
            <div className="text-center text-base sm:text-lg text-gray-600 space-y-2">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="text-indigo-600 hover:underline">
                  Log In
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

export default Signup;