import React, { useEffect, useState } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <div className="header">
      <h1 className="page-title">Dashboard</h1>
      <div className="header-right">
        <div className="filter-dropdown">
          <span>
            {formattedDate} | {formattedTime}
          </span>
          <span className="dropdown-arrow">▼</span>
        </div>
        <div className="date-badge">Profile</div>
      </div>
    </div>
  );
};

export default Header;
