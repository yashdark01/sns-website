import { useContext, useState } from "react";
import { Link } from "react-scroll";
import UserContext from "../context/UserContext";
import { RiArrowDownSLine } from "react-icons/ri";

const navbar = [
  { title: "Home", icon: "", path: "heroSection", triggerKey: "heroTrigger", class: "" },
  { title: "About Us", icon: "", path: "aboutSection", triggerKey: "aboutTrigger", class: "" },
  { title: "Services", icon: <RiArrowDownSLine className="size-8" />, path: "servicesSection", triggerKey: "servicesTrigger", class: "hover:mt-2" },
  { title: "Solution", icon: <RiArrowDownSLine className="size-8" />, path: "solutions", triggerKey: "solutionsTrigger", class: "" },
  { title: "Careers", icon: "", path: "letsConnect", triggerKey: "aboutTrigger", class: "hover:mb-2 hover:w-[90%]" },
  { title: "Our Client", icon: "", path: "valuedClients", triggerKey: "clientsTrigger", class: "" },
  { title: "Blogs", icon: "", path: "letsConnect", triggerKey: "aboutTrigger", class: "" },
];

const scrollLinkProps = {
  smooth: true,
  duration: 500,
  spy: true,
  offset: -80,
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateTrigger } = useContext(UserContext);

  const handleNavClick = (triggerKey) => {
    updateTrigger(triggerKey);
    setIsOpen(false);
  };

  return (
    <div className="bg-white sticky top-0 z-20 min-w-full text-black">
      <div className="flex items-center justify-between p-4 md:p-6">
        <div className="w-1/6 msm:w-1/5 flex justify-center items-center">
          <Link to="heroSection" {...scrollLinkProps} className="cursor-pointer">
            <img src="/logo.png" alt="SNS logo" className="h-10 msm:h-8 md:h-12 lg:h-16 llg:h-20" />
          </Link>
        </div>

        <div className="relative hidden md:flex w-2/3 msm:w-3/5 items-center justify-around gap-6 msm:gap-4">
          {navbar.map((list) => (
            <div key={list.path + list.title} className={`${list.class} transition-all duration-700 underline-center font-semibold w-full`}>
              <Link
                to={list.path}
                {...scrollLinkProps}
                onClick={() => updateTrigger(list.triggerKey)}
                activeClass="active"
                className="hover:text-[#026896] flex items-center justify-center cursor-pointer esm:text-xs md:text-sm lg:text-lg llg:text-2xl"
              >
                <span className="pr-1">{list.title}</span>
                <span className="hidden lg:flex pl-1">{list.icon}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex md:hidden w-3/4 justify-end">
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex w-1/6 msm:w-1/5 justify-center items-center">
          <Link to="letsConnect" {...scrollLinkProps} className="bg-gradient-to-r from-[#04AFFC] to-[#026896] rounded-xl md:rounded-2xl text-white py-1 md:py-2 px-2 md:px-8 esm:text-xs msm:text-sm md:text-base cursor-pointer">
            Contact us
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="w-full flex flex-col justify-center items-center md:hidden bg-white shadow-lg z-50">
          {navbar.map((list) => (
            <div key={list.path + list.title} className="border-b border-gray-200 p-4 w-full">
              <Link
                to={list.path}
                smooth
                duration={500}
                offset={-80}
                onClick={() => handleNavClick(list.triggerKey)}
                className="flex justify-center items-center text-black hover:text-[#026896] w-full cursor-pointer"
              >
                {list.title}
              </Link>
            </div>
          ))}
          <div className="p-4 w-full">
            <Link
              to="letsConnect"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-[#04AFFC] to-[#026896] rounded-2xl text-white py-2 px-8 cursor-pointer block text-center"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

