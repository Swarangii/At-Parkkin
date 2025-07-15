import React from "react";
import ImgLogo from "../../assets/logo.svg";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
const Sidebar = ({ selectedMenu, setSelectedMenu }) => {
  const navigate = useNavigate();
  const menuItems = [
    {
      id: "dashboard",
      icon: "📊",
      label: "Dashboard",
      path: "/venderdashboard",
    },
    {
      id: "parking-zones",
      icon: "🅿️",
      label: "Parking Zones",
      path: "/parkingzones",
    },
    {
      id: "parking-partners",
      icon: "🤝",
      label: "Parking Partners",
      active: true,
      path: "/parkingpartners",
    },
    // { id: "road-side-partners", icon: "🛣️", label: "Road Side Partners" },
    { id: "community", icon: "👥", label: "Community", path: "/community" },
    { id: "complaints", icon: "⚠️", label: "Complaints", path: "/complaint" },
    {
      id: "nearby-places",
      icon: "📍",
      label: "Nearby Places",
      path: "/near-by-places",
    },
    // { id: "ads", icon: "📢", label: "Ads" },
    {
      id: "police-officers",
      icon: "👮",
      label: "Police Officers",
      path: "/police-officer",
    },
    { id: "vehicles", icon: "🚗", label: "Vehicles", path: "/vehicles" },
    { id: "payments", icon: "💳", label: "Payments", path: "/payment" },
    // { id: "wallet", icon: "💰", label: "Wallet" },
    { id: "reports", icon: "📊", label: "Reports", path: "/report" },
    // { id: "vouchers", icon: "🎫", label: "Vouchers" },
    // { id: "users", icon: "👤", label: "Users" },
    { id: "settings", icon: "⚙️", label: "Settings", path: "/settings" },
  ];

  return (
    <div className="sidebar-ud">
      <Link className="logo-section-ud">
        <img src={ImgLogo} alt="Eways Services" className="logo-ud" />
        <span className="brand-name-vender">At Parkkin</span>
      </Link>

      <nav className="nav-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            // Use the className prop as a function to apply 'active' class
            // NavLink automatically applies 'active' if the path matches
            // 'end' prop ensures exact matching for parent routes like '/' or '/dashboard'
            className={({ isActive }) =>
              `menu-item-ud ${isActive ? "active" : ""}`
            }
            // No need for onClick and navigate here, NavLink handles navigation
          >
            <span className="menu-icon-vender">{item.icon}</span>
            <span className="menu-label-vender">{item.label}</span>
          </NavLink>
          // <div
          //   key={item.id}
          //   className={`menu-item ${item.active ? "active" : ""} ${
          //     selectedMenu === item.id ? "selected" : ""
          //   }`}
          //   onClick={() => {
          //     setSelectedMenu(item.id);
          //     navigate(item.path);
          //   }}
          // >
          //   <span className="menu-icon">{item.icon}</span>
          //   <span className="menu-label">{item.label}</span>
          // </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
