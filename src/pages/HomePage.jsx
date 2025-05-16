import React from "react";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-6 animate-fadeIn"
      style={{
        backgroundImage: "url('/images/homepage-background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Content */}
      <div
        className="relative z-10 text-white text-center"
        style={{
          textShadow:
            "0 0 8px black, 0 0 15px black, 0 0 20px black, 0 0 30px black, 0 0 40px black",
        }}
      >
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg animate-pulse">
          Welcome To TurboSim.AI!
        </h1>
        <p className="text-xl max-w-xl mx-auto mb-8 animate-fadeInUp">
          This is your dashboard where you can manage your HPC and Quantum simulations in the cloud.
        </p>
        <p className="text-lg max-w-xl mx-auto mb-8 animate-fadeInUp delay-200">
          Use the navigation bar to explore features, start new simulations, and monitor your jobs.
        </p>
      </div>
    </div>
  );
}
