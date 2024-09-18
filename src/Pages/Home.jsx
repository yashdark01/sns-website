import React from 'react'
import HeroSection from './home/Herosection.jsx'
import AboutSection from './home/Aboutsection.jsx'
import ServicesSection from './home/Servicesection.jsx'
import Innovation from './home/Innovation.jsx'
import Solutions from './home/Solutions.jsx'
import NationalSolutions from './home/NationalSolution.jsx'
import ValuedClients from './home/ValuedClients.jsx'
import LetsConnect from './home/LetsConnect.jsx'
import FeaturesSection from './home/FeautersSection.jsx'

const Home = () => {

  return (
    <div className=' relative z-20   font-dubai min-w-full'>
      <section id="heroSection">
        <HeroSection />
      </section>
      <section id="aboutSection">
        <AboutSection />
      </section>
      <section id="featuresSection">
        <FeaturesSection/>
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
      <section id="letsConnect">
        <LetsConnect />
      </section>
    </div>
  )
}

export default Home