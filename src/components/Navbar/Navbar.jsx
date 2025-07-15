import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import "./Navbar.css";
import imglogo from "../../assets/logo.svg";
import { SignUp } from "@clerk/clerk-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={imglogo} alt="eways logo" className="eways_logo" />
        <h5>At-Parkkin</h5>
      </div>

      {/* Hamburger Icon */}
      <div className="navbar__toggle" onClick={toggleNavbar}>
        &#9776; {/* Unicode character for hamburger icon */}
      </div>

      {/* Navigation Links */}
      {/* Conditionally add 'active' class based on isOpen state */}
      <nav className={`navbar__links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <a href="#features" onClick={() => setIsOpen(false)}>
          Features
        </a>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        {/* <a href="#resources" onClick={() => setIsOpen(false)}>
          Resources
        </a>
        <a href="#blog" onClick={() => setIsOpen(false)}>
          Blog
        </a> */}
        {/*
          Consider if these buttons should be part of the mobile dropdown
          If yes, they should be inside this <nav> element.
          If no, they should remain outside or be conditionally rendered.
          For this example, I'm keeping them inside the nav for mobile.
        */}
        {/* <button className="navbar__btn">
          <Link to="/login" onClick={() => setIsOpen(false)}>
            SignUp
          </Link>
        </button> */}
        <button className="navbar__btn">
          <Link to="/signup" onClick={() => setIsOpen(false)}>
            Sign-up / Sign-in
          </Link>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
