import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Hoang Van Huy</span></h1>
        <h2>Frontend Developer</h2>
        <p>"I specialize in designing and developing high-quality, 
            responsive, and user-friendly web applications that provide 
            seamless experiences across all devices. With a strong focus on clean, 
            efficient code and modern web technologies, I create applications that 
            are not only visually appealing but also optimized for performance and 
            accessibility. My expertise includes front-end and back-end development, 
            ensuring that every project I work on is both functional and aesthetically 
            engaging. Whether it's enhancing user interactions, improving website speed, 
            or building scalable applications, my goal is to deliver exceptional digital 
            solutions tailored to user needs."</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;