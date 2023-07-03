import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Students from "./pages/Students";

import PrivateRoutes from "./utils/PrivateRoutes";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

import "./App.css";

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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to={"/home"} replace={true} />} />
          <Route exact element={<PrivateRoutes tokenstate={isLoggedIn} />}>
            <Route
              exact
              path="/home"
              element={
                <Sidebar
                  children={
                    <>
                      <Header />
                      <Home />
                    </>
                  }
                />
              }
            />
            <Route
              path="/students"
              element={
                <Sidebar
                  children={
                    <>
                      <Header />
                      <Students />
                    </>
                  }
                />
              }
            />
            <Route
              path="/settings"
              element={<Sidebar children={<Settings />} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
