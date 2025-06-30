import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage.jsx";
import HomePage from "./pages/homePage.jsx";
import SignUpPage from "./pages/signupPage.jsx";
import AdminHomePage from "./pages/adminHomePage.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right"/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/*" element={<HomePage />} />
          <Route path="/admin/*" element={<AdminHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
