import React, { useState, useEffect } from "react";
import heroimg from "../../../public/demo.png";
import lineElement from "../../../public/lineElement-2.png";
import { TbSettings } from "react-icons/tb";

const HeroSection = () => {
  const [intervalId, setIntervalId] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalId((prevIntervalId) => !prevIntervalId);
    }, 2000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative -top-52 ssm:-top-44 sm:-top-48 lg:-top-[88px] overflow-hidden bg-cover bg-center h-[800px] ssm:h-[750px] msm:h-[700px] md:h-[1000px] lg:h-[830px] llg:h-[1000px]"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="relative container overflow-hidden mx-auto py-8 ssm:py-16 px-2 esm:px-3 ssm:px-4 msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40 flex flex-col items-start justify-center text-left h-full">
        {/* Main Heading */}
        <p className="text-3xl sm:text-4xl msm:text-4xl md:text-5xl lg:text-6xl llg:text-8xl font-semibold py-2 text-white scroll-none overflow-hidden animate-fade-up">
          Your Top Choice For
        </p>
        <p className="text-3xl sm:text-4xl msm:text-4xl md:text-5xl lg:text-6xl llg:text-8xl font-semibold py-2 text-white scroll-none overflow-hidden animate-fade-up">
          Digital Transformation
        </p>

        {/* Dynamic Text for "Solutions" */}
        <span className="h-16 msm:h-20 md:h-24 llg:h-40 transition-all duration-1000">
          <p
            className={`${
              intervalId ? "text-white" : "text-[#425AE2] "
            } transition-all duration-500 ease-in-out text-3xl sm:text-4xl msm:text-4xl md:text-5xl lg:text-6xl llg:text-8xl font-semibold pt-2 scroll-none overflow-hidden`}
            style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}
          >
            Solutions
          </p>
          <img className={`${
              intervalId ? "flex" : "hidden"
            } transition-all duration-3000 ease-in-out h-8 sm:h-10 md:h-[50px] llg:h-20 -ml-10 llg:-ml-16 -mt-1`} src={lineElement} alt="" />
        </span>

        {/* Subheading */}
        <p className="text-base esm:text-xs ssm:text-sm md:text-xl llg:text-2xl text-white mt-2 sm:mt-4 max-w-3xl animate-fade-down">
          Smart National Solutions (“SNS”) is a leading Saudi Company that
          provides technology and business consulting services ranging from
          advisory, systems integration, data services, and support. By being an
          SAP Gold Partner.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#"
          className="mt-2 sm:mt-4 md:mt-8 inline-block bg-gradient-to-r from-[#04AFFC] to-[#026896] text-white text-base esm:text-xs sm:text-lg md:text-xl llg:text-2xl font-medium esm:py-2 md:py-4 llg:py-4 px-5 llg:px-8 rounded-xl shadow hover:bg-blue-700 transition duration-300"
        >
          Discover More
        </a>

        {/* Metrics Section */}
        <div className="absolute bottom-32 ssm:bottom-36 msm:bottom-28 md:bottom-36 lg:bottom-0 container py-5 sm:py-12 md:py-16 flex justify-start w-full lg:w-1/2">
          <div className="text-white text-left w-full">
            <span className="flex">
              <h3 className="text-lg ssm:text-xl msm:text-2xl md:text-4xl llg:text-5xl font-bold w-full">
                300
                <span className="text-lg ssm:text-xl msm:text-2xl md:text-4xl llg:text-5xl font-bold text-[#026896]">
                  +
                </span>
              </h3>
            </span>
            <p className="text-sm sm:text-lg md:text-xl llg:text-2xl">
              Happy Clients
            </p>
          </div>
          <div className="text-white text-left w-full">
            <span className="flex">
              <h3 className="text-lg ssm:text-xl msm:text-2xl md:text-4xl llg:text-5xl font-bold w-full">
                80
                <span className="text-lg ssm:text-xl msm:text-2xl md:text-4xl llg:text-5xl font-bold text-[#026896]">
                  +
                </span>
              </h3>
            </span>
            <p className="text-sm sm:text-lg md:text-xl llg:text-2xl">
              Amazing Projects
            </p>
          </div>
          <div className="text-white text-left w-full">
            <span className="flex">
              <h3 className="text-lg ssm:text-xl msm:text-2xl md:text-4xl llg:text-5xl font-bold w-full">
                20
                <span className="text-lg ssm:text-xl msm:text-2xl md:text-4xl llg:text-5xl font-bold text-[#026896]">
                  +
                </span>
              </h3>
            </span>
            <p className="text-sm sm:text-lg md:text-xl llg:text-2xl">
              Awards Winning
            </p>
          </div>
        </div>
      </div>

      {/* Project Years Section */}
      <div className="absolute bottom-0 right-0 overflow-hidden text-white h-auto w-full lg:w-1/2 bg-gradient-to-r from-[#04AFFC] to-[#026896] py-4 sm:py-5 msm:py-8 md:py-10 lg:py-12">
        <div className="conatiner mx-auto px-2 esm:px-3 ssm:px-4 msm:px-6 md:px-10 lg:px-12 flex justify-center lg:justify-start items-center gap-6 ssm:gap-14 msm:gap-12 md:gap-20 lg:gap-3 llg:gap-8">
          <div className="text-center">
            <h3 className="text-base md:text-2xl llg:text-3xl font-bold p-1">
              Project
            </h3>
          </div>
          <div className="flex">
            <span>
              <p className="text-xs md:text-base llg:text-lg p-1">25 Years</p>
              <p className="text-xs md:text-lg llg:text-2xl p-1"> Operated</p>
            </span>
            <span>
              <TbSettings className="lg:size-5 llg:size-7" />
            </span>
          </div>
          <div className="w-1/3 msm:w-2/3 md:w-1/2 lg:w-1/2">
            <p className="text-[0.6rem] sm:text-sm md:text-base llg:text-lg md:ml-4">
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