import React from "react";

export default function Feature2() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16 p-8 bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center max-w-4xl">Job Monitoring Dashboard - Quantum Computing</h1>
      <p className="mb-4 max-w-4xl text-center">
        Monitor the status and progress of your quantum computing jobs in real-time.
      </p>
      <ul className="list-disc list-inside space-y-2 max-w-4xl">
        <li><strong>Job Queue:</strong> View pending, running, and completed quantum jobs.</li>
        <li><strong>Resource Usage:</strong> Track qubit utilization and error rates.</li>
        <li><strong>Notifications:</strong> Receive alerts on job completion or errors.</li>
      </ul>
      <p className="mt-6 max-w-4xl text-center">
        Stay informed about your quantum simulations and optimize resource allocation.
      </p>
      <button className="mt-8 bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300">
        More...
      </button>
    </div>
  );
}
