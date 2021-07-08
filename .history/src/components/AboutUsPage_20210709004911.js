import React from 'react';
import '../App.css';
import './AboutRobot.css';


function AboutUsRobot() {
  return (

    <div className='hero-container'>
    <div className="Row">
    <div className="Column">
    <img className='ourpictures' src='/images/pinar.jpg'/> <p>Pınar Oğuz Ekim</p><p>Asst. Prof. Pınar Oğuz Ekim</p><p>pinar.ekim@ieu.edu.tr</p>
    </div>
    <div className="Column">
    <img className='ourpictures' src='/images/melike.jpeg'/> <p>Melike Bilen</p><p>Computer Engineering</p><p>bilenmelike@gmail.com</p>
    </div>
    <div className="Column">
    <img className='ourpictures' src='/images/nergis.jpeg'/><p>Nergis Gizem Yılmaz</p><p>Mechatronics and Computer Engineering</p><p>nergisgizem.yilmaz@gmail.com</p>
    </div>
    <div className="Column">
    <img className='ourpictures' src='/images/mehmet.jpeg'/><p>Mehmet Alp Çankaya</p><p>Mechanical Engineering</p><p>mehmetalpcankaya@gmail.com</p>
    </div>
    <div className="Column">
    <img className='ourpictures' src='/images/orhun.png'/><p>Orhun Onar</p><p>Mechatronics Engineering</p><p>orhunonar@outlook.com</p>
    </div>


    </div>

      <video className='frontvideo' src='/videos/robotvideo2.mp4' autoPlay loop muted />
    </div>
  
  );
}

export default AboutUsRobot;