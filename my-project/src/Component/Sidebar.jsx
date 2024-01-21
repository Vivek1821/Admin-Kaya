// src/components/Sidebar.jsx
import React from "react";
import Dashboard from "../Sidebar-component/Dashboard";
import Users from "../Sidebar-component/Users";
import Services from "../Sidebar-component/Services";
import Immigration from "../Sidebar-component/Immigration";
import logo from "../assets/Artboard.jpg";

const Sidebar = () => {
  return (
    <div className="p-6">
      <div className="mb-20 flex">
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-lg font-bold text-white ">KAYA Immigration</h1>
      </div>
      <div className="space-y-10">
        <div className="dashboard-container  border-white p-2 border rounded-md">
          <Dashboard />
        </div>
        <div className="users-container border-white p-2 border rounded-md">
          <Users />
        </div>
        <div className="services-container border-white p-2 border rounded-md">
          <Services />
        </div>
        <div className="users-container border-white p-2 border rounded-md">
          <Immigration />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
