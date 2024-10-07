import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import lineElement from '../../../public/line-element.png';
import Group1000002873 from '../../../public/Group 1000002873.png';

const AnimatedCounter = ({ end, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="space-y-6 esm:space-y-8 ssm:space-y-10 msm:space-y-12">
      <h3 className="text-2xl esm:text-3xl ssm:text-6xl font-extrabold">
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={2.5}
            suffix="+"
          />
        ) : "0+"}
      </h3>
      <p className="text-sm esm:text-base ssm:text-xl">{title}</p>
    </div>
  );
};

const Innovation = () => {
  return (
    <div className="relative container min-w-full my-16 esm:my-20 ssm:my-24 msm:my-32 py-12 esm:py-14 ssm:py-16 msm:py-20 px-2 esm:px-3 ssm:px-4 msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40 flex flex-col justify-center items-center bg-gradient-to-r from-[#04AFFC] to-[#026896] text-white">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[20%] right-[9%] size-44 bg-[#026896] rounded-full opacity-80"></div> 
        <div className="absolute top-[14%] right-[4%] size-36 bg-[#65bce4] rounded-full opacity-20"></div>
        <div className="absolute top-[15%] right-[1%] z-20">
          <img className="" src={lineElement} alt="" />
        </div>
        <div className="absolute top-[8%] left-[5%] z-20">
          <img className="" src={Group1000002873} alt="" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-xl esm:text-2xl ssm:text-3xl msm:text-4xl sm:text-4xl md:text-5xl lg:text-6xl llg:text-7xl font-semibold mb-8 text-center w-full lg:w-3/4">
          Innovation & Solving Complex Challenges for Your Business
        </h2>
        <p className="py-8 esm:py-12 ssm:py-6 lg:py-20 text-base esm:text-lg md:text-2xl lg:text-3xl text-center">
          Let us equip your business with cutting-edge solutions to stay ahead
          in a rapidly evolving digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <AnimatedCounter end={80} title="Successful Projects" />
        <AnimatedCounter end={50} title="Successful Implementations" />
        <AnimatedCounter end={20} title="AMS Projects" />
        <AnimatedCounter end={200} title="Experienced Consultants" />
      </div>
    </div>
  );
};

export default Innovation;