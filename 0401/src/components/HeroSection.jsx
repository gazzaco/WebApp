import React from 'react';

const HeroSection = ({ title, description, backgroundImage }) => {
  return (
    <section className="hero-section">
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="hero-content">
        <h2 className="hero-title orbitron">{title}</h2>
        <p className="hero-desc">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
