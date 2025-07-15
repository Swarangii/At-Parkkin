import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__heading">Why At-Parkkin?</h1>
        <p className="about__text">
          At-Parkkin is your smart companion for parking in crowded cities. We
          help users book slots in advance, avoid long waiting times, and reduce
          the stress of city travel. Our mission is to simplify your parking
          experience with data-driven efficiency and seamless user design.
        </p>

        <div className="about__cards">
          <div className="about__card">
            <h2>🚀 Our Mission</h2>
            <p>
              To create smarter cities by optimizing parking systems and saving
              people's valuable time every day.
            </p>
          </div>
          <div className="about__card">
            <h2>🌟 Our Vision</h2>
            <p>
              To be the most trusted platform for smart parking solutions around
              the world.
            </p>
          </div>
        </div>

        {/* Optional Team Section */}
        {/* <div className="about__team">
          <h2>🧑‍💼 Meet the Team</h2>
          <p>Coming soon...</p>
        </div> */}
      </div>
    </section>
  );
}

export default AboutSection;
