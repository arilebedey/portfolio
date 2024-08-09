import React from "react";
import "./About.css";
import ToysOutlinedIcon from "@mui/icons-material/ToysOutlined";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="line-right about-line-right"></div>
        <div className="about-title title">
          <div className="about-title-icon title-icon">
            <ToysOutlinedIcon fontSize="large" />
          </div>
          <div className="about-title-text title-text">About</div>
        </div>
        <article className="about-text">
          Frontend Developer with 6 years of commercial experience. Experienced
          in JavaScript, TypeScript and Ruby. Worked in startups, big techs and
          mid-sized companies both remotely and on-site. Specializing in
          designing and implementing high-performance, scalable, and
          maintainable web applications.
        </article>
        <div className="line-left about-line-left"></div>
      </div>
    </div>
  );
};

export default About;
