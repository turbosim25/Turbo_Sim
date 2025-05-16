import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Feature1 from "./pages/Feature1";
import Feature2 from "./pages/Feature2";

import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./pages/Navbar";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/feature1" element={<PrivateRoute><Feature1 /></PrivateRoute>} />
        <Route path="/feature2" element={<PrivateRoute><Feature2 /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
