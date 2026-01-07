import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Corporate Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to your corporate project management dashboard.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Projects</h2>
            <p className="text-gray-600">Manage your corporate projects and track progress.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Issues</h2>
            <p className="text-gray-600">Track and resolve project issues efficiently.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Reports</h2>
            <p className="text-gray-600">Generate comprehensive project reports.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
