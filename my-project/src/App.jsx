// src/App.jsx
import React from "react";
import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
