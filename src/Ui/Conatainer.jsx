import React from "react";
import { twMerge } from "tailwind-merge";

const Conatainer = ({ children, className, id }) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto px-4 lg:px-0 font-mono ",
    className
  );
  return (
    <div id={id} className={newClassName}>
      {children}
    </div>
  );
};

export default Conatainer;
