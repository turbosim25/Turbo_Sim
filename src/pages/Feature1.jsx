import React from "react";

export default function Feature1() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16 p-8 bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center max-w-4xl">Simulation Templates - HPC Examples</h1>
      <p className="mb-4 max-w-4xl text-center">
        This page provides pre-configured templates for High Performance Computing (HPC) simulations.
      </p>
      <ul className="list-disc list-inside space-y-2 max-w-4xl">
        <li><strong>Weather Forecasting:</strong> Simulate atmospheric conditions to predict weather patterns.</li>
        <li><strong>Fluid Dynamics:</strong> Model airflow over aircraft wings or water flow in pipes.</li>
        <li><strong>Molecular Dynamics:</strong> Study interactions of atoms and molecules in materials science.</li>
      </ul>
      <p className="mt-6 max-w-4xl text-center">
        Select a template to quickly start your HPC simulation without configuring all parameters manually.
      </p>
      
      <button className="mt-8 bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300">
        More...
      </button>
    </div>
  );
}
