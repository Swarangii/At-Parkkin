import React from "react";

const ProgressRing = ({ value, total, completed }) => {
  const percentage = (completed / total) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = `${
    (percentage / 100) * circumference
  } ${circumference}`;

  return (
    <div className="progress-ring-container">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#2a2f42"
          strokeWidth="12"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="12"
          strokeDasharray={strokeDasharray}
          strokeDashoffset="0"
          transform="rotate(-90 60 60)"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#8b5fbf" />
            <stop offset="100%" stopColor="#4f8ff7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="progress-text">
        <div className="progress-number">{completed}</div>
        <div className="progress-total">/{total}</div>
      </div>
      <div className="progress-percentage">{value}%</div>
      {/* <div className="progress-label">Done</div> */}
    </div>
  );
};

export default ProgressRing;
