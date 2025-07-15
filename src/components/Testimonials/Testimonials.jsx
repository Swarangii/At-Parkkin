import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Our Team</h2>
      <p className="subtitle">Developed by Team of Eways Intern.</p>

      <div className="testimonials__grid">
        <div className="testimonial__card">
          <p>
            "Developer - This app literally saves 30 minutes of my day! Love it
            💙"
          </p>
          <h4>- Swarangi Singh Yadav</h4>
        </div>
        <div className="testimonial__card">
          <p>"Developer - The booking system is so smooth and stress-free."</p>
          <h4>- Areen Chouksey</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
