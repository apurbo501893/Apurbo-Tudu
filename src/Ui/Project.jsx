import React from "react";
import Conatainer from "./Conatainer";
import SectionTitle from "./SectionTitle";
import { shop } from "../Assets";
import ProjectLinks from "./ProjectLinks";
import { Link } from "react-scroll";

const Project = () => {
  return (
    <Conatainer id="project" className="py-24">
      <SectionTitle title="Some Thing I have Build" titleNo="03" />
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        {/*project One*/}
        <div className="flex flex-col lg:flex-row gap-6">
          <a
            href="https://nextamazon.reactbd.com"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative  rounded-lg overflow-hidden group"
          >
            <img
              src={shop}
              alt="shop"
              className="w-full h-full object-cover group-hover:scale-100 duration-300"
            />
            <div className="absolute w-full h-full bg-sky-500/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            {" "}
            <div>
              <p className="text-sky-500 text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Amazon clone 2.O</h3>
            </div>
            <p className="bg-blue-800 text-sm md:text-base p-2 md:p-6 rounded-md">
              An Amazon clone website for visualizing personalized Amazon
              website. View your product, Add your account with{" "}
              <span className="text-sky-500">O-auth</span>and then make the
              purchage using <span className="text-sky-500">stripe</span>
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
              <li>Nextjs</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectLinks Link="https://nextamazon.reactbd.com/" />
          </div>
        </div>

        {/*project Two*/}
        <div className="mt-10  ">
          {/*project One*/}
          <div className="flex flex-col lg:flex-row-reverse gap-6">
            <a
              href="https://nextamazon.reactbd.com"
              target="blank"
              className="w-full lg:w-1/2 h-auto relative  rounded-lg overflow-hidden group"
            >
              <img
                src={shop}
                alt="shop"
                className="w-full h-full object-cover group-hover:scale-100 duration-300"
              />
              <div className="absolute w-full h-full bg-sky-500/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
            </a>
            {/* Description */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-start text-left lg:-ml-16 z-10">
              {" "}
              <div>
                <p className="text-sky-500 text-sm tracking-wide">
                  Feature Project
                </p>
                <h3 className="text-2xl font-bold">Cyber clone 2.O</h3>
              </div>
              <p className="bg-blue-800 text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16">
                An Amazon clone website for visualizing personalized Amazon
                website. View your product, Add your account with{" "}
                <span className="text-sky-500">O-auth</span>and then make the
                purchage using <span className="text-sky-500">stripe</span>
              </p>
              <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
                <li>Nextjs</li>
                <li>TypeScript</li>
                <li>Next-auth</li>
                <li>Stripe</li>
                <li>Vercel Deployment</li>
              </ul>
              <ProjectLinks Link="https://nextamazon.reactbd.com/" />
            </div>
          </div>
          {/*project Two*/}
          {/*project Three*/}
        </div>
        {/*project Three*/}
        <div className="flex flex-col lg:flex-row gap-6">
          <a
            href="https://nextamazon.reactbd.com"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative  rounded-lg overflow-hidden group"
          >
            <img
              src={shop}
              alt="shop"
              className="w-full h-full object-cover group-hover:scale-100 duration-300"
            />
            <div className="absolute w-full h-full bg-sky-500/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            {" "}
            <div>
              <p className="text-sky-500 text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Amazon clone 2.O</h3>
            </div>
            <p className="bg-blue-800 text-sm md:text-base p-2 md:p-6 rounded-md">
              An Amazon clone website for visualizing personalized Amazon
              website. View your product, Add your account with{" "}
              <span className="text-sky-500">O-auth</span>and then make the
              purchage using <span className="text-sky-500">stripe</span>
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
              <li>Nextjs</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectLinks Link="https://nextamazon.reactbd.com/" />
          </div>
        </div>
      </div>
    </Conatainer>
  );
};

export default Project;
