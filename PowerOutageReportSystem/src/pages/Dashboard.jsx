
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';

const Dashboard = () => {
  const navigate = useNavigate();
  // Mock user state (replace with actual authentication context in production)
  const [user, setUser] = useState({
    role: 'Student', // Change to 'Faculty', 'Staff', or 'Administrator' for testing
    name: 'John Doe',
  });

  const handleLogout = () => {
    // Placeholder for logout logic (e.g., clear token, session)
    setUser(null);
    navigate('/signin');
  };

  // Role-specific sidebar links
  const sidebarLinks = {
    Student: [
      { to: '/report', label: 'Report Outage' },
      { to: '/status', label: 'Track Status' },
      { to: '/profile', label: 'Profile' },
      { to: '/notifications', label: 'Notifications' },
      { to: '/about', label: 'About' },
      { action: handleLogout, label: 'Logout' },
    ],
    Faculty: [
      { to: '/report', label: 'Report Outage' },
      { to: '/status', label: 'Track Status' },
      { to: '/profile', label: 'Profile' },
      { to: '/notifications', label: 'Notifications' },
      { to: '/about', label: 'About' },
      { action: handleLogout, label: 'Logout' },
    ],
    Staff: [
      { to: '/report', label: 'Report Outage' },
      { to: '/status', label: 'Track Status' },
      { to: '/profile', label: 'Profile' },
      { to: '/notifications', label: 'Notifications' },
      { to: '/about', label: 'About' },
      { action: handleLogout, label: 'Logout' },
    ],
    Administrator: [
      { to: '/dashboard', label: 'Overview' },
      { to: '/manage-reports', label: 'Manage Reports' },
      { to: '/analytics', label: 'Analytics' },
      { to: '/notifications', label: 'Notifications' },
      { to: '/profile', label: 'Profile' },
      { to: '/about', label: 'About' },
      { action: handleLogout, label: 'Logout' },
    ],
  };

  // Role-specific content
  const renderContent = () => {
    switch (user.role) {
      case 'Student':
      case 'Faculty':
      case 'Staff':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Welcome, {user.name}!
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Use the sidebar to report a power outage, track existing reports, or manage your profile.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/report"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md text-base sm:text-lg font-semibold hover:bg-indigo-700 transition"
              >
                Report Outage
              </Link>
              <Link
                to="/status"
                className="bg-gray-600 text-white py-2 px-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-700 transition"
              >
                Track Status
              </Link>
            </div>
          </div>
        );
      case 'Administrator':
        return (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Manage power outage reports, view analytics, and monitor notifications from the sidebar.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Recent Reports</h3>
                <p className="mt-2 text-base sm:text-lg text-gray-600">
                  View and update the latest outage reports submitted by users.
                </p>
                <Link
                  to="/manage-reports"
                  className="mt-4 inline-block text-indigo-600 hover:underline text-base sm:text-lg"
                >
                  Manage Reports
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Analytics</h3>
                <p className="mt-2 text-base sm:text-lg text-gray-600">
                  Analyze outage trends and system performance.
                </p>
                <Link
                  to="/analytics"
                  className="mt-4 inline-block text-indigo-600 hover:underline text-base sm:text-lg"
                >
                  View Analytics
                </Link>
              </div>
            </div>
          </div>
        );
      default:
        return <p className="text-base sm:text-lg text-gray-600">Invalid role. Please log in again.</p>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-indigo-600 text-white p-6 hidden md:block">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">{user.role} Dashboard</h2>
          <nav className="space-y-2">
            {sidebarLinks[user.role].map((link, index) =>
              link.action ? (
                <button
                  key={index}
                  onClick={link.action}
                  className="w-full text-left py-2 px-4 rounded-md text-base sm:text-lg hover:bg-indigo-700 transition"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  className="block py-2 px-4 rounded-md text-base sm:text-lg hover:bg-indigo-700 transition"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </aside>

        {/* Mobile Sidebar (Hamburger Menu) */}
        <div className="md:hidden bg-indigo-600 text-white p-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav id="mobile-menu" className="hidden mt-4 space-y-2">
            {sidebarLinks[user.role].map((link, index) =>
              link.action ? (
                <button
                  key={index}
                  onClick={link.action}
                  className="w-full text-left py-2 px-4 rounded-md text-base sm:text-lg hover:bg-indigo-700 transition"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  className="block py-2 px-4 rounded-md text-base sm:text-lg hover:bg-indigo-700 transition"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;