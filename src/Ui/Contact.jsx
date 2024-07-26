import React from "react";
import Conatainer from "./Conatainer";

const Contact = () => {
  return (
    <Conatainer
      id="contact"
      className=" py-10 lg:pb-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="text-lg text-sky-500 font-semibold tracking-wide">
        04. What's Next
      </p>
      <h2 className="text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-center text-gray-400">
        Although I'm not curently looking for any new opportunies, my inbox is
        always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a href="mailto:apurbo.apurbo501893@gmail.com">
        <p className="w-40 h-14 border border-sky-500 rounded-md flex items-center justify-center font-semibold text-sm mt-6 tracking-wider text-sky-400 hover:bg-blue-800/20 duration-300 ">
          Say Hello
        </p>
      </a>
    </Conatainer>
  );
};

export default Contact;
