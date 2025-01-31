import React, { useRef, useState } from "react";
import Conatainer from "./Conatainer";
import { projectArray } from "../Constants";
import ArchiveCard from "./ArchiveCard";
import { motion, AnimatePresence } from "framer-motion";
const Archive = () => {
  const [ShowMore, setShowMore] = useState(false);
  const displayArray = ShowMore ? projectArray : projectArray.slice(0, 6);

  const projectContainerRef = useRef(null);

  const handleShow = () => {
    if (ShowMore) {
      setShowMore(false);
      projectContainerRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowMore(true);
    }
  };
  return (
    <Conatainer className="py-24 max-w-5xl mx-auto">
      <div className="flex flex-col gap-1 items-center">
        <h2 className="text-3xl font-semibold">Other Noteworthy Projects</h2>
        <p className="text-sm text-sky-500 tracking-wide">view the archive</p>
      </div>
      <div
        ref={projectContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:px-10"
      >
        <AnimatePresence>
          {displayArray?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ArchiveCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div
        ref={projectContainerRef}
        className="mt-10 flex items-center justify-center"
      >
        <button
          onClick={handleShow}
          className="w-36 h-12 rounded-md text-sky-500 text-sm  border border-sky-500 hover:bg-blue-800/20 duration-300"
        >
          {ShowMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </Conatainer>
  );
};

export default Archive;
