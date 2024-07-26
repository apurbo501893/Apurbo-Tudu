import React, { useRef, useState } from "react";
import resume from "../../public/resume.pdf";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { logo } from "../Assets/index";
import { MdOutlineClose } from "react-icons/md";
import SocialLinks from "./SocialLinks";
const navigation = [
  { title: "Home", link: "home", value: "" },
  { title: "About", link: "about", value: "01", delay: "0.1" },
  { title: "Experience", link: "experience", value: "02", delay: "0.2" },
  { title: "Project", link: "project", value: "03", delay: "0.3" },
  { title: "Contact", link: "contact", value: "04", delay: "0.4" },
];
const Header = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  };
  return (
    <div className="h-20 shadow-lg shadow-sky-500/70 px-4 lg:px-0 sticky top-0 z-50 bg-black font-mono">
      <div className="h-full max-w-[1440px] mx-auto flex justify-between items-center">
        <p className="text-xl w-14 font-bold text-sky-400 cursor-pointer hover:text-yellow-500 ">
          GT<span className="text-red-500">Black</span>
        </p>
        <div className="hidden md:inline-flex items-center gap-7">
          <div className="flex text-[13px] gap-7 ">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                // activeClass="class"
                to={item?.link}
                smooth={true}
                offset={-80}
                duration={500}
                className="font-bold hover:text-sky-500 duration-300  inline-flex relative cursor-pointer h-7 overflow-x-hidden group"
              >
                <motion.button
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: item?.delay }}
                >
                  <span className="text-sky-400 mr-1 font-bodyFont ">
                    {item?.value}
                    {item?.value && "."}
                  </span>
                  <span className="  uppercase tracking-wider">
                    {item?.title}
                  </span>
                </motion.button>
                <span className="absolute w-full h-[1px] bg-sky-500 left-=0 bottom-0 -translate-x-[110%] transiton-tansform group-hover:translate-x-0 duration-500" />
              </Link>
            ))}
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href={resume}
            target="blank"
            className="px-4 py-2 rounded-md text-white text-[13px] tracking-wider uppercase border border-sky-500 hover:bg-sky-800/20 hover:text-sky-500 duration-300 font-bold font-mono"
          >
            Resume
          </motion.a>
        </div>
        <div
          onClick={() => setShow(true)}
          className="md:hidden w-6 h-5  flex flex-col justify-between items-center cursor-pointer group overflow-hidden"
        >
          <span className="w-full h-[2px] bg-sky-500 inline-flex transfrom group-hover:translate-x-2 transition-all duration-300" />
          <span className="w-full h-[2px] bg-sky-500 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all" />
          <span className="w-full h-[2px] bg-sky-500 inline-flex transfrom translate-x-1 group-hover:translate-x-2 transition-all duration-300" />
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col items-end z-50"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%]  h-full overflow-y-scroll bg-black/90 flex flex-col items-center py-10 relative scrollBarHide"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-sky-500 hover:text-red-600 absolute top-4 right-4 duration-200"
              />
              <div className="flex flex-col  items-center gap-7">
                <ul className="flex flex-col text-base gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item?.title}
                      to={item?.link}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="font-medium text-white hover:text-sky-500 cursor-pointer duration-300"
                    >
                      <motion.li
                        onClick={() => setShow(false)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: item?.delay }}
                      >
                        <span className="text-sky-500">
                          {item?.value}
                          {item?.value && "."}
                        </span>
                        <span className="tracking-wide uppercase">
                          {item?.title}
                        </span>
                      </motion.li>
                    </Link>
                  ))}
                </ul>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href={resume}
                  target="blank"
                  className="px-4 py-2 rounded-md text-white text-[13px] tracking-wider uppercase border border-sky-500 hover:bg-sky-800/20 hover:text-sky-500 duration-300 font-bold font-mono"
                >
                  Resume
                </motion.a>
                <SocialLinks className="flex flex-row items-center gap-5 " />
              </div>
              <a href="mailto:Apurbo.apurbo501893@gmail.com" className="py-5">
                <p className="text-sm text-center  w-80 tracking-widest text-sky-500/80 hover:text-sky-500 duration-200 ">
                  apurbo501893@gmail.com
                </p>
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
