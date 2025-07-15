import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import MetricsGrid from "./MetricsGrid.jsx";
import ChartsSection from "./ChartsSection.jsx";
import MapSection from "./MapSection.jsx";
import "./Dashboard.css";
const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  return (
    <div className="dashboard">
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <MetricsGrid />
          <div className="dashboard-row">
            <ChartsSection />
            <MapSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
