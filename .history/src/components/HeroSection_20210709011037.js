import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://melikebilen.github.io/react-deneme-2/videos/robot.mp4' autoPlay loop muted />
    </div>
  );
}

export default HeroSection;