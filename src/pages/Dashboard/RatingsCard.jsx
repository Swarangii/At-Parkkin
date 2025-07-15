import React, { useEffect, useState } from "react";

const RatingsCard = () => {
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
  const ratings = [
    { stars: 5, percentage: 84, color: "#4ecdc4" },
    { stars: 4, percentage: 9, color: "#4ecdc4" },
    { stars: 3, percentage: 4, color: "#ff8a50" },
    { stars: 2, percentage: 2, color: "#ff8a50" },
    { stars: 1, percentage: 1, color: "#ff6b8a" },
  ];

  return (
    <div className="metric-card ratings-card">
      <div className="card-header">
        <h3>Ratings</h3>
        <span className="card-date">{formattedDate}</span>
      </div>
      <div className="ratings-content">
        {ratings.map((rating, index) => (
          <div key={index} className="rating-row">
            <span className="rating-label">{rating.stars} star</span>
            <div className="rating-bar">
              <div
                className="rating-fill"
                style={{
                  width: `${rating.percentage}%`,
                  backgroundColor: rating.color,
                }}
              ></div>
            </div>
            <span className="rating-percent">{rating.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsCard;
