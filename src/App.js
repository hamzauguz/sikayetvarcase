import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
