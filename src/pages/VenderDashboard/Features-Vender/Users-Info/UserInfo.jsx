import React, { useState } from "react";
import "./UserInfo.css";
import { Link } from "react-router-dom";
import ImgLogo from "../../../../assets/logo.svg";
const UserInfo = () => {
  const [userData] = useState({
    id: "USR-2024-001",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+91 9876543210",
    profileImage:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740",
    registrationDate: "15 Jan 2024",
    membershipType: "Premium",
    totalBookings: 127,
    activeBookings: 2,
    totalSpent: "₹1,250",
    averageRating: 4.8,
    vehicleInfo: {
      vehicleNumber: "MH 01 AB 1234",
      vehicleType: "Sedan",
      vehicleModel: "Honda City",
      color: "White",
    },
    recentBookings: [
      {
        id: "BK001",
        location: "Phoenix Mall - Sector 15",
        date: "Today",
        time: "2:30 PM - 5:30 PM",
        amount: "₹120",
        status: "Active",
      },
      {
        id: "BK002",
        location: "Corporate Tower - BKC",
        date: "Yesterday",
        time: "9:00 AM - 6:00 PM",
        amount: "₹300",
        status: "Completed",
      },
      {
        id: "BK003",
        location: "City Center Mall",
        date: "28 Jun 2024",
        time: "7:00 PM - 10:00 PM",
        amount: "₹90",
        status: "Completed",
      },
    ],
    paymentMethods: [
      {
        type: "Credit Card",
        last4: "4567",
        isDefault: true,
      },
      {
        type: "UPI",
        id: "sarah.j@paytm",
        isDefault: false,
      },
    ],
  });

  return (
    <div className="vendor-user-info-vui">
      {/* Header */}
      <header className="header-vui">
        <div className="header-content-vui">
          <div className="logo-section-vui">
            <img
              src={ImgLogo}
              alt="Eways Services"
              className="company-logo-vui"
            />
            <div className="brand-info-vui">
              <h1>At Parkkin</h1>
              <span>Vendor Dashboard</span>
            </div>
          </div>
          <div className="header-actions-vui">
            <button className="notification-btn-vui">🔔</button>
            <div className="vendor-profile-vui">
              <span>Vendor Portal</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content-vui">
        <div className="page-header-vui">
          <Link to="/user-detail" className="back-btn-vui">
            ← Back to Users
          </Link>
          <h2>User Information</h2>
        </div>

        <div className="user-info-container-vui">
          {/* User Profile Section */}
          <div className="profile-section-vui glass-card-vui">
            <div className="profile-header-vui">
              <div className="profile-image-container-vui">
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="profile-image-vui"
                />
                <div className="status-indicator-vui active-vui"></div>
              </div>
              <div className="profile-details-vui">
                <h3>{userData.name}</h3>
                <p className="user-id-vui">ID: {userData.id}</p>
                <div className="membership-badge-vui">
                  {userData.membershipType} Member
                </div>
              </div>
              <div className="profile-stats-vui">
                <div className="stat-vui">
                  <span className="stat-value-vui">
                    {userData.totalBookings}
                  </span>
                  <span className="stat-label-vui">Total Bookings</span>
                </div>
                <div className="stat-vui">
                  <span className="stat-value-vui">
                    {userData.averageRating}
                  </span>
                  <span className="stat-label-vui">Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="info-grid-vui">
            <div className="info-card-vui glass-card-vui">
              <h4>Contact Information</h4>
              <div className="info-item-vui">
                <span className="info-label-vui">Email:</span>
                <span className="info-value-vui">{userData.email}</span>
              </div>
              <div className="info-item-vui">
                <span className="info-label-vui">Phone:</span>
                <span className="info-value-vui">{userData.phone}</span>
              </div>
              <div className="info-item-vui">
                <span className="info-label-vui">Member Since:</span>
                <span className="info-value-vui">
                  {userData.registrationDate}
                </span>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="info-card-vui glass-card-vui">
              <h4>Financial Summary</h4>
              <div className="info-item-vui">
                <span className="info-label-vui">Total Spent:</span>
                <span className="info-value-vui highlight-vui">
                  {userData.totalSpent}
                </span>
              </div>
              <div className="info-item-vui">
                <span className="info-label-vui">Active Bookings:</span>
                <span className="info-value-vui">
                  {userData.activeBookings}
                </span>
              </div>
              <div className="info-item-vui">
                <span className="info-label-vui">Membership:</span>
                <span className="info-value-vui premium-vui">
                  {userData.membershipType}
                </span>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="info-card-vui glass-card-vui">
              <h4>Vehicle Information</h4>
              <div className="info-item-vui">
                <span className="info-label-vui">Vehicle Number:</span>
                <span className="info-value-vui">
                  {userData.vehicleInfo.vehicleNumber}
                </span>
              </div>
              <div className="info-item-vui">
                <span className="info-label-vui">Type:</span>
                <span className="info-value-vui">
                  {userData.vehicleInfo.vehicleType}
                </span>
              </div>
              <div className="info-item-vui">
                <span className="info-label-vui">Model:</span>
                <span className="info-value-vui">
                  {userData.vehicleInfo.vehicleModel}
                </span>
              </div>
              <div className="info-item-vui">
                <span className="info-label-vui">Color:</span>
                <span className="info-value-vui">
                  {userData.vehicleInfo.color}
                </span>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bookings-section-vui glass-card-vui">
            <h4>Recent Bookings</h4>
            <div className="bookings-list-vui">
              {userData.recentBookings.map((booking) => (
                <div key={booking.id} className="booking-item-vui">
                  <div className="booking-info-vui">
                    <div className="booking-location-vui">
                      {booking.location}
                    </div>
                    <div className="booking-details-vui">
                      <span>{booking.date}</span>
                      <span className="separator-vui">•</span>
                      <span>{booking.time}</span>
                    </div>
                  </div>
                  <div className="booking-meta-vui">
                    <span className="booking-amount-vui">{booking.amount}</span>
                    <span
                      className={`booking-status-vui ${booking.status.toLowerCase()}`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="payment-section-vui glass-card-vui">
            <h4>Payment Methods</h4>
            <div className="payment-methods-vui">
              {userData.paymentMethods.map((method, index) => (
                <div key={index} className="payment-method-vui">
                  <div className="payment-info-vui">
                    <span className="payment-type-vui">{method.type}</span>
                    <span className="payment-details-vui">
                      {method.last4 ? `•••• ${method.last4}` : method.id}
                    </span>
                  </div>
                  {method.isDefault && (
                    <span className="default-badge-vui">Default</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons-vui">
            <button className="btn-vui btn-primary-vui">Send Message</button>
            <button className="btn-vui btn-secondary-vui">
              View Full History
            </button>
            <button className="btn-vui btn-outline-vui">Generate Report</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserInfo;
