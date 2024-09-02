// src/components/Navbar/Navbar.tsx

import React from "react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-links">
          <a href="project">PROJECT</a>
          <a href="skills">SKILLS</a>
          <a href="design">DESIGN SPECIALTY</a>
          <a href="vision">VISION AND APPROACH</a>
          <a href="about">ABOUT</a>
        </div>
      </div>
    </div>
  );
};
