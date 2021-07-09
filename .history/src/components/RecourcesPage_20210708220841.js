import React from 'react';
import '../App.css';
import './AboutRobot.css';
import HeroSection from '../../src/components/HeroSection';

function ResourcesPage() {
  return (

    <div className='resources'>
    <>
    <HeroSection />
    </>
        <h1>The Github Pages</h1>
        <h3>This project is implemented with Python, Firebase and React. </h3>
        <ul>
        <h3>If you would like to learn more about how the TDOA algorithm is implemented with Python, you can take a look at the following github repository. You can read the README. file and follow the steps to use it.</h3>
        <div className='githubLink'>
          <a  href="https://github.com/melikebilen/TDOA_Project/tree/tdoaFirebase" target="blank">The github repo for Python code</a>
        </div>
        <h3>If you would like to learn more about how this website is built with React, you can take a look at the following github repository. You can read the README. file and follow the steps to use it.</h3>
        <div className='githubLink'>
        <a href="https://github.com/melikebilen/TDOA_Project" target="blank">The github repository for React code</a>
        </div>
        </ul>
    </div>
  );
}

export default ResourcesPage;