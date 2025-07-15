import React from "react";

const DonutChart = () => {
  return (
    <div className="donut-chart">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#4ecdc4"
          strokeWidth="20"
          strokeDasharray="220 280"
          strokeDashoffset="0"
          transform="rotate(-90 60 60)"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#ff8a50"
          strokeWidth="20"
          strokeDasharray="56 280"
          strokeDashoffset="-220"
          transform="rotate(-90 60 60)"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#ff6b8a"
          strokeWidth="20"
          strokeDasharray="28 280"
          strokeDashoffset="-276"
          transform="rotate(-90 60 60)"
        />
      </svg>
    </div>
  );
};

export default DonutChart;
