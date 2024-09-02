import React from "react";
import clsx from "clsx";
import "./SectionTitle.css";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionTitle = ({ className, children }: SectionTitleProps) => {
  return <h1 className={clsx("title-text", className)}>{children}</h1>;
};
