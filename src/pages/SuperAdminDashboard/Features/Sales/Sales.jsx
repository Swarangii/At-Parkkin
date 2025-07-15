import React, { useState } from "react";
import ImgLogo from "../../../../assets/logo.svg";
import "./Sales.css";
const Sales = () => {
  const [activeTimeframe, setActiveTimeframe] = useState("daily");
  const [salesData, setSalesData] = useState({
    daily: {
      total: 15420,
      transactions: 342,
      growth: 12.5,
      data: [
        { period: "Mon", amount: 2100 },
        { period: "Tue", amount: 2300 },
        { period: "Wed", amount: 1900 },
        { period: "Thu", amount: 2500 },
        { period: "Fri", amount: 2800 },
        { period: "Sat", amount: 2200 },
        { period: "Sun", amount: 1620 },
      ],
    },
    weekly: {
      total: 87450,
      transactions: 2156,
      growth: 18.3,
      data: [
        { period: "Week 1", amount: 21200 },
        { period: "Week 2", amount: 23400 },
        { period: "Week 3", amount: 19800 },
        { period: "Week 4", amount: 23050 },
      ],
    },
    monthly: {
      total: 324890,
      transactions: 8742,
      growth: 24.1,
      data: [
        { period: "Jan", amount: 28400 },
        { period: "Feb", amount: 31200 },
        { period: "Mar", amount: 29800 },
        { period: "Apr", amount: 33600 },
        { period: "May", amount: 35200 },
        { period: "Jun", amount: 32100 },
        { period: "Jul", amount: 34200 },
        { period: "Aug", amount: 36800 },
        { period: "Sep", amount: 31400 },
        { period: "Oct", amount: 35900 },
        { period: "Nov", amount: 32800 },
        { period: "Dec", amount: 34490 },
      ],
    },
    yearly: {
      total: 1247650,
      transactions: 32847,
      growth: 31.7,
      data: [
        { period: "2020", amount: 234500 },
        { period: "2021", amount: 456800 },
        { period: "2022", amount: 678900 },
        { period: "2023", amount: 892400 },
        { period: "2024", amount: 1247650 },
      ],
    },
  });

  const currentData = salesData[activeTimeframe];

  const StatCard = ({ title, value, icon, growth }) => (
    <div className="stat-card-adminSale">
      <div className="stat-header-adminSale">
        <h3>{title}</h3>
        <span className="stat-icon-adminSale">{icon}</span>
      </div>
      <div className="stat-value-adminSale">₹{value.toLocaleString()}</div>
      {growth && (
        <div className="stat-growth-adminSale">
          <span className="growth-indicator-adminSale">↗</span>+{growth}% from
          last period
        </div>
      )}
    </div>
  );

  const ChartBar = ({ data, maxValue }) => (
    <div className="chart-container-adminSale">
      <div className="chart-bars-adminSale">
        {data.map((item, index) => (
          <div key={index} className="bar-group-adminSale">
            <div
              className="chart-bar-adminSale"
              style={{
                height: `${(item.amount / maxValue) * 100}%`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="bar-tooltip-adminSale">
                <span>{item.period}</span>
                <span>₹{item.amount.toLocaleString()}</span>
              </div>
            </div>
            <span className="bar-label-adminSale">{item.period}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="sales-page-adminSale">
      {/* Header */}
      <header className="header-adminSale">
        <div className="header-content-adminSale">
          <div className="brand-adminSale">
            <img src={ImgLogo} alt="Eways Services" className="logo" />
            <div className="brand-text-adminSale">
              <h1>At Parkkin</h1>
              <span>Super Admin Dashboard</span>
            </div>
          </div>
          <div className="header-actions-adminSale">
            <button className="notification-btn-adminSale">🔔</button>
            <div className="admin-profile-adminSale">
              <div className="profile-avatar-adminSale">SA</div>
              <span>Super Admin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content-adminSale">
        <div className="page-header-adminSale">
          <h2>Sales Analytics</h2>
          <p>Comprehensive parking management revenue insights</p>
        </div>

        {/* Time Frame Selector */}
        <div className="timeframe-selector-adminSale">
          {["daily", "weekly", "monthly", "yearly"].map((timeframe) => (
            <button
              key={timeframe}
              className={`timeframe-btn-adminSale ${
                activeTimeframe === timeframe ? "active" : ""
              }`}
              onClick={() => setActiveTimeframe(timeframe)}
            >
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="stats-grid-adminSale">
          <StatCard
            title="Total Revenue-adminSale"
            value={currentData.total}
            icon="💰"
            growth={currentData.growth}
          />
          <StatCard
            title="Transactions"
            value={currentData.transactions}
            icon="📊"
          />
          <StatCard
            title="Average per Transaction"
            value={Math.round(currentData.total / currentData.transactions)}
            icon="💳"
          />
          <StatCard
            title="Growth Rate"
            value={`${currentData.growth}%`}
            icon="📈"
          />
        </div>

        {/* Sales Chart */}
        <div className="chart-section-adminSale">
          <div className="chart-header-adminSale">
            <h3>Revenue Breakdown</h3>
            <div className="chart-legend-adminSale">
              <span className="legend-item-adminSale">
                <div className="legend-color-adminSale"></div>
                Revenue
              </span>
            </div>
          </div>
          <ChartBar
            data={currentData.data}
            maxValue={Math.max(...currentData.data.map((d) => d.amount))}
          />
        </div>

        {/* Additional Insights */}
        <div className="insights-grid-adminSale">
          <div className="insight-card-adminSale">
            <h4>Peak Hours</h4>
            <div className="peak-times-adminSale">
              <div className="peak-item-adminSale">
                <span className="time-adminSale">9:00 AM - 11:00 AM</span>
                <span className="percentage-adminSale">35%</span>
              </div>
              <div className="peak-item-adminSale">
                <span className="time-adminSale">2:00 PM - 4:00 PM</span>
                <span className="percentage-adminSale">28%</span>
              </div>
              <div className="peak-item-adminSale">
                <span className="time-adminSale">6:00 PM - 8:00 PM</span>
                <span className="percentage-adminSale">22%</span>
              </div>
            </div>
          </div>

          <div className="insight-card-adminSale">
            <h4>Top Locations</h4>
            <div className="location-list-adminSale">
              <div className="location-item-adminSale">
                <span className="location-name-adminSale">Downtown Mall</span>
                <span className="location-revenue-adminSale">
                  ₹{(currentData.total * 0.32).toLocaleString()}
                </span>
              </div>
              <div className="location-item-adminSale">
                <span className="location-name-adminSale">
                  Business District
                </span>
                <span className="location-revenue-adminSale">
                  ₹{(currentData.total * 0.28).toLocaleString()}
                </span>
              </div>
              <div className="location-item-adminSale">
                <span className="location-name-adminSale">
                  Airport Terminal
                </span>
                <span className="location-revenue-adminSale">
                  ₹{(currentData.total * 0.25).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="insight-card-adminSale">
            <h4>Payment Methods</h4>
            <div className="payment-methods-adminSale">
              <div className="payment-item-adminSale">
                <span className="method-adminSale">Digital Wallet</span>
                <div className="method-bar-adminSale">
                  <div
                    className="method-fill-adminSale"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <span className="method-percent-adminSale">65%</span>
              </div>
              <div className="payment-item-adminSale">
                <span className="method-adminSale">Credit Card</span>
                <div className="method-bar-adminSale">
                  <div
                    className="method-fill-adminSale"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <span className="method-percent-adminSale">25%</span>
              </div>
              <div className="payment-item-adminSale">
                <span className="method-adminSale">Cash</span>
                <div className="method-bar-adminSale">
                  <div
                    className="method-fill-adminSale"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <span className="method-percent-adminSale">10%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Mockup Section */}
        <div className="mockup-section-adminSale">
          <div className="mockup-content-adminSale">
            <div className="mockup-text-adminSale">
              <h3>Parkkin Mobile App</h3>
              <p>Seamless parking experience for your customers</p>
              <div className="app-features-adminSale">
                <div className="feature-adminSale">
                  ✓ Real-time parking availability
                </div>
                <div className="feature-adminSale">
                  ✓ Instant payment processing
                </div>
                <div className="feature-adminSale">✓ QR code parking entry</div>
                <div className="feature-adminSale">✓ Smart notifications</div>
              </div>
            </div>
            <div className="phone-mockup-adminSale">
              <div className="phone-frame-adminSale">
                <div className="phone-screen-adminSale">
                  <div className="app-adminSale">
                    <div className="app-logo-adminSale">P</div>
                    <span>Parkkin</span>
                  </div>
                  <div className="app-content-adminSale">
                    <div className="parking-spots-adminSale">
                      <div className="spot-adminSale available-adminSale">
                        A1
                      </div>
                      <div className="spot-adminSale occupied-adminSale">
                        A2
                      </div>
                      <div className="spot-adminSale available-adminSale">
                        A3
                      </div>
                      <div className="spot-adminSale available-adminSale">
                        A4
                      </div>
                    </div>
                    <div className="app-buttons-adminSale">
                      <button className="app-btn-adminSale primary-adminSale">
                        Book Parking
                      </button>
                      <button className="app-btn-adminSale secondary-adminSale">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sales;
