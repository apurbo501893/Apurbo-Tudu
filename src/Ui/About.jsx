import React from "react";
import Conatainer from "./Conatainer";
import SectionTitle from "./SectionTitle";
import { profileImg1 } from "../Assets";
import { FaCode } from "react-icons/fa";

const About = () => {
  const textArray = [
    { title: "JavaScript(ES6+)", link: "https://www.javascript.com/" },
    { title: "React js", link: "https://react.dev/learn" },
    { title: "TypeScript", link: "https://www.typescriptlang.org/" },
    { title: "MongoDB", link: "https://reactbd.com/" },
    { title: "TailwindCSS", link: "https://reactbd.com/" },
    { title: "Node js", link: "https://reactbd.com/" },
    { title: "Next js", link: "https://reactbd.com/" },
    { title: "Express", link: "https://reactbd.com/" },
  ];
  return (
    <Conatainer id="about" className=" py-10 lg:py-32 flex  flex-col gap-8">
      <SectionTitle titleNo="01" title="About Me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:2/3 text-gray-400 font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Apurbo Tudu and I enjoy creating thing that live
            on the internet .My interest in web development started back in 2022
            when I decided to try editing custom tumblr theme - turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a startup,
            <span>a huge corporation , and a student-led design studio.</span>
            <span className="text-sky-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              ut.
            </span>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </p>
          <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            {textArray.map((item) => (
              <a
                key={item?.title}
                href={item?.link}
                className="flex items-center gap-2 hover:text-white/80 duration-200 group"
              >
                <FaCode className="text-sky-500 group-hover:text-sky-500 duration-200" />
                {item?.title}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-3 -top-3 rounded-lg ">
            <div className=" w-full  h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                src={profileImg1}
                alt="profileImg1"
                className="rounded-lg lg:w-full h-96 object-cover"
              />
              <div className="hidden lg:inline-flex absolute w-full h-96 bg-sky-500/10 rounded-md top-0 left-0  group-hover:bg-transparent duration-300" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-80 h-96 border-2 border-sky-500 rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </Conatainer>
  );
};

export default About;
