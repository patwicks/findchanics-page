import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//local imports
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
