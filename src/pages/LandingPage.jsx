import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-800 text-white">
      <Navbar />

      <section className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">HPC & Quantum Simulations in the Cloud</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          TurboSim.ai helps students, researchers, and enterprises run scalable simulations with zero infrastructure overhead.
        </p>
        <Link to="/signup" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg">
          Get Started
        </Link>
      </section>

      <section id="features" className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">No Hardware Setup</h3>
            <p className="text-gray-400">Launch simulations in one click with cloud-native environments.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Classical & Quantum</h3>
            <p className="text-gray-400">Run both traditional HPC jobs and quantum workloads (Qiskit, PennyLane).</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">For Education & Research</h3>
            <p className="text-gray-400">Built with academics and innovators in mind. Scalable, secure, and affordable.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} TurboSim.ai — All rights reserved.
      </footer>
    </div>
  );
}
