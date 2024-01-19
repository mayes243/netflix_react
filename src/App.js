import React from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import ChoosePlan from "./pages/ChoosePlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/choose-plan" element={<ChoosePlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
