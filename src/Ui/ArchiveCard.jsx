import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const ArchiveCard = ({ project }) => {
  return (
    <div className="w-full h-64 rounded-lg bg-blue-950 p-7 flex flex-col justify-center gap-6 group">
      <a href={project?.link} target="blank">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-sky-500" />
          <RxOpenInNewWindow className="text-2xl hover:text-sky-500 duration-200" />
        </div>{" "}
        <div>
          <h2 className="text-xl font-semibold tracking-wide group-hover:text-sky-500">
            {project?.title}
          </h2>
          <p className="text-sm mt-3">{project?.description}</p>
        </div>
        <ul className="text-xs md:text-sm text-gray-400 flex items-center gap-2 justify-between">
          {project?.listItem.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </a>
    </div>
  );
};

export default ArchiveCard;
