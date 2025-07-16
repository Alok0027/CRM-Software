import React from 'react';

import Hero from '../components/Hero';
import Logo from '../components/Logo';
import Benefit from '../components/Benefit';
import Features from '../components/Features';
import MobileFeature from '../components/MobileFeature';
import Testimonials from '../components/Testimonials';


const Home = () => {
  return (
    <>
      
      <Hero />
      <Benefit />
      <Logo />
      <Features />
      <MobileFeature />
      <Testimonials />
      
    </>
  );
};

export default Home;
