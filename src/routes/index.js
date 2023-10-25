import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Completeprofile from "./pages/Completeprofile/Completeprofile";
import Otpcode from "./pages/Otpcode/Otpcode";
export const RoutedContent = () => {
  return (
    <Routes>
      {/* pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/completeprofile" element={<Completeprofile />} />
      <Route path="/otpcode" element={<Otpcode />} />
    </Routes>
  );
};
