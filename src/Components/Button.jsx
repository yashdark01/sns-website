import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoArrowForward } from "react-icons/io5";
export const ButtonOne = ({ text, value }) => {
  return (
   
      <div
        className={`${value?"bg-blue-200":""} mt-4 bg-white inline-flex items-center justify-center px-3 py-2 esm:px-4 esm:py-2 ssm:px-5 ssm:py-2 msm:px-6 msm:py-3 border  border-gray-400 shadow-sm text-xs esm:text-sm ssm:text-base msm:text-lg lg:text-[16px] font-semibold rounded-full text-gray-700 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        {text}
        <span className="ml-2"><GoArrowUpRight className="size-7" /></span>
      </div>
  );
};
export const ButtonTwo = ({ text, value }) => {
  return (
   
      <div
        className={` mt-4 border-2 border-[#04AFFC] inline-flex items-center justify-center px-3 py-2 esm:px-4 esm:py-0.5 ssm:px-5 ssm:py-1 msm:px-6 msm:py-1  shadow-sm text-xs esm:text-sm ssm:text-base msm:text-lg lg:text-[16px] font-semibold rounded-lg text-gray-700 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        {text}
        <span className="ml-2"><IoArrowForward className="size-6" /></span>
      </div>
  );
};


