import React from "react";

const BarChart = () => {
  const data = [
    { day: "Monday", value: 350, height: 35 },
    { day: "Tuesday", value: 410, height: 41 },
    { day: "Wednesday", value: 480, height: 48 },
    { day: "Thursday", value: 390, height: 39 },
    { day: "Friday", value: 620, height: 62 },
    { day: "Saturday", value: 500, height: 50 },
    { day: "Sunday", value: 310, height: 31 },
  ];

  return (
    <div className="bar-chart">
      <div className="chart-grid">
        {[650, 600, 550, 500, 450, 400, 350, 300, 250].map((value, index) => (
          <div key={index} className="grid-line">
            <span className="grid-label">{value}</span>
          </div>
        ))}
      </div>
      <div className="bars-container">
        {data.map((item, index) => (
          <div key={index} className="bar-group">
            <div className="bar-wrapper">
              <div className="bar" style={{ height: `${item.height}%` }}>
                <span className="bar-value">{item.value}</span>
              </div>
            </div>
            <span className="bar-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
