import React, { useState } from "react";
import "./superadmindash.css";
import imgLogo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { path } from "framer-motion/client";
const superadmindash = () => {
  const [selectedMenu, setSelectedMenu] = useState("overview");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const mainMenuItems = [
    { id: "overview", label: "Overview", icon: "📊", path: "/dashboard" },
    // { id: "leaderboard", label: "Leaderboard", icon: "🏆", path: "/" },
    {
      id: "spreadsheets",
      label: "Spreadsheets",
      icon: "📋",
      path: "/spreadsheet",
    },
    // { id: "administration", label: "Administration", icon: "⚙️", path: "/" },
    { id: "sales", label: "Sales", icon: "💰", path: "/sales" },
    { id: "schedule", label: "Schedule", icon: "📅", path: "/schedule" },
  ];

  const helpMenuItems = [
    {
      id: "messages",
      label: "Messages",
      icon: "💬",
      badge: "12",
      path: "/message",
    },
    { id: "library", label: "Library", icon: "📚", path: "/library" },
    { id: "settings", label: "Settings", icon: "⚙️", path: "/settings-admin" },
    { id: "support", label: "Support", icon: "🆘", path: "/support" },
  ];

  const metrics = [
    {
      title: "Total Revenue",
      value: "₹ 27,632",
      change: "+2.5%",
      positive: true,
    },
    {
      title: "Active Bookings",
      value: "20199",
      change: "+8.5%",
      positive: true,
    },
    {
      title: "Available Spots",
      value: "1110",
      change: "-1.5%",
      positive: false,
    },
    { title: "Total Users", value: "12632", change: "+2.5%", positive: true },
  ];

  const chartData = [
    { month: "Jan", marketing: 400, core: 300 },
    { month: "Feb", marketing: 300, core: 200 },
    { month: "Mar", marketing: 600, core: 400 },
    { month: "Apr", marketing: 500, core: 450 },
    { month: "May", marketing: 700, core: 500 },
    { month: "Jun", marketing: 650, core: 480 },
    { month: "Jul", marketing: 800, core: 600 },
    { month: "Aug", marketing: 750, core: 650 },
    { month: "Sep", marketing: 600, core: 500 },
    { month: "Oct", marketing: 550, core: 480 },
    { month: "Nov", marketing: 500, core: 450 },
    { month: "Dec", marketing: 450, core: 400 },
  ];

  return (
    <div className="dashboard-container-sad">
      {/* Sidebar */}
      <div className={`sidebar-sad {isSidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header-sad">
          <img src={imgLogo} alt="eWays Services" className="logo" />
          {!isSidebarCollapsed && (
            <span className="brand-name">At Parkkin</span>
          )}
        </div>
        <nav className="sidebar-nav-sad">
          <div className="nav-section-sad">
            <span className="nav-section-title-sad">MAIN</span>
            {mainMenuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item-sad  ${isActive ? "active" : ""}`
                }
                // No need for onClick and navigate here, NavLink handles navigation
              >
                <span className="nav-icon-sad">{item.icon}</span>
                {!isSidebarCollapsed && (
                  <span className="nav-label-sad">{item.label}</span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="nav-section-sad">
            <span className="nav-section-title-sad">HELP</span>
            {helpMenuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item-sad ${isActive ? "active" : ""}`
                }
              >
                <span className="nav-icon-sad">{item.icon}</span>
                {!isSidebarCollapsed && (
                  <span className="nav-label-sad">{item.label}</span>
                )}
                {item.badge && !isSidebarCollapsed && (
                  <span className="notification-badge-sad">{item.badge}</span>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
        {/* <nav className="sidebar-nav-sad">
          <div className="nav-section-sad">
            <span className="nav-section-title-sad">MAIN</span>
            {mainMenuItems.map((item) => (
              <div
                key={item.id}
                className={`nav-item-sad ${
                  selectedMenu === item.id ? "active" : ""
                }`}
                onClick={() => setSelectedMenu(item.id)}
              >
                <span className="nav-icon-sad">{item.icon}</span>
                {!isSidebarCollapsed && (
                  <span className="nav-label-sad">{item.label}</span>
                )}
              </div>
            ))}
          </div>

          <div className="nav-section-sad">
            <span className="nav-section-title-sad">HELP</span>
            {helpMenuItems.map((item) => (
              <div
                key={item.id}
                className={`nav-item-sad ${
                  selectedMenu === item.id ? "active" : ""
                }`}
                onClick={() => setSelectedMenu(item.id)}
              >
                <span className="nav-icon-sad">{item.icon}</span>
                {!isSidebarCollapsed && (
                  <span className="nav-label-sad">{item.label}</span>
                )}
                {item.badge && !isSidebarCollapsed && (
                  <span className="notification-badge-sad">{item.badge}</span>
                )}
              </div>
            ))}
          </div>
        </nav> */}
      </div>

      {/* Main Content */}
      <div className="main-content-sad">
        {/* Header */}
        <header className="header-sad">
          <div className="header-left-sad">
            <button
              className="sidebar-toggle-sad"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            >
              ☰
            </button>
            <h1 className="page-title-sad">Overview</h1>
            <div className="breadcrumb-sad">
              Show: <span className="breadcrumb-link-sad">All Projects</span> ▼
            </div>
          </div>

          <div className="header-right-sad">
            <button className="generate-report-btn-sad">Generate report</button>
            <div className="search-bar-sad">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="user-profile-sad">
              <span className="user-avatar-sad">AR</span>
              <span className="user-name-sad">Austin Robertson</span>
              <span className="user-role-sad">Marketing Administrator</span>
            </div>
          </div>
        </header>

        {/* Metrics Cards */}
        <div className="metrics-grid-sad">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card-sad">
              <div className="metric-header-sad">
                <h3 className="metric-title-sad">{metric.title}</h3>
                <span
                  className={`metric-change-sad ${
                    metric.positive ? "positive" : "negative"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <div className="metric-value-sad">{metric.value}</div>
              <div className="metric-subtitle-sad">Compared to last month</div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="charts-section-sad">
          <div className="chart-container-sad">
            <div className="chart-header-sad">
              <h3>Parking Revenue</h3>
              <div className="chart-legend-sad">
                <span className="legend-item-sad marketing">
                  ● Marketing Revenue
                </span>
                <span className="legend-item-sad core">● Core Revenue</span>
              </div>
            </div>
            <div className="chart-area-sad">
              <svg className="line-chart-sad" viewBox="0 0 800 400">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="60"
                    y1={80 + i * 80}
                    x2="740"
                    y2={80 + i * 80}
                    stroke="#2a2a2a"
                    strokeWidth="1"
                  />
                ))}

                {/* Chart lines */}
                <polyline
                  fill="none"
                  stroke="#00a6e6"
                  strokeWidth="3"
                  points="60,300 120,250 180,200 240,180 300,150 360,160 420,120 480,140 540,200 600,220 660,260 720,280"
                />
                <polyline
                  fill="none"
                  stroke="#00cc88"
                  strokeWidth="3"
                  points="60,320 120,280 180,240 240,220 300,200 360,190 420,160 480,140 540,180 600,200 660,230 720,250"
                />

                {/* Chart points */}
                {chartData.map((point, index) => (
                  <g key={index}>
                    <circle
                      cx={60 + index * 60}
                      cy={400 - point.marketing * 0.4}
                      r="4"
                      fill="#00a6e6"
                    />
                    <circle
                      cx={60 + index * 60}
                      cy={400 - point.core * 0.4}
                      r="4"
                      fill="#00cc88"
                    />
                  </g>
                ))}

                {/* Labels */}
                {chartData.map((point, index) => (
                  <text
                    key={index}
                    x={60 + index * 60}
                    y="390"
                    textAnchor="middle"
                    fill="#666"
                    fontSize="12"
                  >
                    {point.month}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          <div className="stats-sidebar-sad">
            <div className="stat-circle-sad">
              <div className="circle-chart-sad">
                <span className="percent-sad">68%</span>
                <span className="label-sad">1st time this year</span>
              </div>
            </div>

            <div className="stat-circle-sad">
              <div className="circle-chart-sad">
                <span className="percent-sad">76%</span>
                <span className="label-sad">Daily this year</span>
              </div>
            </div>

            <div className="visitor-count-sad">
              <span className="count-sad">10,254</span>
              <span className="count-label-sad">Visitors this year</span>
              <span className="count-change-sad negative">1.8% ↓</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section-sad">
          <div className="total-bookings-sad">
            <h3>Average Total Bookings</h3>
            <div className="booking-stats-sad">
              <div className="booking-stat-sad">
                <div className="stat-circle-small-sad">46%</div>
                <div className="stat-details-sad">
                  <span className="stat-value-sad">92,980</span>
                  <span className="stat-label-sad">Daily bookings</span>
                </div>
              </div>

              <div className="booking-stat-sad">
                <div className="stat-circle-small-sad green">74%</div>
                <div className="stat-details-sad">
                  <span className="stat-value-sad">38,546</span>
                  <span className="stat-label-sad">Monthly average</span>
                </div>
              </div>

              <div className="booking-stat-sad">
                <div className="stat-circle-small-sad orange">14%</div>
                <div className="stat-details-sad">
                  <span className="stat-value-sad">14,068</span>
                  <span className="stat-label-sad">Yearly growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="revenue-report-sad">
            <h3>Revenue Report</h3>
            <div className="report-legend-sad">
              <span className="legend-item-sad online">● Online Revenue</span>
              <span className="legend-item-sad offline">● Offline Revenue</span>
            </div>
            <div className="bar-chart-sad">
              <svg viewBox="0 0 400 200">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(
                  (month, index) => (
                    <g key={month}>
                      <rect
                        x={40 + index * 60}
                        y={180 - (Math.random() * 100 + 40)}
                        width="20"
                        height={Math.random() * 100 + 40}
                        fill="#00a6e6"
                      />
                      <rect
                        x={65 + index * 60}
                        y={180 - (Math.random() * 80 + 30)}
                        width="20"
                        height={Math.random() * 80 + 30}
                        fill="#0088cc"
                      />
                      <text
                        x={50 + index * 60}
                        y="195"
                        textAnchor="middle"
                        fill="#666"
                        fontSize="10"
                      >
                        {month}
                      </text>
                    </g>
                  )
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default superadmindash;
