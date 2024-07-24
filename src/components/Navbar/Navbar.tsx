// src/components/Navbar/Navbar.tsx

import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <a href="project">PROJECT</a>
      <a href="skills">SKILLS</a>
      <a href="design">DESIGN SPECIALTY</a>
      <a href="vision">VISION AND APPROACH</a>
      <a href="about">ABOUT</a>
    </div>
  );
};

export default Navbar;
