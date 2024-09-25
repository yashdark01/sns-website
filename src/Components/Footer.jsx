import React from "react";
import logo from "../../public/image262.png";

const Footer = () => {
  return (
    <div className="bg-black/75  relative z-0 bottom-0 min-w-full  text-white py-12">
      <div className="container relative z-0 overflow-hidden mx-auto py-24 ssm:py-28 msm:py-36 px-6 md:px-12 lg:px-24 grid gap-[10%] grid-cols-1 md:grid-cols-3 ">
        {/* Logo and Description Section */}
        <div className="h-[300px] overflow-hidden">
          {" "}
          {/* Set constant height */}
          <img
            src={logo}
            alt="Smart National Solutions Logo"
            className="h-24 mb-8"
          />
          <p className="text-lg leading-relaxed">
            Smart National Solutions (“SNS”) is a leading Saudi Company that
            provides technology and business consulting services ranging from
            advisory, systems integration, data services, and support.
          </p>
        </div>

        {/* Services Section */}
        <div className="h-[300px] overflow-hidden">
          {" "}
          {/* Set constant height */}
          <h4 className="font-bold text-3xl mb-4">Services</h4>
          <ul className="text-xl space-y-5">
            <li>Blogs</li>
            <li>Data Services</li>
            <li>Project Management</li>
            <li>SAP Training Saudi Arabia</li>
            <li>SAP Implementation</li>
          </ul>
        </div>

        {/* Solutions Section */}
        <div className="h-[350px] overflow-hidden">
          {" "}
          {/* Set constant height */}
          <h4 className="font-bold text-3xl mb-4">Solutions</h4>
          <ul className="text-xl space-y-5">
            <li>ERP</li>
            <li>HR</li>
            <li>Customer Experience</li>
            <li>Procurement</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" text-center  text-lg">
        <p>© 2024 Smart National Solutions (SNS). All rights reserved.</p>
        <p className="mt-2 underline">
          <a href="#" className=" hover:text-gray-300">
            Privacy & Cookies
          </a>
          &nbsp;|&nbsp;
          <a href="#" className=" hover:text-gray-300">
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
