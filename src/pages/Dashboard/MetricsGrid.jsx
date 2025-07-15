import React, { useEffect, useState } from "react";
import DonutChart from "./DonutChart.jsx";
import ProgressRing from "./ProgressRing.jsx";
import RatingsCard from "./RatingsCard.jsx";

const MetricsGrid = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  return (
    <div className="metrics-grid">
      <div className="metric-card">
        <div className="card-header">
          <h3>Traffic Precision</h3>
          <span className="card-date">{formattedDate}</span>
        </div>
        <div className="card-content">
          <DonutChart />
          <div className="delivery-stats">
            <div className="stat-item">
              <div className="stat-dot delivered"></div>
              <span>78% Easy Ride</span>
            </div>
            <div className="stat-item">
              <div className="stat-dot late"></div>
              <span>20% Traffic</span>
            </div>
            <div className="stat-item">
              <div className="stat-dot undelivered"></div>
              <span>10% Red Zone</span>
            </div>
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div className="card-header">
          <h3>Daily Tasks</h3>
          <span className="card-date">{formattedDate}</span>
        </div>
        <div className="card-content">
          <ProgressRing value={60} total={10} completed={6} />
        </div>
      </div>

      <RatingsCard />
    </div>
  );
};

export default MetricsGrid;
