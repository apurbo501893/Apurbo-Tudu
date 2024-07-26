import React from "react";
import SocialLinks from "./SocialLinks";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-sky-500">
      <SocialLinks />
      <div className="w-[1px] h-36 bg-gray-400" />
    </div>
  );
};

export default LeftSide;
