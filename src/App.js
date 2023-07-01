import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userControl = async () => {
      const token = await localStorage.getItem("token");

      if (token === null) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };
    userControl();
  }, []);

  const Dashboard = () => {
    return (
      <>
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to={"/home"} replace={true} />} />
          <Route exact element={<PrivateRoutes tokenstate={isLoggedIn} />}>
            <Route exact path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
