import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaEnvelope, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Aarohi</h3>
          <p className="footer-text">
            Aarohi is the annual freshers' welcome event organized by VNIT Nagpur to introduce
            new students to campus life, academics, and opportunities.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <FaEnvelope className="footer-icon" />
              <span>vnitaarohi25@gmail.com</span>
            </li>
           
            <li>
              <span>VNIT Nagpur - 440010</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            
            <a href="https://www.instagram.com/aarohi_vnitnagpur/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@VNITAarohi" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/aarohivnit/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://x.com/aarohi_vnit" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.facebook.com/AarohiWorld/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timeline">Event Timeline</Link>
            </li>
            <li>
              <Link to="/profiles">Student Profiles</Link>
            </li>
            <li>
              <Link to="/resources">Academic Resources</Link>
            </li>
          </ul>
        </div>

        

        
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Aarohi-25. All Rights Reserved. |{' '}
          <span className="gold-text">VNIT Nagpur</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;