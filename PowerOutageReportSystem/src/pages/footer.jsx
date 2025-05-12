import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-sm sm:text-base">
          © 2025 ASTU Power Outage System. All rights reserved.
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Contact:{' '}
          <a href="mailto:support@astu.edu.et" className="underline hover:text-indigo-200">
            support@astu.edu.et
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;