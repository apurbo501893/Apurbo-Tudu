import { useState } from "react";
import Conatainer from "./Conatainer";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

const Experience = () => {
  const [workReactBD, setWorkReactBD] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkAppple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactBD = () => {
    setWorkReactBD(true);
    setWorkGoogle(false);
    setWorkAppple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleGoogle = () => {
    setWorkReactBD(false);
    setWorkGoogle(true);
    setWorkAppple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleApple = () => {
    setWorkReactBD(false);
    setWorkGoogle(false);
    setWorkAppple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handlesplash = () => {
    setWorkReactBD(false);
    setWorkGoogle(false);
    setWorkAppple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkReactBD(false);
    setWorkGoogle(false);
    setWorkAppple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <Conatainer
      id="experience"
      className=" max-w-3xl mx-auto py-10 lg:py-32 gap-16"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col cursor-pointer">
          <li
            onClick={handleReactBD}
            className={`${
              workReactBD
                ? "border-l-sky-500 text-sky-500 "
                : "border-l-gray-500 text-gray-300"
            } border-l-2 bg-transparent hover:bg-[#0e1829] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            ReactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-sky-500 text-sky-500 "
                : "border-l-gray-500 text-gray-300"
            } border-l-2 bg-transparent hover:bg-[#0e1829] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-sky-500 text-sky-500 "
                : "border-l-gray-500 text-gray-300"
            } border-l-2 bg-transparent hover:bg-[#0e1829] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handlesplash}
            className={`${
              workSplash
                ? "border-l-sky-500 text-sky-500 "
                : "border-l-gray-500 text-gray-300"
            } border-l-2 bg-transparent hover:bg-[#0e1829] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Splash
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-sky-500 text-sky-500 "
                : "border-l-gray-500 text-gray-300"
            } border-l-2 bg-transparent hover:bg-[#0e1829] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Amazon
          </li>
        </ul>
        {workReactBD && (
          <WorkCard
            jobTag="@ReactBD"
            date="Jan 2023-present"
            detailsOne="Write modern , performat , mintainable code for a diverse array of client and internal project "
            detailsTwo="Work with a variety of differnent language ,platforms, frameworks, and content management systems such as javascript, typescript,Gatsby, React ,Craft, WordPress,Prismic, and Netlify"
            detailsThree="Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
          />
        )}
        {workGoogle && (
          <WorkCard
            jobTag="@Google.inc"
            date="Jan 2023-present"
            detailsOne="Write modern , performat , mintainable code for a diverse array of client and internal project "
            detailsTwo="Work with a variety of differnent language ,platforms, frameworks, and content management systems such as javascript, typescript,Gatsby, React ,Craft, WordPress,Prismic, and Netlify"
            detailsThree="Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
          />
        )}
        {workApple && (
          <WorkCard
            jobTag="@Apple"
            date="Jan 2023-present"
            detailsOne="Write modern , performat , mintainable code for a diverse array of client and internal project "
            detailsTwo="Work with a variety of differnent language ,platforms, frameworks, and content management systems such as javascript, typescript,Gatsby, React ,Craft, WordPress,Prismic, and Netlify"
            detailsThree="Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
          />
        )}
        {workSplash && (
          <WorkCard
            jobTag="@Splash"
            date="Jan 2023-present"
            detailsOne="Write modern , performat , mintainable code for a diverse array of client and internal project "
            detailsTwo="Work with a variety of differnent language ,platforms, frameworks, and content management systems such as javascript, typescript,Gatsby, React ,Craft, WordPress,Prismic, and Netlify"
            detailsThree="Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
          />
        )}
        {workAmazon && (
          <WorkCard
            jobTag="@Amazon"
            date="Jan 2023-present"
            detailsOne="Write modern , performat , mintainable code for a diverse array of client and internal project "
            detailsTwo="Work with a variety of differnent language ,platforms, frameworks, and content management systems such as javascript, typescript,Gatsby, React ,Craft, WordPress,Prismic, and Netlify"
            detailsThree="Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
          />
        )}
      </div>
    </Conatainer>
  );
};

export default Experience;
