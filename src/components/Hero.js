import React from 'react';
import Particle from './Particles';
import TextEffects from './TextEffects';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <div className='hero-container'>
      <Particle/>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">
            HI, I&apos;m <span className="highlight">SANUDA</span>
          </h1>
          <TextEffects />
          <p className='hero-description'>
            Welcome to my digital playground, where every pixel tells a story. As a fullstack developer, I bring ideas to life with passion and precision, crafting immersive user experiences that leaves a long lasting impression.
          </p>
        </div>
        <div className='hero-image-container'>
          <div className='hero-image-wrapper'>
            <img src="/images/u1.jpg" alt="user" className="hero-image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
