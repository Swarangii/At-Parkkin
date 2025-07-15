import React, { useEffect, useState } from "react";

const MapSection = () => {
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
  const routes = [
    {
      id: "JYL 2",
      time: "16:00 - 21:00",
      progress: "23 / 56",
      status: "active",
    },
    {
      id: "SJA",
      time: "16:00 - 21:00",
      progress: "01 / 83",
      status: "pending",
    },
    {
      id: "JYL 3",
      time: "16:00 - 21:00",
      progress: "22 / 74",
      status: "active",
    },
    {
      id: "JYL 3",
      time: "16:00 - 21:00",
      progress: "22 / 74",
      status: "active",
    },
  ];

  return (
    <div className="map-section-d">
      <div className="map-card-d">
        <div className="map-header-d">
          <h3>{formattedDate}</h3>
        </div>
        <div className="map-container-d">
          <div className="map-view-d">
            <div className="map-markers-d">
              {/* Green markers */}
              <div className="marker green" style={{ top: "20%", left: "60%" }}>
                15
              </div>
              <div className="marker green" style={{ top: "25%", left: "65%" }}>
                16
              </div>
              <div className="marker green" style={{ top: "35%", left: "55%" }}>
                10
              </div>
              <div className="marker green" style={{ top: "45%", left: "70%" }}>
                14
              </div>

              {/* Blue markers */}
              <div className="marker blue" style={{ top: "60%", left: "45%" }}>
                11
              </div>
              <div className="marker blue" style={{ top: "65%", left: "40%" }}>
                13
              </div>
              <div className="marker blue" style={{ top: "70%", left: "50%" }}>
                2
              </div>

              {/* Pink markers */}
              <div className="marker pink" style={{ top: "15%", right: "15%" }}>
                36
              </div>
              <div className="marker pink" style={{ top: "25%", right: "20%" }}>
                20
              </div>
              <div className="marker pink" style={{ top: "35%", right: "10%" }}>
                10
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="route-status">
        <div className="route-header">
          <h4>Route Status</h4>
        </div>
        <div className="route-list">
          {routes.map((route, index) => (
            <div key={index} className="route-item">
              <div className={`route-indicator ${route.status}`}></div>
              <div className="route-info">
                <span className="route-id">{route.id}</span>
                <span className="route-time">{route.time}</span>
              </div>
              <span className="route-progress">{route.progress}</span>
            </div>
          ))}
        </div>
        <button className="open-routes-btn">
          Open Routes
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default MapSection;
