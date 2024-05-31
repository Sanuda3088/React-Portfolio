import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container" id='contact'>
      <h1 className="footer-heading">
        Find <span className="highlight">ME On</span>
      </h1>
      <div className="footer-grid">
        <a href="https://www.linkedin.com/in/sanuda-senod-7bb201214" className="footer-link">
          <div className="icon-container">
            <FaLinkedin className="icon" />
          </div>
          <div className="icon-label">LinkedIn</div>
        </a>

        <a href="https://github.com/Sanuda3088" className="footer-link">
          <div className="icon-container">
            <FaGithub className="icon" />
          </div>
          <div className="icon-label">GitHub</div>
        </a>

        <a href="https://medium.com/@sanudasenod446" className="footer-link">
          <div className="icon-container">
            <FaMedium className="icon" />
          </div>
          <div className="icon-label">Medium</div>
        </a>
      </div>
      <div className="footer-note">
        Sanuda Senod | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
