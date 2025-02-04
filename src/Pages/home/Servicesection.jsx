import React, { useContext, useEffect } from "react";
import { ButtonOne, ButtonTwo } from "../../Components/Button.jsx";
import UserContext from "../../context/UserContext";
import { HiOutlineChartBar, HiOutlineChip } from "react-icons/hi";
import { HiMiniServerStack } from "react-icons/hi2";
import { GrDocumentConfig } from "react-icons/gr";
import SAPLogo from '../../assets/SAP.png';
import projectMng from '../../assets/projectMng.png';
import SAPsupport from '../../assets/SAPsupport.png';

const ServicesSection = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.servicesTrigger) {
      console.log("Services section triggered!");
    }
  }, [user.servicesTrigger]);

  const serviceCards = [
    {
      icon: <img src={SAPLogo} alt="SAP Implementation" />,
      title: "SAP Implementation",
      description: "Tailored Solutions To Meet Your Business Needs",
      animation: "fade-down",
    },
    {
      icon: <HiOutlineChip className="size-20 text-[#04AFFC]" />,
      title: "SAP Training",
      description: "Comprehensive Training Programs To Empower Your Team",
      animation: "fade-left",
    },
    {
      icon: <img src={projectMng} alt="Project Management" />,
      title: "Project Management",
      description: "Expert Management For Successful Project Execution",
      animation: "fade-right",
    },
    {
      icon: <img src={SAPsupport} alt="SAP Support" />,
      title: "SAP Support",
      description: "Tailored Solutions To Meet Your Business Needs",
      animation: "fade-up",
    },
    {
      icon: <img src={SAPLogo} alt="Data Services" />,
      title: "Data Services",
      description: "Tailored Solutions To Meet Your Business Needs",
      animation: "fade-left",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto pb-4 py-0 lg:py-16 px-2 esm:px-3 ssm:px-4 bg-white msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={`relative text-left md:space-y-6 llg:space-y-6 z-40 ${
            user.servicesTrigger ? "animate-in slide-in-from-left" : ""
          }`}
        >
          <h2 className="text-xl esm:text-2xl ssm:text-3xl msm:text-4xl sm:text-4xl lg:text-5xl llg:text-6xl font-medium text-muted text-gray-900">
            Our Services
          </h2>
          <p className="text-sm llg:text-base font-semibold mt-2 text-gray-800">
            Unlock your business's potential with our Digital Transformation
            Solutions and Services. Certified and experienced, we specialize
            in identifying, implementing, and supporting SAP systems tailored
            to your needs. We help you transform and optimize your operations.
          </p>
          <ButtonOne text="Know More" />
        </div>
        
        {serviceCards.map((card, index) => (
          <div
            key={index}
            data-aos={card.animation}
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className={`bg-[rgb(245,250,255)] rounded-lg shadow-md p-6 text-center flex flex-col justify-between h-full ${
              user.servicesTrigger ? "animate-in slide-in-from-top" : ""
            }`}
          >
            <div>
              <span className="w-full flex justify-center items-center mb-4">
                {card.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
            </div>
            <div className="mt-4">
              <ButtonTwo text="Explore More" value={true} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;