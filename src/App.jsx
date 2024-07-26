import React from "react";
import "./App.css";
import Header from "./Ui/Header";
import Banner from "./Ui/Banner";
import About from "./Ui/About";
import Experience from "./Ui/Experience";
import Project from "./Ui/Project";
import Contact from "./Ui/Contact";
import Archive from "./Ui/Archive";
import ScrollBtn from "./Ui/ScrollBtn";
import LeftSide from "./Ui/LeftSide";
import { motion } from "framer-motion";
import RightSide from "./Ui/RightSide";

function App() {
  return (
    <main className="bg-black font-bodyFont min-h-screen text-lightText sticky">
      <Header />
      <Banner />
      <About />
      <Experience />
      <Project />
      <Archive />
      <Contact />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"
      >
        <LeftSide />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0"
      >
        <RightSide />
      </motion.div>

      <ScrollBtn />
    </main>
  );
}

export default App;
