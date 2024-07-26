import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

const ProjectLinks = ({ Link }) => {
  return (
    <div className="text-2xl flex items-center gap-4">
      <a
        href="https://github.com/apurbo501893"
        target="blank"
        className="hover:text-sky-400 duration-200"
      >
        <TbBrandGithub />
      </a>
      <a
        href="https://youtube.com/"
        target="blank"
        className="hover:text-sky-400 duration-200"
      >
        <AiOutlineYoutube />
      </a>
      <a href={Link} target="blank" className="hover:text-sky-400 duration-200">
        <RxOpenInNewWindow />
      </a>
    </div>
  );
};

export default ProjectLinks;
