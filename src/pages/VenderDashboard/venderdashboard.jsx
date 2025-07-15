import React, { useState } from "react";
import ImgLogo from "../../assets/map-bg.jpg";
import Header from "./components/Header";
import Sidebar from "./components/SidebarVen";
import AdminProfile from "./components/AdminProfile";
import ParkingSpaces from "./components/ParkingSpaces";
import StatsCards from "./components/StatsCard";
import Footer from "../../components/Footer/Footer";
import "./VenderDashboard.css";
function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  return (
    <div className="dashboard-vender">
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="main-content-vender">
        <Header />
        <div className="content-area-vender">
          <div className="left-section-vender">
            <div className="breadcrumb-vender">
              Parking Partners / Royal Parking Plaza
            </div>
            <div className="tabs-vender">
              <button className="tab-vender active-vender">Spaces</button>
              <button className="tab-vender">History</button>
              <button className="tab-vender">Payments</button>
              <button className="tab-vender">Spot Profile</button>
              <button className="tab-vender">Reviews</button>
            </div>
            <ParkingSpaces />
          </div>
          <div className="right-section-vender">
            <StatsCards />
            <AdminProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
