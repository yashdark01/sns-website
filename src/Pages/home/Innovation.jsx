import React from "react";
import { IoPricetagOutline } from "react-icons/io5";

const Innovation = () => {
  return (
    <div className="container min-w-full my-16 esm:my-20 ssm:my-24 msm:my-32 py-12 esm:py-14 ssm:py-16 msm:py-20 px-2 esm:px-3 ssm:px-4 msm:px-6 md:px-10 lg:px-14 llg:px-28 xl:px-40 flex flex-col justify-center items-center bg-gradient-to-r from-[#04AFFC] to-[#026896] text-white">
      <div className=" container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-xl esm:text-2xl ssm:text-3xl msm:text-4xl sm:text-4xl md:text-5xl lg:text-6xl llg:text-7xl font-semibold mb-8 text-center w-full lg:w-3/4">
          Innovation & Solving Complex Challenges for Your Business
        </h2>
        <p className="py-8 esm:py-12 ssm:py-6 lg:py-20 text-base esm:text-lg md:text-2xl lg:text-3xl text-center">
          Let us equip your business with cutting-edge solutions to stay ahead
          in a rapidly evolving digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="space-y-6 esm:space-y-8 ssm:space-y-10 msm:space-y-12">
          <h3 className="text-2xl esm:text-3xl ssm:text-6xl font-extrabold">
            80+
          </h3>
          <p className="text-sm esm:text-base ssm:text-xl">
            Successful Projects
          </p>
        </div>
        <div className="space-y-6 esm:space-y-8 ssm:space-y-10 msm:space-y-12">
          <h3 className="text-2xl esm:text-3xl ssm:text-6xl font-extrabold">
            50+
          </h3>
          <p className="text-sm esm:text-base ssm:text-xl">
            Successful Implementations
          </p>
        </div>
        <div className="space-y-6 esm:space-y-8 ssm:space-y-10 msm:space-y-12">
          <h3 className="text-2xl esm:text-3xl ssm:text-6xl font-extrabold">
            20+
          </h3>
          <p className="text-base esm:text-base ssm:text-xl">AMS Projects</p>
        </div>
        <div className="space-y-6 esm:space-y-8 ssm:space-y-10 msm:space-y-12">
          <h3 className="text-2xl esm:text-3xl ssm:text-6xl font-extrabold">
            200+
          </h3>
          <p className="text-sm esm:text-base ssm:text-xl">
            Experienced Consultants
          </p>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
