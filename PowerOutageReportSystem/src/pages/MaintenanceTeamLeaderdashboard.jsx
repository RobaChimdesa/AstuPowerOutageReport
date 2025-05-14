import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';

const TeamLeaderDashboard = () => {
  const navigate = useNavigate();
  // Mock user state (replace with auth context in production)
  const [user] = useState({
    role: 'Administrator',
    roleSpecification: 'Maintenance Team',
    name: 'Tesfaye Kebede',
  });

  // Mock reports data (replace with backend API call)
  const [reports] = useState([
    {
      report_id: '#RPT001',
      location: 'Lecture Hall B, CSE Building',
      description: 'No power since 10 AM, affecting classes.',
      urgency: 'Emergency',
      status: 'Pending',
      assigned_to: null,
    },
    {
      report_id: '#RPT002',
      location: 'Library, Main Campus',
      description: 'Lights flickering in study area.',
      urgency: 'Non-Emergency',
      status: 'In Progress',
      assigned_to: 'Technician A',
    },
  ]);

  // Mock technicians (replace with backend data)
  const technicians = ['Technician A', 'Technician B', 'Technician C'];

  // Mock notifications (replace with backend API call)
  const [notifications] = useState([
    { id: 1, message: 'New emergency report #RPT001 received.', timestamp: '2025-05-12 10:05 AM' },
    { id: 2, message: 'Report #RPT002 assigned to Technician A.', timestamp: '2025-05-12 09:30 AM' },
  ]);

  const handleAssignTask = (reportId, technician) => {
    console.log(`Assigned ${reportId} to ${technician}`);
    alert(`Assigned ${reportId} to ${technician}!`);
    // Update report status to "In Progress" and assigned_to in backend
  };

  const handleMarkResolved = (reportId) => {
    console.log(`Marked ${reportId} as Resolved`);
    alert(`Marked ${reportId} as Resolved! Report sent to Administrator.`);
    // Update report status to "Resolved" in backend and notify admin
  };

  const handleLogout = () => {
    // Placeholder for logout logic
    navigate('/signin');
  };

  const sidebarLinks = [
    { to: '/team-leader-dashboard', label: 'View Reports' },
    { to: '/team-leader-dashboard', label: 'Assign Tasks' }, // Placeholder, same route for now
    { to: '/notifications', label: 'Notifications' },
    { to: '/profile', label: 'Profile' },
    { to: '/about', label: 'About' },
    { action: handleLogout, label: 'Logout' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-indigo-600 text-white p-6 hidden md:block">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Maintenance Team Leader</h2>
          <nav className="space-y-2">
            {sidebarLinks.map((link, index) =>
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

        {/* Mobile Sidebar */}
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
            {sidebarLinks.map((link, index) =>
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
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Welcome, {user.name}!
            </h2>

            {/* Notifications */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Notifications</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {notifications.length > 0 ? (
                  <ul className="space-y-4">
                    {notifications.map((note) => (
                      <li key={note.id} className="text-base sm:text-lg text-gray-600">
                        <span className="font-semibold">{note.message}</span> - {note.timestamp}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base sm:text-lg text-gray-600">No new notifications.</p>
                )}
              </div>
            </div>

            {/* Reports */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Assigned Reports</h3>
              <div className="space-y-6">
                {reports.map((report) => (
                  <div
                    key={report.report_id}
                    className={`bg-white p-6 rounded-lg shadow-md ${
                      report.urgency === 'Emergency' ? 'border-l-4 border-red-600' : ''
                    }`}
                  >
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                      {report.report_id}: {report.location}
                    </h4>
                    <p className="mt-2 text-base sm:text-lg text-gray-600">{report.description}</p>
                    <p className="mt-2 text-base sm:text-lg text-gray-600">
                      <span className="font-semibold">Urgency:</span> {report.urgency}
                    </p>
                    <p className="mt-2 text-base sm:text-lg text-gray-600">
                      <span className="font-semibold">Status:</span> {report.status}
                    </p>
                    <p className="mt-2 text-base sm:text-lg text-gray-600">
                      <span className="font-semibold">Assigned To:</span>{' '}
                      {report.assigned_to || 'Unassigned'}
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <select
                        onChange={(e) => handleAssignTask(report.report_id, e.target.value)}
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg py-2 px-3"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Assign Technician
                        </option>
                        {technicians.map((tech) => (
                          <option key={tech} value={tech}>
                            {tech}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => handleMarkResolved(report.report_id)}
                        className="bg-indigo-600 text-white py-2 px-4 rounded-md text-base sm:text-lg font-semibold hover:bg-indigo-700 transition"
                      >
                        Mark as Resolved
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TeamLeaderDashboard;
