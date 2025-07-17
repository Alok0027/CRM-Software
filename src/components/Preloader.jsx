import React from 'react';
import zestful from '../assets/clientnestlogo.jpeg';
import './animations.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={zestful} alt="Zestful Logo" className="preloader-logo" />
      <div className="loading-bar"></div>
    </div>
  );
};

export default Preloader;
