import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import PersonalityExams from "../pages/PersonalityExams";
import OAuthRedirect from "./OAuthRedirect";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/personality-exams" element={<PersonalityExams />} />
      <Route path="/oauth2-redirect" element={<OAuthRedirect />} />
    </Routes>
  );
}

export default RouterConfig;
