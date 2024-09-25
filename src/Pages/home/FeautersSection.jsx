import React, { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { HiLink } from "react-icons/hi2";

const FeaturesSection = () => {
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user.aboutTrigger) {
            console.log("Feature section triggered!");
        }
    }, [user.aboutTrigger]);

    const features = [
        {
            title: "Proven Expertise and Success",
            icon: <HiLink className="size-12 msm:size-16 text-white"/> , // Replace with actual icon path
            animation: user.aboutTrigger ? "animate-in slide-in-from-top" : "",
            aosAnimation :"fade-up",
        },
        {
            title: "Comprehensive Technology and Business Consulting",
            icon: <HiLink className="size-12 msm:size-16 text-white"/>, // Replace with actual icon path
            animation: user.aboutTrigger ? "animate-in slide-in-from-bottom " : "",
            aosAnimation :"fade-down",
        },
        {
            title: "Alignment with Vision 2030",
            icon: <HiLink className="size-12 msm:size-16 text-white"/>, // Replace with actual icon path
            animation: user.aboutTrigger ? "animate-in slide-in-from-top " : "",
            aosAnimation :"fade-up",
        },
    ];

    return (
        <div className="container relative z-50 ssm:my-2 mx-auto grid grid-cols-1 md:grid-cols-3 sm:gap-8 md:gap-2 lg:gap-8 px-4 py-6 ssm:py-16">
            {features.map((feature, index) => (
                <div 
                    key={index}
                    data-aos={feature.aosAnimation}
                    className={`flex relative gap-6 ssm:gap-8 msm:gap-12 flex-col items-center text-center p-6 ${feature.animation}`}
                >
                    {/* Icon */}
                    <div className= " flex justify-center items-center bg-white p-6 rounded-full bg-gradient-to-r from-[#04AFFC] to-[#026896] shadow-sm shadow-yellow-200">
                        <span className="flex justify-center items-center">{feature.icon}</span>
                    </div>
                    {/* Title */}
                    <div className="flex justify-center items-center h-24 msm:h-32 w-full ">
                        <h3 className="flex justify-center items-center text-white text-center px-2 text-sm sm:text-lg md:text-base lg:text-xl font-semibold h-full w-full rounded-2xl bg-gradient-to-r from-[#04AFFC] to-[#026896]">
                            {feature.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturesSection;
