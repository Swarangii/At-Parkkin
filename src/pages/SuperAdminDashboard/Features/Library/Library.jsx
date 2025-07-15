import React, { useState } from "react";
import ImgLogo from "../../../../assets/logo.svg";
import "./Library.css";
const Library = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const libraryItems = [
    {
      id: 1,
      title: "Parking Analytics Dashboard",
      category: "Analytics",
      description:
        "Real-time parking utilization and revenue analytics with advanced reporting capabilities.",
      status: "Active",
      lastUpdated: "2024-01-15",
      usage: "85%",
    },
    {
      id: 2,
      title: "Mobile Payment Gateway",
      category: "Payment",
      description:
        "Seamless mobile payment integration with multiple payment methods and security features.",
      status: "Active",
      lastUpdated: "2024-01-12",
      usage: "92%",
    },
    {
      id: 3,
      title: "Smart Sensor Network",
      category: "IoT",
      description:
        "Advanced IoT sensor management for real-time parking space detection and monitoring.",
      status: "Maintenance",
      lastUpdated: "2024-01-10",
      usage: "78%",
    },
    {
      id: 4,
      title: "User Management System",
      category: "Administration",
      description:
        "Comprehensive user role management with advanced permissions and access control.",
      status: "Active",
      lastUpdated: "2024-01-14",
      usage: "95%",
    },
    {
      id: 5,
      title: "Notification Engine",
      category: "Communication",
      description:
        "Multi-channel notification system for parking alerts, payments, and system updates.",
      status: "Active",
      lastUpdated: "2024-01-13",
      usage: "88%",
    },
    {
      id: 6,
      title: "Reservation System",
      category: "Booking",
      description:
        "Advanced parking reservation system with time-based booking and automated confirmations.",
      status: "Beta",
      lastUpdated: "2024-01-11",
      usage: "67%",
    },
  ];

  const filteredItems = libraryItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "#00ff88";
      case "Maintenance":
        return "#ffaa00";
      case "Beta":
        return "#00a6e6";
      default:
        return "#666";
    }
  };

  return (
    <div className="library-page-suplib">
      {/* Header */}
      <header className="library-header-suplib">
        <div className="header-content-suplib">
          <div className="header-left-suplib">
            <img
              src={ImgLogo}
              alt="Eways Services"
              className="company-logo-suplib"
            />
            <div className="header-text-suplib">
              <h1>At Parkkin</h1>
              <p>Super Admin Library Dashboard</p>
            </div>
          </div>
          <div className="header-right-suplib">
            <div className="search-container-suplib">
              <input
                type="text"
                placeholder="Search library components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input-suplib"
              />
            </div>
            <div className="admin-profile-suplib">
              <div className="profile-info-suplib">
                <span className="profile-name-suplib">Super Admin</span>
                <span className="profile-role-suplib">
                  System Administrator
                </span>
              </div>
              <div className="profile-avatar-suplib">SA</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="library-nav-suplib">
        <div className="nav-container-suplib">
          <button
            className={`nav-tab-suplib ${
              activeTab === "overview" ? "active" : ""
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`nav-tab-suplib ${
              activeTab === "components" ? "active" : ""
            }`}
            onClick={() => setActiveTab("components")}
          >
            Components
          </button>
          <button
            className={`nav-tab-suplib ${
              activeTab === "analytics" ? "active" : ""
            }`}
            onClick={() => setActiveTab("analytics")}
          >
            Analytics
          </button>
          <button
            className={`nav-tab-suplib ${
              activeTab === "settings" ? "active" : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="library-main-suplib">
        {activeTab === "overview" && (
          <div className="overview-section-suplib">
            <div className="stats-grid-suplib">
              <div className="stat-card-suplib">
                <div className="stat-icon-suplib">📊</div>
                <div className="stat-content-suplib">
                  <h3>Total Components</h3>
                  <p className="stat-number-suplib">24</p>
                  <span className="stat-change-suplib">+3 this month</span>
                </div>
              </div>
              <div className="stat-card-suplib">
                <div className="stat-icon-suplib">✅</div>
                <div className="stat-content-suplib">
                  <h3>Active Services</h3>
                  <p className="stat-number-suplib">18</p>
                  <span className="stat-change-suplib">96% uptime</span>
                </div>
              </div>
              <div className="stat-card-suplib">
                <div className="stat-icon-suplib">🚗</div>
                <div className="stat-content-suplib">
                  <h3>Parking Lots</h3>
                  <p className="stat-number-suplib">156</p>
                  <span className="stat-change-suplib">+12 this week</span>
                </div>
              </div>
              <div className="stat-card-suplib">
                <div className="stat-icon-suplib">👥</div>
                <div className="stat-content-suplib">
                  <h3>Active Users</h3>
                  <p className="stat-number-suplib">8,432</p>
                  <span className="stat-change-suplib">+5.2% growth</span>
                </div>
              </div>
            </div>

            <div className="recent-activity-suplib">
              <h2>Recent System Activity</h2>
              <div className="activity-list-suplib">
                <div className="activity-item-suplib">
                  <div className="activity-icon-suplib active"></div>
                  <div className="activity-content-suplib">
                    <h4>Payment Gateway Updated</h4>
                    <p>Mobile payment system received security patches</p>
                    <span className="activity-time-suplib">2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item-suplib">
                  <div className="activity-icon-suplib warning"></div>
                  <div className="activity-content-suplib">
                    <h4>Sensor Network Maintenance</h4>
                    <p>IoT sensors in Lot #45 scheduled for maintenance</p>
                    <span className="activity-time-suplib">4 hours ago</span>
                  </div>
                </div>
                <div className="activity-item-suplib">
                  <div className="activity-icon-suplib success"></div>
                  <div className="activity-content-suplib">
                    <h4>New Parking Lot Added</h4>
                    <p>Downtown Plaza parking facility integrated</p>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "components" && (
          <div className="components-section-suplib">
            <div className="section-header-suplib">
              <h2>Library Components</h2>
              <p>Manage and monitor all parking system components</p>
            </div>

            <div className="components-grid-suplib">
              {filteredItems.map((item) => (
                <div key={item.id} className="component-card-suplib">
                  <div className="card-header-suplib">
                    <div className="card-title-suplib">
                      <h3>{item.title}</h3>
                      <span className="category-badge-suplib">
                        {item.category}
                      </span>
                    </div>
                    <div
                      className="status-indicator-suplib"
                      style={{ backgroundColor: getStatusColor(item.status) }}
                    >
                      {item.status}
                    </div>
                  </div>

                  <div className="card-content-suplib">
                    <p>{item.description}</p>

                    <div className="usage-meter-suplib">
                      <div className="usage-label-suplib">
                        <span>Usage</span>
                        <span>{item.usage}</span>
                      </div>
                      <div className="usage-bar-suplib">
                        <div
                          className="usage-fill-suplib"
                          style={{ width: item.usage }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer-suplib">
                    <span className="last-updated-suplib">
                      Last updated: {item.lastUpdated}
                    </span>
                    <div className="card-actions-suplib">
                      <button className="btn-secondary-suplib">
                        Configure
                      </button>
                      <button className="btn-primary-suplib">Monitor</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="analytics-section-suplib">
            <div className="section-header-suplib">
              <h2>System Analytics</h2>
              <p>Comprehensive insights into parking management performance</p>
            </div>

            <div className="analytics-grid-suplib">
              <div className="analytics-card-suplib">
                <h3>Revenue Trends</h3>
                <div className="chart-placeholder-suplib">
                  <div className="chart-bars-suplib">
                    <div className="bar-suplib" style={{ height: "60%" }}></div>
                    <div className="bar-suplib" style={{ height: "80%" }}></div>
                    <div className="bar-suplib" style={{ height: "45%" }}></div>
                    <div className="bar-suplib" style={{ height: "90%" }}></div>
                    <div className="bar-suplib" style={{ height: "75%" }}></div>
                    <div className="bar-suplib" style={{ height: "95%" }}></div>
                  </div>
                </div>
                <p>Monthly revenue growth: +12.5%</p>
              </div>

              <div className="analytics-card-suplib">
                <h3>Occupancy Rates</h3>
                <div className="donut-chart-suplib">
                  <div className="donut-center-suplib">
                    <span className="donut-percentage-suplib">78%</span>
                    <span className="donut-label-suplib">Average</span>
                  </div>
                </div>
                <p>Peak hours: 9AM-11AM, 5PM-7PM</p>
              </div>

              <div className="analytics-card-suplib full-width-suplib">
                <h3>System Performance Metrics</h3>
                <div className="metrics-grid-suplib">
                  <div className="metric-suplib">
                    <span className="metric-value-suplib">99.2%</span>
                    <span className="metric-label-suplib">Uptime</span>
                  </div>
                  <div className="metric-suplib">
                    <span className="metric-value-suplib">1.2s</span>
                    <span className="metric-label-suplib">Avg Response</span>
                  </div>
                  <div className="metric-suplib">
                    <span className="metric-value-suplib">15K</span>
                    <span className="metric-label-suplib">
                      Daily Transactions
                    </span>
                  </div>
                  <div className="metric-suplib">
                    <span className="metric-value-suplib">2.1%</span>
                    <span className="metric-label-suplib">Error Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="settings-section-suplib">
            <div className="section-header-suplib">
              <h2>System Settings</h2>
              <p>Configure and manage parking system parameters</p>
            </div>

            <div className="settings-grid-suplib">
              <div className="settings-card-suplib">
                <h3>General Configuration</h3>
                <div className="setting-item-suplib">
                  <label>System Timezone</label>
                  <select className="setting-select-suplib">
                    <option>UTC+05:30 (IST)</option>
                    <option>UTC+00:00 (GMT)</option>
                    <option>UTC-05:00 (EST)</option>
                  </select>
                </div>
                <div className="setting-item-suplib">
                  <label>Default Currency</label>
                  <select className="setting-select-suplib">
                    <option>INR (₹)</option>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                  </select>
                </div>
              </div>

              <div className="settings-card-suplib">
                <h3>Security Settings</h3>
                <div className="setting-item-suplib">
                  <label>Session Timeout</label>
                  <input
                    type="number"
                    className="setting-input-suplib"
                    defaultValue="30"
                  />
                  <span className="setting-unit-suplib">minutes</span>
                </div>
                <div className="setting-item-suplib">
                  <label>Two-Factor Authentication</label>
                  <label className="toggle-switch-suplib">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider-suplib"></span>
                  </label>
                </div>
              </div>

              <div className="settings-card-suplib">
                <h3>Notification Settings</h3>
                <div className="setting-item-suplib">
                  <label>Email Notifications</label>
                  <label className="toggle-switch-suplib">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider-suplib"></span>
                  </label>
                </div>
                <div className="setting-item-suplib">
                  <label>SMS Alerts</label>
                  <label className="toggle-switch-suplib">
                    <input type="checkbox" />
                    <span className="toggle-slider-suplib"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Library;
