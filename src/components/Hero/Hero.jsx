import React from "react";
import "./Hero.css";
import mapImage from "../../assets/map-bg.jpg"; // Add your background image here

function Hero() {
  return (
    <section className="hero">
      <img src={mapImage} alt="Map Background" className="hero__bg" />
      <div className="hero__content">
        <h1>The Solution to Your Parking Problems</h1>
        <p>
          The mobile parking app integrated with GPS makes it easier for you to
          find the nearest parking lot with a variety of price ranges.
        </p>
        <div className="hero__form">
          <input type="email" placeholder="Enter your email address" />
          <button>Get Access</button>
        </div>
        <div className="hero__tags">
          <span>🚫 No spam mail</span>
          <span>🕒 24/7 Support</span>
          <span>🎁 Free Trial 15 Days</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
