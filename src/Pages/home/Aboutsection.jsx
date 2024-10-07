import React from "react";
import {ButtonOne} from "../../Components/Button.jsx";
import FeaturesSection from "./FeautersSection.jsx";
import aboutimg from "../../../public/Rectangle 7.png"
import { RxDotFilled } from "react-icons/rx";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const AboutSection = () => {
  return (
    <div className="bg-white h-full min-w-full relative ">
      
      <div className="container mx-auto pt-8 mb-2 px-2 esm:px-3 ssm:px-4   msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 space-y-6">
        <span className=" flex gap-6">
          <h2 className="relative text-sm esm:text-base ssm:text-lg lg:text-[22px] font-sans font-bold text-primary  text-gray-800">
          Why Choose Us 
        </h2>
        <span className="flex justify-center items-center relative bottom-2 group ">
          <RxDotFilled className=" size-7"/>
          <RxDotFilled className="-ml-3 size-7"/>
          <div className =" h-[0.092rem] w-24 bg-black "></div>
        </span>
        </span>

        
          <h3 className="text-xl py-1 esm:text-2xl ssm:text-3xl msm:text-4xl sm:text-4xl lg:text-5xl llg:text-6xl font-medium text-gray-900">
            Innovation Cutting-edge Digital Transformation
          </h3>
          <p className="text-xs esm:text-sm ssm:text-base  ms:text-lg llg:text-xl xl:text-2xl font-light mt-4">
            With over 35 successful projects and a team of more than 90
            experienced consultants, SNS excels in driving digital innovation
            and intelligent operations. Their expertise spans across various SAP
            solutions, including SAP S/4HANA, SuccessFactors, Ariba, and C4C,
            ensuring comprehensive support for clients' digital transformation
            journeys.
          </p>
          <ButtonOne text={"Know More"} />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src={aboutimg}
            alt="Team Collaboration"
            className="rounded-lg shadow-md overflow-hidden w-full"
          />
        </div>
      </div>
      
     
      
    </div>
  );
};

export default AboutSection;
