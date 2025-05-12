
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow">
        {/* Header Section */}
        <div className="bg-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              About the Power Outage System
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about the system designed to streamline power outage reporting and management at Adama Science and Technology University.
            </p>
          </div>
        </div>

        {/* Purpose Section */}
        <div className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
              Our Purpose
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto">
              The ASTU Power Outage Reporting and Management System was developed to address the challenges of power outages across university campuses. Our goal is to provide a user-friendly platform for students, faculty, staff, and administrators to report outages, track their status, and ensure timely resolution, enhancing the reliability of power infrastructure at ASTU.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
              Key Features
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Outage Reporting</h3>
                <p className="mt-2 text-base sm:text-lg text-gray-600">
                  Easily report power outages with details such as location and description, accessible to all ASTU members.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Status Tracking</h3>
                <p className="mt-2 text-base sm:text-lg text-gray-600">
                  Track the progress of reported outages in real-time, with updates from the maintenance team.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Admin Dashboard</h3>
                <p className="mt-2 text-base sm:text-lg text-gray-600">
                  Administrators can manage reports, update statuses, and analyze outage data for improved decision-making.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Role-Based Access</h3>
                <p className="mt-2 text-base sm:text-lg text-gray-600">
                  Tailored access for students, faculty, staff, and administrators ensures secure and relevant functionality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
              Our Team
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto">
              This system was developed by an interdisciplinary team from ASTU’s Computer Science and Engineering (CSE), Electrical and Computer Engineering (ECE), and Power and Control Engineering (EPCE) departments. Their combined expertise in software development, electrical systems, and power engineering ensures a robust and efficient solution.
            </p>
          </div>
        </div>

        {/* Navigation Link */}
        <div className="py-4 text-center">
          <Link
            to="/"
            className="inline-block text-indigo-600 hover:underline text-base sm:text-lg font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;