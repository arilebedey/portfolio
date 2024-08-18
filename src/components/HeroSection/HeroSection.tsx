// src/components/HeroSection/HeroSection.tsx

import React, { useState } from "react";
import "./HeroSection.css";
import dolphinImage from "./dolphin2.webp";

const HeroSection: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        if (type === "email") {
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 2000);
        } else if (type === "phone") {
          setPhoneCopied(true);
          setTimeout(() => setPhoneCopied(false), 2000);
        }
      },
      (err) => {
        console.error("Failed to copy: ", err);
      },
    );
  };

  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-left">
          <div className="line-left hero-line"></div>
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
            <div className="hero-description">
              <span className="hero-description-top">FRONTEND DEVELOPER</span>
              <span className="hero-description-bottom">PORTFOLIO WEBSITE</span>
            </div>
          </header>
          <div className="contacts">
            <div className="contact-item">
              <button
                onClick={() => copyToClipboard("google@mail.ru", "email")}
              >
                google@mail.ru
              </button>
              {emailCopied && <span className="copied-text">Copied!</span>}
            </div>
            <div className="contact-item 2">
              <button onClick={() => copyToClipboard("+8888888888", "phone")}>
                +888-888-88-88
              </button>
              {phoneCopied && <span className="copied-text">Copied!</span>}
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="line-right first-line"></div>
          <div className="date">
            <span className="date-color-1">20</span>
            <span className="date-color-2">24</span>
          </div>
          <figure className="bio-card">
            <div className="bio-image-container">
              <div className="color-image-filter"></div>
              <img className="bio-image" src={dolphinImage} alt="A Dolphin" />
              <div className="bio-image-name-container">
                <figcaption className="bio-image-name">GOLDEN DEV</figcaption>
              </div>
              <div className="bio-image-name-container-copy">
                <figcaption className="bio-image-name">GOLDEN DEV</figcaption>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
