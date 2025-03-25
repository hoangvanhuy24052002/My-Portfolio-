import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    submitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        isError: true,
        submitted: false
      });
      return;
    }
    
    // Here I would typically send the form data to a server or API
    // For now, we'll just simulate a successful submission
    setFormStatus({
      message: 'Your message has been sent successfully!',
      isError: false,
      submitted: true
    });
    
    // Reset form fields after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me for any questions or opportunities!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h4>Email</h4>
                <a href="mailto:your.email@example.com">hoangvanhuy2405@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-text">
                <h4>Phone</h4>
                <a href="tel:+1234567890">+1 (236) 979-8675</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Burnaby, BC, Canada</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/hoangvanhuy24052002" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/HuyHoang24052002/" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3>Send Me a Message</h3>
          
          {formStatus.message && (
            <div className={`form-status ${formStatus.isError ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;