import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const textBorderStyle = {
  textShadow: `
    -0.5px -0.5px 0 #888,
    0.5px -0.5px 0 #888,
    -0.5px 0.5px 0 #888,
    0.5px 0.5px 0 #888
  `,
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const isHomePage = location.pathname === "/homepage";

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="flex justify-between items-center px-8 py-4 bg-black text-purple-900 shadow-lg sticky top-0 z-50"
    >
      <div className="flex items-center space-x-8">
        <Link
          to="/"
          className={`text-4xl font-extrabold tracking-widest transition duration-300 transform hover:scale-110 px-3 py-1 border-2 rounded-md ${
            isActive("/") ? "text-purple-700 border-purple-700" : "text-purple-700 border-purple-700"
          }`}
          style={textBorderStyle}
        >
          TurboSim.ai 
        </Link>
        {user && (
          <>
            <Link
              to="/homepage"
              className={`transition duration-300 hover:underline hover:text-purple-700 ${
                isActive("/homepage") ? "text-purple-700  underline-offset-4 font-semibold" : "text-purple-700  underline-offset-4 font-semibold"
              }`}
              style={textBorderStyle}
            >
              Dashboard
            </Link>
            {isHomePage && user && user.email && (
              <>
                <Link
                  to="/feature1"
                  className={`transition duration-300 hover:underline hover:text-purple-700 ${
                    isActive("/feature1") ? "text-purple-700  underline-offset-4 font-semibold" : "text-purple-700  underline-offset-4 font-semibold"
                  }`}
                  style={textBorderStyle}
                >
                  Simulation Templates
                </Link>
                <Link
                  to="/feature2"
                  className={`transition duration-300 hover:underline hover:text-purple-700 ${
                    isActive("/feature2") ? "text-purple-700  underline-offset-4 font-semibold" : "text-purple-700  underline-offset-4 font-semibold"
                  }`}
                  style={textBorderStyle}
                >
                  Job Monitoring Dashboard
                </Link>
              </>
            )}
          </>
        )}
      </div>
      <div className="flex items-center space-x-8">
        {user ? (
          <>
            <span className="text-purple-700 font-semibold" style={{ textShadow: 'none' }}>Hello, {user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-purple-700 text-black font-bold py-2 px-5 rounded-lg shadow-lg hover:bg-purple-600 hover:scale-105 transition transform duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-purple-900 hover:bg-purple-800 text-purple-300 font-semibold py-2 px-5 rounded-lg shadow-lg transition transform duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-purple-900 hover:bg-purple-800 text-purple-300 font-semibold py-2 px-5 rounded-lg shadow-lg transition transform duration-300"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
