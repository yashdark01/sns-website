import React from "react";
import Group1000002873 from '../../../public/Group 1000002873.png'
import lineElement from '../../../public/line-element.png'

const LetsConnect = () => {
  return (
    <div className="absolute z-50 overflow-hidden h-auto container mx-auto mt-6 ssm:mt-0 py-6 esm:py-8 ssm:py-10 msm:py-12 md:py-16 px-3 ssm:px-4 msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40 bg-gradient-to-r from-[#04AFFC] to-[#026896] rounded-3xl">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute bottom-[4%] right-[4%] size-36 bg-[#026896] rounded-full opacity-100"></div> 
        <div className="absolute bottom-[22%] -right-[0.5%] size-28 bg-[#7aeff3] rounded-full opacity-25"></div>
        <div className="absolute bottom-[30%] -right-[6%] z-20">
          <img className="" src={lineElement} alt="" />
        </div>
        <div className="absolute top-[4%] left-[2%] z-20">
          <img className="" src={Group1000002873} alt="" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-2xl esm:text-3xl ssm:text-4xl msm:text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Let's Connect With Us
          </h2>
          <p className="text-sm esm:text-base ssm:text-lg msm:text-xl lg:text-2xl font-light text-white mt-4">
            We're here to help! Whether you have questions about our products, need assistance with an order, or want to learn more about our services.
          </p>
        </div>

        {/* Input and Button Section */}
        <div className="relative z-10 flex flex-row items-center w-full lg:w-1/2 mt-4 lg:mt-0">
          <input
            type="email"
            placeholder="Email ID"
            className="w-2/3 p-4 text-xs ssm:text-base esm:p-5 ssm:p-6 msm:p-7 lg:p-8 h-12 esm:h-14 ssm:h-16 msm:h-18 lg:h-20 rounded-l-2xl border-2 border-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-white bg-white opacity-90"
          />
          <button className="flex justify-center items-center w-1/3 bg-black text-xs ssm:text-base text-white font-semibold h-12 esm:h-14 ssm:h-16 msm:h-18 lg:h-20 rounded-r-2xl hover:bg-gray-800 transition-colors duration-300">
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;