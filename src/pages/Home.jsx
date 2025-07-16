import React from 'react';

import Hero from '../components/Hero';

import Benefit from '../components/Benefit';
import Features from '../components/Features';
import Integration from '../components/Integration';
import Why from '../components/Why';
import MobileFeature from '../components/Mobilefeature';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';


const Home = () => {
  return (
    <>
      
      <Hero />
      <Benefit />
      
      <Features />
      <Integration />
      <Why />
      <MobileFeature />
      <Testimonials />
      <Pricing />
      <Blog />
      
    </>
  );
};

export default Home;
