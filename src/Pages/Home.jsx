import React from "react";
import HeroSection from "./home/Herosection.jsx";
import AboutSection from "./home/Aboutsection.jsx";
import ServicesSection from "./home/Servicesection.jsx";
import Innovation from "./home/Innovation.jsx";
import Solutions from "./home/Solutions.jsx";
import NationalSolutions from "./home/NationalSolution.jsx";
import ValuedClients from "./home/ValuedClients.jsx";
import LetsConnect from "./home/LetsConnect.jsx";
import FeaturesSection from "./home/FeautersSection.jsx";

const Home = () => {
  return (
    <div className=" relative z-20    font-dubai min-w-full">
      <section id="heroSection" className="h-full z-30 lg:h-auto">
        <HeroSection />
      </section>
      <div className=" relative overflow-hidden z-40 -top-44 ssm:-top-36 msm:-top-40  md:-top-36 lg:top-0">
        <section id="aboutSection">
          <AboutSection />
        </section>
        <section id="featuresSection">
          <FeaturesSection />
        </section>
        <section id="servicesSection">
          <ServicesSection />
        </section>
        <section id="innovation">
          <Innovation />
        </section>
        <section id="solutions">
          <Solutions />
        </section>
        <section id="nationalSolutions">
          <NationalSolutions />
        </section>
        <section id="valuedClients">
          <ValuedClients />
        </section>
        <section className="container mx-auto relative mt-16 md:mt-0 h-[400px] sm:h-[500px] md:h-96" id="letsConnect">
          <LetsConnect />
        </section>
      </div>
    </div>
  );
};

export default Home;
