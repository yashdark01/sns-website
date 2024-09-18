import React, { useContext, useEffect } from "react";
import Button from "../../Components/Button.jsx";
import { IoPricetagOutline } from "react-icons/io5";
import { PiClockCountdownBold } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { SlBriefcase } from "react-icons/sl";
import UserContext from "../../context/UserContext";

const services = [
    { title: "Procurement", icon: <SlBriefcase  className="size-14 text-white"/>, animation:" slide-in-from-left", aosAnimation:"fade-right" },
    { title: "ERP", icon: <IoPricetagOutline className="size-14 text-white"/> ,animation:" slide-in-from-bottom", aosAnimation:"fade-up" },
    { title: "Customer Solution", icon: <PiClockCountdownBold className="size-14 text-white"/>, animation:"", aosAnimation:"" },
    { title: "HR", icon: <IoShieldCheckmarkOutline className="size-14 text-white"/>, animation:" slide-in-from-right", aosAnimation:"fade-left" },
  ];


const Solutions = () => {
  
    const {user} = useContext(UserContext);

    useEffect(() => {
      
        if(user.solutionsTrigger)
        {
            console.log("Solution Section triggered !");
            
        }
    }, [user.solutionsTrigger]);
    
  return (
    <div className=" container relative z-50 mx-auto py-16 px-2 esm:px-3 ssm:px-4   msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40  bg-white">
      <div className="text-left min-w-full">
        <div className="h-2 w-28 bg-gradient-to-r from-[#04AFFC] to-[#026896] mb-12"></div>
        <div className="flex flex-col md:flex-row md:items-start gap-8 min-w-full">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl esm:text-2xl ssm:text-3xl msm:text-4xl sm:text-4xl lg:text-5xl llg:text-6xl font-medium  text-gray-900">
              We provide end-to-end Solution
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-xs esm:text-sm ssm:text-base  ms:text-lg llg:text-xl xl:text-2xl  text-gray-600 font-thin">
              For a seamless and successful ERP deployment, we specialize in
              methodically developing a blueprint based on your specific
              business as well as Industry Best Practices. We always remain by
              your side throughout the engagement to ensure you get the most out
              of your technological investment.
            </p>
          </div>
        </div>

        <Button text={"Know More"} value={false} />
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 solutions">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos={service.aosAnimation}
            className={`flex flex-col items-center text-center animate-in ${user.solutionsTrigger ? service.animation : ""}`}
          >
            <div className="flex justify-center item-center size-auto  rounded-full mb-4 bg-blue-100">
                <span className="size-24 m-2 rounded-full flex items-center justify-center bg-[#04AFFC]">
                    {service.icon}
                </span>
              
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
