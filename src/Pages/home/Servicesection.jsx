import React, { useContext, useEffect } from "react";
import Button from "../../Components/Button.jsx";
import UserContext from "../../context/UserContext";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineChip } from "react-icons/hi";
import { HiMiniServerStack } from "react-icons/hi2";
import { GrDocumentConfig } from "react-icons/gr";

const ServicesSection = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.servicesTrigger) {
      // Any additional logic when the services section is triggered
      console.log("Services section triggered!");
    }
  }, [user.servicesTrigger]);


//   const services = [
//     {
//       title: "SAP Implementation",
//       description: "Tailored Solutions To Meet Your Business Needs",
//       icon: <HiOutlineChartBar className="size-20 text-[#04AFFC]"/>,
//     },
//     {
//       title: "SAP Training",
//       description: "Comprehensive Training Programs To Empower Your Team",
//       icon: "/path-to-your-icon-2.svg",
//     },
//     {
//       title: "Project Management",
//       description: "Expert Management For Successful Project Execution",
//       icon: "/path-to-your-icon-3.svg",
//     },
//     {
//       title: "SAP Support",
//       description: "Tailored Solutions To Meet Your Business Needs",
//       icon: "/path-to-your-icon-4.svg",
//     },
//     {
//       title: "Data Services",
//       description: "Tailored Solutions To Meet Your Business Needs",
//       icon: "/path-to-your-icon-5.svg",
//     },
//   ];

  return (
    <div className="bg-white">
      {/* Section Header */}
      {
        <div
          className={`container mx-auto pb-4 py-0 lg:py-16 px-2 esm:px-3 ssm:px-4 bg-white msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          <div
           data-aos="fade-right"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine"
            className={`relative text-left md:space-y-6 llg:space-y-6  z-40 ${user.servicesTrigger ? "animate-in slide-in-from-left" : ""}`}>
            <h2 className="text-xl esm:text-2xl ssm:text-3xl msm:text-4xl sm:text-4xl lg:text-5xl llg:text-6xl font-medium text-muted text-gray-900">
              Our Services
            </h2>
            <p className="text-sm llg:text-base font-semibold mt-2 text-gray-800">
              Unlock your business's potential with our Digital Transformation
              Solutions and Services. Certified and experienced, we specialize
              in identifying, implementing, and supporting SAP systems tailored
              to your needs. We help you transform and optimize your operations.
            </p>
            <Button text={"Know More"} />
          </div>
          {/* Service Card 1 */}
        <div 
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className={`bg-blue-50 rounded-lg shadow-md p-6 text-center ${user.servicesTrigger ? "animate-in slide-in-from-top" : ""} `}>
         <span className="w-full flex justify-center items-center mb-4"><HiOutlineChartBar className="size-20 text-[#04AFFC]"/></span>
          <h3 className="text-xl font-semibold text-gray-800">
            SAP Implementation
          </h3>
          <p className="mt-2 text-gray-600">
            Tailored Solutions To Meet Your Business Needs
          </p>
          <Button text={"Explore More"} value={true} />
        </div>

        {/* Service Card 2 */}
        <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className={`bg-blue-50 rounded-lg shadow-md p-6 text-center ${user.servicesTrigger ? "animate-in slide-in-from-right" : ""} `}>
          <span className="w-full flex justify-center items-center mb-4"><HiOutlineChip className="size-20 text-[#04AFFC]"/></span>
          <h3 className="text-xl font-semibold text-gray-800">SAP Training</h3>
          <p className="mt-2 text-gray-600">
            Comprehensive Training Programs To Empower Your Team
          </p>
          <Button text={"Explore More"} value={true} />
        </div>

        {/* Service Card 3 */}
        <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className={`bg-blue-50 rounded-lg shadow-md p-6 text-center ${user.servicesTrigger ? "animate-in slide-in-from-left" : ""} `}>
          <span className="w-full flex justify-center items-center mb-4"><HiOutlineChartBar className="size-20 text-[#04AFFC]"/></span>
          <h3 className="text-xl font-semibold text-gray-800">
            Project Management
          </h3>
          <p className="mt-2 text-gray-600">
            Expert Management For Successful Project Execution
          </p>
          <Button text={"Explore More"} value={true} />
        </div>

        {/* Service Card 4 */}
        <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
         className={`bg-blue-50 rounded-lg shadow-md p-6 text-center ${user.servicesTrigger ? "animate-in slide-in-from-bottom" : ""} `}>
          <span className="w-full flex justify-center items-center mb-4"><GrDocumentConfig className="size-20 text-[#04AFFC]"/></span>
          <h3 className="text-xl font-semibold text-gray-800">SAP Support</h3>
          <p className="mt-2 text-gray-600">
            Tailored Solutions To Meet Your Business Needs
          </p>
          <Button text={"Explore More"} value={true} />
        </div>

        {/* Service Card 5 */}
        <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
         className={`bg-blue-50 rounded-lg shadow-md p-6 text-center ${user.servicesTrigger ? "animate-in slide-in-from-right" : ""} `}>
          <span className="w-full flex justify-center items-center mb-4"><HiMiniServerStack className="size-20 text-[#04AFFC]"/></span>
          <h3 className="text-xl font-semibold text-gray-800">Data Services</h3>
          <p className="mt-2 text-gray-600">
            Tailored Solutions To Meet Your Business Needs
          </p>
          <Button text={"Explore More"} value={true} />
        </div>
        </div>
      }
    </div>
  );
};

export default ServicesSection;
