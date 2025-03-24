import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <h2>Frontend Developer</h2>
        <p>I build responsive and user-friendly web applications</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;