import React from "react";
import "./VisionButton.css";

type VisionButtonProps = {
  children: React.ReactNode;
};

export const VisionButton = ({ children }: VisionButtonProps) => {
  return (
    <div className="vision-button-container">
      <button className="vision-button">
        <div className="vision-button-bg--red-container">
          <div className="vision-button-bg vision-button-bg--red"></div>
        </div>
        <div className="vision-button-bg vision-button-bg--grey"></div>
        <div className="vision-button-bg vision-button-bg--gradient"></div>
        {children}
      </button>
    </div>
  );
};
