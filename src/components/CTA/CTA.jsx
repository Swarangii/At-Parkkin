import React from "react";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta__content">
        <h2>Join the Future of Smart Parking 🚗</h2>
        <p>Sign up now to reserve your spot and skip the hassle.</p>
        <div className="cta__form">
          <input type="email" placeholder="Enter your email" />
          <button>Get Access</button>
        </div>
        <p className="cta__note">No spam. Cancel anytime.</p>
      </div>
    </section>
  );
}

export default CTA;
