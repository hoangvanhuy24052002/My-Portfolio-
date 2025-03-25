import React from 'react';
import '../styles/About.css';
import image from '../image/image.png';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src={image} 
              alt="Profile" 
              className="profile-image" 
            />
          </div>
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <h3>Who am I?</h3>
            <p>
              Hello! I'm a passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript. 
              I specialize in building responsive, user-friendly web applications using modern frameworks like React.
            </p>
            <p>
              My journey in web development started in [Year], and since then, I've been constantly learning 
              and improving my skills to stay up-to-date with the latest technologies and best practices.
            </p>
            <h3>Education & Experience</h3>
            <p>
              I graduated with a degree in [Your Degree] from [University/College]. 
              I've worked on various projects, from small business websites to complex web applications, 
              gaining valuable experience along the way.
            </p>
            <div className="about-buttons">
              <button className="btn primary-btn">Get In Touch</button>
              <button className="btn secondary-btn">Download Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;