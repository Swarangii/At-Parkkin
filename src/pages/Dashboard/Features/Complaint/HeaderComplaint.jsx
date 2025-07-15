import React from "react";
import ImgLogo from "../../../../assets/logo.svg";
import "./Complaint.css";
import { Link } from "react-router-dom";
const HeaderComplaint = () => {
  return (
    <header className="header-complaint">
      <div className="container-complaint">
        <div className="header-content-complaint">
          <div className="logo-section-complaint">
            <img
              src={ImgLogo}
              alt="Eways Services"
              className="logo-complaint"
            />
            <div className="brand-text-complaint">
              <h1>At Parkkin</h1>
              <span>Smart Parking Solutions</span>
            </div>
          </div>

          <nav className="nav-menu-complaint">
            <Link to="/dashboard" className="nav-link-complaint">
              Home
            </Link>
            <a href="#complaint" className="nav-link-complaint">
              Complaint
            </a>
            <a href="#complaint" className="nav-link-complaint">
              Contact Us
            </a>
          </nav>

          <div className="mobile-menu-btn-complaint">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComplaint;
