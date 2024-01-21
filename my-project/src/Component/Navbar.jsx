// Navbar.jsx
import React from "react";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar flex w-full justify-end items-end mb-4">
      <div className="border p-2 bg-blue-400 text-white rounded-md">
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
