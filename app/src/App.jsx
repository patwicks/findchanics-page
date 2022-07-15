import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//local imports
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import UnknownPage from "./pages/UnknownPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/*" element={<UnknownPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
