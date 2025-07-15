import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features" id="features">
      <div className="features__title">
        <h2>The Best Features for You</h2>
        <p>We offer the smartest tools to solve your parking problems</p>
      </div>

      <div className="features__grid">
        <div className="feature__card">
          <h3>📍GPS Integration</h3>
          <p>
            Find the nearest parking spots instantly using real-time location.
          </p>
        </div>
        <div className="feature__card">
          <h3>💲Price Comparison</h3>
          <p>Compare prices at a glance and pick what suits you best.</p>
        </div>
        <div className="feature__card">
          <h3>⚡Instant Booking</h3>
          <p>Reserve your slot in seconds — zero waiting time.</p>
        </div>
        <div className="feature__card">
          <h3>🔒Secure Access</h3>
          <p>Your data and parking access are encrypted & safe.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
