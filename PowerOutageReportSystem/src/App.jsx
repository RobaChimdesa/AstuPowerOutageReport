
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage';
import Signup from './pages/signup';
import Signin from './pages/signin';
import AdminLogin from './pages/AdminLogin';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import TeamLeaderDashboard from './pages/MaintenanceTeamLeaderdashboard';

// Placeholder components with responsive styling
const OutageReport = () => (
  <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Report Power Outage</h2>
    <p className="mt-4 text-base sm:text-lg text-gray-600">Outage reporting form will be implemented here.</p>
  </div>
);

const OutageStatus = () => (
  <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Outage Status</h2>
    <p className="mt-4 text-base sm:text-lg text-gray-600">Outage status tracking will be implemented here.</p>
  </div>
);

const Analytics = () => (
  <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Analytics</h2>
    <p className="mt-4 text-base sm:text-lg text-gray-600">Data visualizations will be implemented here.</p>
  </div>
);

const Notifications = () => (
  <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifications</h2>
    <p className="mt-4 text-base sm:text-lg text-gray-600">Notification list will be implemented here.</p>
  </div>
);

const UserProfile = () => (
  <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">User Profile</h2>
    <p className="mt-4 text-base sm:text-lg text-gray-600">User profile management will be implemented here.</p>
  </div>
);

const ManageReports = () => (
  <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Manage Reports</h2>
    <p className="mt-4 text-base sm:text-lg text-gray-600">Outage report management will be implemented here.</p>
  </div>
);

const NotFound = () => (
  <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">404 - Page Not Found</h2>
    <p className="mt-4 text-base sm:text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
    <Link
      to="/"
      className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 mt-4 text-base sm:text-lg"
    >
      Return to Home
    </Link>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/report" element={<OutageReport />} />
          <Route path="/status" element={<OutageStatus />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team-leader-dashboard" element={<TeamLeaderDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/manage-reports" element={<ManageReports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;