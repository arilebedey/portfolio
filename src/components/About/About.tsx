import React from "react";
import "./About.css";

export const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-title">ABOUT</div>
      <article className="about-text">
        Frontend Developer with 6 years of commercial experience. Experienced in
        JavaScript, TypeScript and Ruby. Worked in startups, big techs and
        mid-sized companies both remotely and on-site. Specializing in designing
        and implementing high-performance, scalable, and maintainable web
        applications.
      </article>
      <div className="line-left line"></div>
    </div>
  );
};
