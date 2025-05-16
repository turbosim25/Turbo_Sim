import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to your Dashboard</h1>
        <p className="text-lg text-gray-400">Logged in as: <span className="text-white">{user.email}</span></p>
      </div>
    </div>
  );
}



