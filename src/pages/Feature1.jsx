import React from "react";

export default function Feature1() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Simulation Templates - HPC Examples</h1>
      <p className="mb-4">
        This page provides pre-configured templates for High Performance Computing (HPC) simulations.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Weather Forecasting:</strong> Simulate atmospheric conditions to predict weather patterns.</li>
        <li><strong>Fluid Dynamics:</strong> Model airflow over aircraft wings or water flow in pipes.</li>
        <li><strong>Molecular Dynamics:</strong> Study interactions of atoms and molecules in materials science.</li>
      </ul>
      <p className="mt-6">
        Select a template to quickly start your HPC simulation without configuring all parameters manually.
      </p>
    </div>
  );
}
