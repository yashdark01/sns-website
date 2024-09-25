import React from "react";

const LetsConnect = () => {
  return (
    
      <div className="relative bottom-0 z-50 overflow-hidden h-auto container mx-auto mt-6 ssm:mt-0 py-6 esm:py-8 ssm:py-10 msm:py-12 px-3 ssm:px-4 msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40 flex flex-col lg:flex-row items-center justify-between gap-10 bg-gradient-to-r from-[#04AFFC] to-[#026896] rounded-3xl">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {/* Add SVGs or background images here */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-8 left-8 w-32 h-32 bg-[#026896] rounded-full opacity-50"></div>
          <div className="absolute top-12 left-12 w-6 h-6 bg-white opacity-60"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl esm:text-4xl ssm:text-5xl msm:text-6xl sm:text-6xl lg:text-7xl llg:text-8xl font-bold text-white">
            Let’s Connect With Us
          </h2>
          <p className="text-xs esm:text-sm ssm:text-base msm:text-lg sm:text-lg lg:text-xl llg:text-2xl font-light text-white mt-4">
            We're here to help! Whether you have questions about our products,
            need assistance with an order, or want to learn more about our
            services.
          </p>
        </div>

        {/* Input and Button Section */}
        <div className="relative z-10 flex flex-row items-center w-full lg:w-1/2 mt-4 lg:mt-0 ml-4 rounded-2xl">
          <input
            type="email"
            placeholder="Email ID"
            className="w-2/3 p-4 text-xs ssm:text-base esm:p-5 ssm:p-6 msm:p-7 lg:p-8 h-12 esm:h-14 ssm:h-16 msm:h-18 lg:h-20 rounded-l-2xl border-2 border-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-white bg-white opacity-90"
          />
          <button className="flex justify-center items-center w-1/3 bg-black text-xs ssm:text-base text-white font-semibold  h-12 esm:h-14 ssm:h-16 msm:h-18 lg:h-20 rounded-r-2xl hover:bg-gray-800 transition-colors duration-300">
            Submit Now
          </button>
        </div>
      </div>
  );
};

export default LetsConnect;
