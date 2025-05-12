import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-indigo-600 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-xl sm:text-2xl font-bold">
            ASTU Power Outage System
          </Link>
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/signup" className="text-white hover:text-indigo-200 transition text-sm lg:text-base">
              Sign Up
            </Link>
            <Link to="/signin" className="text-white hover:text-indigo-200 transition text-sm lg:text-base">
              Signin
            </Link>
            <Link to="/report" className="text-white hover:text-indigo-200 transition text-sm lg:text-base">
              Report Outage
            </Link>
            <Link to="/status" className="text-white hover:text-indigo-200 transition text-sm lg:text-base">
              Track Status
            </Link>
            <Link to="/about" className="text-white hover:text-indigo-200 transition text-sm lg:text-base">
              About
            </Link>
            <Link to="/admin-login" className="text-white hover:text-indigo-200 transition text-sm lg:text-base">
              Admin
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <Link
              to="/signup"
              className="text-white hover:text-indigo-200 transition text-base py-2"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-white hover:text-indigo-200 transition text-base py-2"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/report"
              className="text-white hover:text-indigo-200 transition text-base py-2"
              onClick={toggleMenu}
            >
              Report Outage
            </Link>
            <Link
              to="/status"
              className="text-white hover:text-indigo-200 transition text-base py-2"
              onClick={toggleMenu}
            >
              Track Status
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-indigo-200 transition text-base py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/admin-login"
              className="text-white hover:text-indigo-200 transition text-base py-2"
              onClick={toggleMenu}
            >
              Admin
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Power Outage Reporting & Management
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Efficiently report and track power outages across Adama Science and Technology University campuses.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/report"
                className="bg-indigo-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md text-base sm:text-lg font-semibold hover:bg-indigo-700 transition"
              >
                Report an Outage
              </Link>
              <Link
                to="/status"
                className="bg-gray-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-700 transition"
              >
                Track Outage Status
              </Link>
            </div>
          </div>
        </div>

        {/* System Overview Section */}
        <div className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
              About the System
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Developed by an interdisciplinary team from ASTU's Computer Science, Electrical, and Power Engineering departments, this system streamlines power outage reporting, tracking, and analysis.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Homepage;