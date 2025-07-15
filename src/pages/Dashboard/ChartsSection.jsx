import React from "react";
import BarChart from "./BarChart.jsx";

const ChartsSection = () => {
  return (
    <div className="charts-section">
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h3>Traffic Insights</h3>
            <div className="total-deliveries">
              <span className="total-number">2,940</span>
              <span className="total-label">Total Parkings</span>
            </div>
          </div>
          <div className="time-filter">
            <button className="time-btn">Days</button>
            <button className="time-btn active">Weeks</button>
            <button className="time-btn">Months</button>
          </div>
        </div>
        <BarChart />
      </div>
    </div>
  );
};

export default ChartsSection;
