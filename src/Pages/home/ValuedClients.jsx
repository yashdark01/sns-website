import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import frame1 from "../../../public/image283.png"
import frame2 from "../../../public/Frame 1618873105.png"

const ValuedClients = () => {
  const clients = [
    { frame2 },
    { frame2 },
    { frame2 },
    
    
  ];

  const settings = {
    dots: false, // Disable navigation dots for a cleaner look
  infinite: true, // Enable infinite loop sliding
  speed: 5000, // Increase speed to make the scrolling continuous
  slidesToShow: 1, // Number of logos to show at once
  slidesToScroll: 1, // Number of slides to scroll at a time
  autoplay: true, // Enable auto-slide
  autoplaySpeed: 0, // Set to 0 for continuous effect
  cssEase: 'linear', // Linear easing for smooth continuous scroll
    
  };

  return (
    <div className=" min-w-full relative bg-white  my-8 esm:my-12 msm:my-16 md:my-36 lg:my-44">
        <img src={frame1} alt="" className='absolute min-w-full h-full' />
      <div className=" container  space-y-8 text-center  min-w-full py-24 lg:py-36">

        <div className=''>
             <h2 className="text-xl esm:text-2xl ssm:text-3xl msm:text-4xl sm:text-4xl lg:text-5xl llg:text-6xl font-medium  text-gray-900">Our Valued Clients</h2>
        <p className=" text-xs esm:text-sm ssm:text-base msm:text-lg md:text-xl font-semibold text-gray-600 mt-4  px-3">
          Clients who have leveraged our SAP expertise to streamline their operations and boost efficiency
        </p>
        
        </div>
        {/* Heading Section */}
       
        <div className='md:py-6'>
            <Slider {...settings} className="mt-10 min-w-full">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col justify-center gap-4 items-center min-w-full">
             <img src={frame2} alt="" className=' h-16 ssm:h-20 md:h-24 w-full' />
            </div>
          ))}
        </Slider>
        </div>
        {/* Logos Carousel Section */}
        
      </div>
    </div>
  );
};

export default ValuedClients;
