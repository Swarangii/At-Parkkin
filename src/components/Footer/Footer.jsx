import React from "react";
import imglogo from "../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-cd" id="contact">
      <div className="container-cd">
        <div className="footer-content-cd">
          <div className="footer-section-cd">
            <div className="footer-logo-cd">
              <img
                src={imglogo}
                alt="Eways Services-cd"
                className="footer-logo-img-cd"
              />
              <span>At Parkkin</span>
            </div>
            <p>
              Revolutionizing urban parking through smart technology and
              innovative solutions.
            </p>
            <div className="social-links-cd">
              <a href="#" className="social-link-cd">
                LinkedIn
              </a>
              <a href="#" className="social-link-cd">
                Twitter
              </a>
              <a href="#" className="social-link-cd">
                Facebook
              </a>
            </div>
          </div>
          <div className="footer-section-cd">
            <h4>Community</h4>
            <ul>
              <li>
                <a href="#users">Users</a>
              </li>
              <li>
                <a href="#vendors">Vendors</a>
              </li>
              <li>
                <a href="#admins">Super Admins</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-section-cd">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#mobile">Mobile App</a>
              </li>
              <li>
                <a href="#web">Web Platform</a>
              </li>
              <li>
                <a href="#api">Developer API</a>
              </li>
              <li>
                <a href="#integrations">Integrations</a>
              </li>
            </ul>
          </div>
          <div className="footer-section-cd">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-cd">
          <p>
            &copy; 2024 Eways Services Private Limited. All rights reserved.
          </p>
          <div className="footer-links-cd">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
