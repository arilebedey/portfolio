import React from "react";
import "./Vision.css";
import wolfImage from "./wolf.png";
import fireImage from "./fire.png";
import faceImage from "./face.png";

const Vision: React.FC = () => {
  return (
    <div className="vision-container">
      <div className="images-container">
        <img src={wolfImage} alt="" className="wolf-image" />
        <img src={fireImage} alt="" className="fire-image" />
        <img src={faceImage} alt="" className="face-image" />
      </div>
      <div className="vision">
        <div className="line-left vision-line"></div>
        <div className="vision-title">Vision and approach</div>
        <div className="vision-details">
          <div className="reqs-and-res">
            <button className="vision-button">
              User Requirements and Research
            </button>
            <section className="vision-text-block">
              Understanding what business needs and giving them better solutions
              to
              <br />
              enhance the user experience,
              <br />I do the in-depth research and collect surveys
              <br />
              to provide an essential foundation for a better experience.
            </section>
          </div>
          <div className="technologies">
            <button className="vision-button">modern technologies</button>
            <section className="vision-text-block">
              I utilize the latest front-end technologies to craft efficient and
              engaging web
              <br />
              experiences. By exploring a variety of modern tools, I ensure high
              <br />
              performance, accessibility, and memorable UI for brands. This
              streamlined
              <br />
              approach helps in delivering optimized and impactful digital
              solutions.
            </section>
          </div>
          <div className="two-detail-blocks">
            <div className="wireframing">
              <button className="vision-button">wireframing</button>
              <section className="vision-text-block-double">
                Creating wireframes to define and plan the information hierarchy
                of their design for a website, app, or product. Designing of
                Low-Mid-High fidelity wireframes.
              </section>
            </div>
            <div className="implementation">
              <button className="vision-button">Implementation</button>
              <section className="vision-text-block-double">
                Backend team builds server side functionality first and I
                connect it with frontend components which will be provided by
                me.
              </section>
            </div>
          </div>
          <div className="testing">
            <button className="vision-button">testing</button>
            <section className="vision-text-block">
              Testing the user interface of a website or other product to make
              sure everything functions as it should and that users understand
              how to use the UI, testing the experience of the user and how the
              product or website makes the user feel.
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
