// src/App.jsx
import React from "react";
import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Sidebar-component/Dashboard";
import Immigration from "./Sidebar-component/Immigration";
import Services from "./Sidebar-component/Services";
import Users from "./Sidebar-component/Users";
import "./App.css";

function App() {
  return (
    <div className="app-container ">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        <div className="justify-end items-end p-5">
          <Home />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/immigration" element={<Immigration />} />
            <Route path="/services" element={<Services />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
