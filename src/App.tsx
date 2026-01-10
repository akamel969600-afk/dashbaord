import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Corporate Dashboard
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to your corporate project management dashboard.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/projects" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Projects</h2>
          <p className="text-gray-600">Manage your corporate projects and track progress.</p>
        </Link>
        
        <Link to="/issues" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Issues</h2>
          <p className="text-gray-600">Track and resolve project issues efficiently.</p>
        </Link>
        
        <Link to="/reports" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Reports</h2>
          <p className="text-gray-600">Generate comprehensive project reports.</p>
        </Link>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <h1 className="text-3xl font-bold mb-6">Projects</h1>
    <p>Project management functionality coming soon...</p>
    <Link to="/" className="text-blue-600 hover:underline">← Back to Dashboard</Link>
  </div>
);

const IssuesPage = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <h1 className="text-3xl font-bold mb-6">Issues</h1>
    <p>Issue tracking functionality coming soon...</p>
    <Link to="/" className="text-blue-600 hover:underline">← Back to Dashboard</Link>
  </div>
);

const ReportsPage = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <h1 className="text-3xl font-bold mb-6">Reports</h1>
    <p>Reporting functionality coming soon...</p>
    <Link to="/" className="text-blue-600 hover:underline">← Back to Dashboard</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
