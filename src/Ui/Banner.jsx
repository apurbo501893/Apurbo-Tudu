import React from "react";
import Conatainer from "./Conatainer";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Experience from "./Experience";

const Banner = () => {
  const StringArray = [
    "I build things for the web",
    "Passionate web developer",
    "Love to learn new ideas",
  ];
  return (
    <Conatainer
      id="home"
      className=" py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4 "
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-semibold tracking-wide text-sky-500 font-mono"
      >
        Hi, My Name is{" "}
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-bold flex flex-col"
      >
        Apurbo Tudu
        <Typewriter
          options={{
            strings: StringArray,
            autoStart: true,
            loop: true,
          }}
        />
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="md:max-w-[650px] font-medium leading-7"
      >
        I am a web developer with a 1+ years of Experience in Reacr . I have a
        strong foundation in front-end & back-end development and am skilled i
        creating user-friendly and responsive web applications using React and
        its ecosystem.{" "}
        <a href="" target="blank">
          <span className="text-sky-500 inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more!
            <span className="absolute w-full h-[1px] bg-sky-500 left-=0 bottom-0 -translate-x-[110%] transiton-tansform group-hover:translate-x-0 duration-500" />
          </span>
        </a>
      </motion.p>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        href="#"
        target="blank"
        className="w-52 h-14 text-sm border border-sky-500 rounded-md text-sky-500 tracking-wide hover:bg-sky-500/20 duration-300 flex justify-center items-center font-semibold "
      >
        Cheak Out My Project
      </motion.a>
    </Conatainer>
  );
};

export default Banner;
