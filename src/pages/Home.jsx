import React from 'react';

import Hero from '../components/Hero';

import Features from '../components/Features';
import Discover from '../components/Discover';
import Integration from '../components/Integration';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Why from '../components/Why';


const Home = () => {
  return (
    <>
      
      <Hero />
      <Discover />
      <Features />
      <Why />
      <Integration />
      <Testimonials />
      <Pricing />
      <Blog />
      
    </>
  );
};

export default Home;
