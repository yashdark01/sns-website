import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import {ButtonOne} from "../../Components/Button"
import National from '../../assets/National.png'
import { BsGraphUpArrow } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
const solutions = [
    { title: 'Supporting Saudi Vision 2030', icon: '2023 vision'  },
    { title: 'Sustainable Growth', icon: <BsGraphUpArrow className="size-8 "/> },
    { title: 'Innovation', icon: <GiProcessor className="size-8"/> },
  ];


const NationalSolutions = () => {

  const {user} = useContext(UserContext);

    useEffect(() => {
      
        if(user.solutionsTrigger)
        {
            console.log("Solution Section triggered !");
            
        }
    }, [user.solutionsTrigger]);

  return (
    <div className="container  h-full mx-auto bg-white py-8 ssm:py-10 msm:py-12 px-2 esm:px-3 ssm:px-4   msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40 flex flex-col lg:flex-row items-center space-y-12 md:space-y-8 lg:space-y-0 lg:space-x-12 ">
      
      {/* Image Section */}
      <div className="relative -left-6 z-0 overflow-y-hidden   h-full w-full lg:w-[50%]">
        <div
        data-aos="zoom-in-right"
        className={` relative z-0 rounded-2xl ${user.solutionsTrigger ? "animate-in fade-in" : ""} `}
        >
        <img
          src={National}
          alt="National Solutions"
          className="w-auto h-[450px] ssm:h-[550px] relative left-6 ssm:left-8 msm:left-9 md:left-10 z-0"
        />
        </div>
        
        
        {/* Overlay Items */}
        {/* <div
        data-aos="fade-right" className={`absolute z-[9999] left-3 sm:left-1 top-[40%]   space-y-4 h-full w-[80%]  ${user.solutionsTrigger ? "animate-in slide-in-from-left" : ""} `}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-blue-100 p-2 esm:px-3 ssm:px-4 rounded-lg flex justify-center items-center shadow-md  max-w-[80%] llg:max-w-[60%]`}
              style={{ marginLeft: `${index * 10}%` }}
            >
              <span className="text-gray-800 text-xs md:text-base font-semibold w-full">
                {solution.title}
              </span>
              <span className="ml-2 bg-[#04AFFC] text-[0.5rem]  flex justify-center items-center size-8 px-2 text-white  rounded-full ">
                {solution.icon}
              </span>
            </div>
          ))}
        </div> */}
      </div>

      {/* Text Section */}
      <div
      data-aos="fade-left" className={`lg:w-[60%] space-y-2 ssm:space-y-8 lg:space-y-10 pb-4 ${user.solutionsTrigger ? "animate-in slide-in-from-right" : ""} `}>
        <h2 className="text-xl esm:text-2xl ssm:text-3xl msm:text-4xl sm:text-4xl lg:text-5xl llg:text-6xl font-medium text-gray-900 ">
          Smart National Solutions Objectives
        </h2>
        <p className="text-sm esm:text-base ssm:text-lg msm:text-xl lg:text-sm font-semibold  mt-4  text-gray-800">
          A smart national solution is about creating a connected, efficient, and sustainable society through the intelligent use of technology and data.
        </p>
        <p className="text-xs esm:text-sm ssm:text-base  ms:text-lg llg:text-xl xl:text-2xl  text-gray-600 font-light mt-4">
          For a seamless and successful ERP deployment, we specialize in methodically developing a blueprint based on your specific business as well as Industry Best Practices. We always remain by your side throughout the engagement to ensure you get the most out of your technological investment.
        </p>
        <ButtonOne text={"Know More"} value={false}  />
      </div>
    </div>
  );
};

export default NationalSolutions;