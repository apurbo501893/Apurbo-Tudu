import React, { useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";

const ScrollBtn = () => {
  useEffect(() => {
    const scrollBtn = document.querySelector(".scrollBtn");

    const scrollFunction = () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("scroll", scrollFunction);
    scrollBtn.addEventListener("click", scrollToTop);
  }, []);
  return (
    <div className="scrollBtn fixed bottom-10 right-20 z-40 bg-gray-400/20 text-sky-500 p-3 rounded-full cursor-pointer hover:bg-black transition duration-300">
      <MdArrowUpward size={24} />
    </div>
  );
};

export default ScrollBtn;
