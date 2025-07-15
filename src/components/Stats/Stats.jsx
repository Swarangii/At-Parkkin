import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stat">
          <h2>99%</h2>
          <p>Accurate data based on our system</p>
        </div>
        <div className="stat">
          <h2>570K+</h2>
          <p>Users actively using the application</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
