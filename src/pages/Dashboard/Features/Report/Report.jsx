import React, { useState } from "react";
import ImgLogo from "../../../../assets/logo.svg";
import "./Report.css";
import Footer from "../../../../components/Footer/Footer";
const Report = () => {
  const [activeTab, setActiveTab] = useState("current");

  // Mock data for current bookings
  const currentBookings = [
    {
      id: "PRK001",
      location: "Downtown Business Center",
      address: "123 Main Street, City Center",
      startTime: "2025-01-02 09:00 AM",
      endTime: "2025-01-02 06:00 PM",
      duration: "9 hours",
      amount: "₹25.00",
      status: "Active",
      vehicleNumber: "ABC-1234",
      spotNumber: "A-15",
    },
    {
      id: "PRK002",
      location: "Shopping Mall Plaza",
      address: "456 Commerce Ave, Mall District",
      startTime: "2025-01-02 02:00 PM",
      endTime: "2025-01-02 05:00 PM",
      duration: "3 hours",
      amount: "₹12.00",
      status: "Confirmed",
      vehicleNumber: "XYZ-5678",
      spotNumber: "B-08",
    },
  ];

  // Mock data for past bookings
  const pastBookings = [
    {
      id: "PRK098",
      location: "Airport Terminal 1",
      address: "789 Airport Blvd, Terminal Area",
      startTime: "2024-12-28 06:00 AM",
      endTime: "2024-12-30 08:00 PM",
      duration: "2 days 14 hours",
      amount: "₹85.00",
      status: "Completed",
      vehicleNumber: "ABC-1234",
      spotNumber: "C-22",
      rating: 5,
    },
    {
      id: "PRK097",
      location: "City Hospital",
      address: "321 Health Street, Medical District",
      startTime: "2024-12-25 10:00 AM",
      endTime: "2024-12-25 03:00 PM",
      duration: "5 hours",
      amount: "₹18.00",
      status: "Completed",
      vehicleNumber: "XYZ-5678",
      spotNumber: "D-05",
      rating: 4,
    },
    {
      id: "PRK096",
      location: "University Campus",
      address: "654 Education Ave, Campus Zone",
      startTime: "2024-12-20 08:00 AM",
      endTime: "2024-12-20 07:00 PM",
      duration: "11 hours",
      amount: "₹32.00",
      status: "Completed",
      vehicleNumber: "ABC-1234",
      spotNumber: "E-12",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star-report ${i < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "status-active";
      case "confirmed":
        return "status-confirmed";
      case "completed":
        return "status-completed";
      default:
        return "status-default";
    }
  };

  return (
    <div className="user-report-page">
      {/* Header */}
      <header className="header-report">
        <div className="header-content-report">
          <div className="logo-section-report">
            <img src={ImgLogo} alt="Eways Services" className="company-logo" />
            <div className="brand-text-report">
              <h1>At Parkkin</h1>
              <p>Smart Parking Solutions</p>
            </div>
          </div>
          <div className="user-info-report">
            <div className="user-avatar-report">
              <span>JD</span>
            </div>
            <div className="user-details-report">
              <h3>John Doe</h3>
              <p>Premium Member</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content-report">
        <div className="container-report">
          {/* Page Title */}
          <div className="page-header-report">
            <h2>My Parking Reports</h2>
            <p>Manage and view your parking booking history</p>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation-report">
            <button
              className={`tab-button-report ${
                activeTab === "current" ? "active" : ""
              }`}
              onClick={() => setActiveTab("current")}
            >
              Current Bookings
              <span className="tab-count-report">{currentBookings.length}</span>
            </button>
            <button
              className={`tab-button-report ${
                activeTab === "past" ? "active" : ""
              }`}
              onClick={() => setActiveTab("past")}
            >
              Past Bookings
              <span className="tab-count-report">{pastBookings.length}</span>
            </button>
          </div>

          {/* Current Bookings */}
          {activeTab === "current" && (
            <div className="bookings-section-report">
              <div className="section-header-report">
                <h3>Active & Upcoming Bookings</h3>
              </div>
              <div className="bookings-grid-report">
                {currentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="booking-card-report current-booking-report"
                  >
                    <div className="booking-header-report">
                      <div className="booking-id-report">#{booking.id}</div>
                      <div
                        className={`booking-status-report ${getStatusClass(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </div>
                    </div>
                    <div className="booking-content-report">
                      <h4>{booking.location}</h4>
                      <p className="booking-address-report">
                        {booking.address}
                      </p>
                      <div className="booking-details-report">
                        <div className="detail-item-report">
                          <span className="detail-label-report">Vehicle:</span>
                          <span className="detail-value-report">
                            {booking.vehicleNumber}
                          </span>
                        </div>
                        <div className="detail-item-report">
                          <span className="detail-label-report">Spot:</span>
                          <span className="detail-value-report">
                            {booking.spotNumber}
                          </span>
                        </div>
                        <div className="detail-item-report">
                          <span className="detail-label-report">
                            Start Time:
                          </span>
                          <span className="detail-value-report">
                            {booking.startTime}
                          </span>
                        </div>
                        <div className="detail-item-report">
                          <span className="detail-label-report">End Time:</span>
                          <span className="detail-value-report">
                            {booking.endTime}
                          </span>
                        </div>
                        <div className="detail-item-report">
                          <span className="detail-label-report">Duration:</span>
                          <span className="detail-value-report">
                            {booking.duration}
                          </span>
                        </div>
                      </div>
                      <div className="booking-footer-report">
                        <div className="booking-amount-report">
                          {booking.amount}
                        </div>
                        <div className="booking-actions-report">
                          <button className="action-btn-report extend-btn-report">
                            Extend
                          </button>
                          <button className="action-btn-report cancel-btn-report">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Bookings */}
          {activeTab === "past" && (
            <div className="bookings-section-report">
              <div className="section-header-report">
                <h3>Booking History</h3>
              </div>
              <div className="bookings-grid-report">
                {pastBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="booking-card-report past-booking-report"
                  >
                    <div className="booking-header-report">
                      <div className="booking-id-report">#{booking.id}</div>
                      <div className="booking-rating-report">
                        {renderStars(booking.rating)}
                      </div>
                    </div>
                    <div className="booking-content-report">
                      <h4>{booking.location}</h4>
                      <p className="booking-address-report">
                        {booking.address}
                      </p>
                      <div className="booking-details-report">
                        <div className="detail-item-report">
                          <span className="detail-label-report">Vehicle:</span>
                          <span className="detail-value-report">
                            {booking.vehicleNumber}
                          </span>
                        </div>
                        <div className="detail-item-report">
                          <span className="detail-label-report">Spot:</span>
                          <span className="detail-value-report">
                            {booking.spotNumber}
                          </span>
                        </div>
                        <div className="detail-item-report">
                          <span className="detail-label-report">Date:</span>
                          <span className="detail-value-report">
                            {booking.startTime.split(" ")[0]}
                          </span>
                        </div>
                        <div className="detail-item-report">
                          <span className="detail-label-report">Duration:</span>
                          <span className="detail-value-report">
                            {booking.duration}
                          </span>
                        </div>
                      </div>
                      <div className="booking-footer-report">
                        <div className="booking-amount-report">
                          {booking.amount}
                        </div>
                        <div className="booking-actions-report">
                          <button className="action-btn-report rebook-btn-report">
                            Rebook
                          </button>
                          <button className="action-btn-report receipt-btn-report">
                            Receipt
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary Stats */}
          <div className="summary-section-report">
            <div className="stats-grid-report">
              <div className="stat-card-report">
                <div className="stat-icon-report">🚗</div>
                <div className="stat-content-report">
                  <h4>Total Bookings</h4>
                  <p className="stat-number-report">
                    {currentBookings.length + pastBookings.length}
                  </p>
                </div>
              </div>
              <div className="stat-card-report">
                <div className="stat-icon-report">💰</div>
                <div className="stat-content-report">
                  <h4>Total Spent</h4>
                  <p className="stat-number-report">₹155.00</p>
                </div>
              </div>
              <div className="stat-card-report">
                <div className="stat-icon-report">⭐</div>
                <div className="stat-content-report">
                  <h4>Average Rating</h4>
                  <p className="stat-number-report">4.7/5</p>
                </div>
              </div>
              <div className="stat-card-report">
                <div className="stat-icon-report">⏱️</div>
                <div className="stat-content-report">
                  <h4>Hours Parked</h4>
                  <p className="stat-number-report">67</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Report;
