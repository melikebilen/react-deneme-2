import React from 'react';
import '../App.css';
import './AboutRobot.css';

function AboutRobot() {
  return (
    <div className='hero-container'>
    <div className='Row'>
      <img className='robotpictures' src='https://melikebilen.github.io/react-deneme-2/images/robotimg.JPG'/>
      <div className='Column'><h2>Materials</h2><p>Motor</p><p>Lipo battery</p><p>Sensor</p><p>Battery Charger</p><p>PLA Filament</p><p>Arduino</p><p>Jumper</p><p>Drunk wheel 14mm</p><p>70x8 mm wheel</p><p>Encoder Motor Driver</p><p>Regulator</p><p>Spare Motor Driver</p><p>Klon Arduino Uno </p><p>Breadboard</p><p>HC05</p><p>32 GB SD CARD</p></div>
    </div>
    
      <video className='frontvideo' src='/videos/robotvideo2.MP4' autoPlay loop muted />
    </div>
  );
}

export default AboutRobot;