import React from "react";
import clsx from "clsx";
import "./VisionH1.css";

type VisionH1Props = {
  children: React.ReactNode;
  className?: string;
};

export const VisionH1 = ({ className, children }: VisionH1Props) => {
  return <h1 className={clsx("title-text", className)}>{children}</h1>;
};
