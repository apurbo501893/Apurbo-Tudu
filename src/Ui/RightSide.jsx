import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6">
      <a href="mailto:apurbo501893@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wider text-white hover:text-sky-400 duration-200">
          apurbo501893@gmail.com
        </p>
      </a>
      <div className="w-[1px] h-36 bg-gray-400" />
    </div>
  );
};

export default RightSide;
