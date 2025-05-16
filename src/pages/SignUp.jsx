import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Sign up failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 text-white">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-700 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-gray-700 focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
}


