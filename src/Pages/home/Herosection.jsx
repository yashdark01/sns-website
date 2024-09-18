import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative -top-52 sm:-top-48 md:-top-[88px] overflow-hidden bg-cover bg-center h-screen "
      style={{ backgroundImage: "url('../../../public/demo.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className=" relative container mx-auto py-8  ssm:py-16 px-2 esm:px-3 ssm:px-4   msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40  flex flex-col items-start justify-center text-left h-full">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl msm:text-4xl md:text-6xl py-2 text-white scroll-none overflow-hidden animate-fade-up">
          Your Top Choice For <br /> Digital Transformation Solutions
        </h1>

        {/* Subheading */}
        <p className="text-base esm:text-xs ssm:text-sm md:text-xl text-white mt-2 sm:mt-4 max-w-3xl animate-fade-down">
          Smart National Solutions (“SNS”) is a leading Saudi Company that
          provides technology and business consulting services ranging from
          advisory, systems integration, data services, and support. By being an
          SAP Gold Partner.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#"
          className=" mt-2 sm:mt-4 md:mt-8 inline-block bg-blue-600 text-white text-base esm:text-xs sm:text-lg md:text-xl font-medium py-1 md:py-2 esm:py-3 px-4 esm:px-6 rounded-md shadow hover:bg-blue-700 transition duration-300 "
        >
          Discover More
        </a>
      </div>
      <div className="absolute bottom-0 flex flex-col md:flex-row justify-between items-center min-w-full ">
        <div className=" container ml-6  py-5  sm:py-12 md:py-16  md:pl-10 lg:pl-14 llg:pl-28 xl:pl-40 flex justify-start items-center w-full md:w-1/2 space-x-8 sm:space-x-24 md:space-x-16">
          <div className="text-white text-left w-full">
            <h3 className="text-2xl md:text-4xl font-bold w-full">
              300+
            </h3>
            <p className="text-sm sm:text-lg md:text-xl">Happy Clients</p>
          </div>
          <div className="text-white text-left w-full">
            <h3 className="text-2xl md:text-4xl font-bold w-full">
              80+
            </h3>
            <p className="text-sm sm:text-lg md:text-xl">
              Amazing Projects
            </p>
          </div>
          <div className="text-white text-left w-full ">
            <h3 className="text-2xl md:text-4xl font-bold w-full">
              20+
            </h3>
            <p className="text-sm sm:text-lg md:text-xl">Awards Winning</p>
          </div>
        </div>

        {/* Project Years Section */}
        <div className=" flex justify-start items-center text-white gap-3 sm:gap-4  md:gap-8 w-full md:w-1/2 h-full bg-gradient-to-r from-[#04AFFC] to-[#026896] py-8  ssm:py-12 msm:py-10 md:py-14 px-4  msm:px-14 md:px-8 ">
          <div className="text-center ">
            <h3 className="text-lg ssm:text-xl md:text-2xl font-bold p-4 esm:p-5">
              Project
            </h3>
          </div>
          <div className="">
            <p className="text-xs md:text-base ">
              25 Years
            </p>
            <p className="text-xs ssm:text-lg"> Operated</p>
          </div>
          <div className=" w-2/3 md:w-1/3">
            <p className="text-xs md:text-base  md:ml-4">
              As a trusted general project that has been operating for 25 years,
              our commitment is always to prioritize our client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
