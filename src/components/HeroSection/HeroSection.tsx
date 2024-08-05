// src/components/HeroSection/HeroSection.tsx

import React from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className="line-left"></div>
        <header>
          <div className="hero-title">
            <div className="hero-title-top">
              <span className="hero-name">THE</span>
              <span className="hero-dash"> — </span>
            </div>
            <div className="hero-title-bottom">
              <span className="hero-name">FOLIO</span>
            </div>
          </div>
        </header>
      </div>
      <div className="hero-right">
        <div className="line-right"></div>
        <div className="date">
          <span className="date-color-1">20</span>
          <span className="date-color-2">24</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
