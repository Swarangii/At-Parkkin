import React, { useState } from "react";
import ImgLogo from "../../../../assets/logo.svg";
import "./UserManage.css";
const UserManage = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data for current bookings
  const currentBookings = [
    {
      id: "BK001",
      userName: "John Smith",
      userEmail: "john.smith@email.com",
      userPhone: "+1 234-567-8901",
      parkingSpot: "A-15",
      vehicleNumber: "ABC-1234",
      startTime: "2025-01-02T09:00:00",
      endTime: "2025-01-02T17:00:00",
      duration: "8 hours",
      amount: "₹24.00",
      status: "Active",
      paymentStatus: "Paid",
    },
    {
      id: "BK002",
      userName: "Sarah Johnson",
      userEmail: "sarah.j@email.com",
      userPhone: "+1 234-567-8902",
      parkingSpot: "B-08",
      vehicleNumber: "XYZ-5678",
      startTime: "2025-01-02T14:30:00",
      endTime: "2025-01-02T18:30:00",
      duration: "4 hours",
      amount: "₹12.00",
      status: "Active",
      paymentStatus: "Paid",
    },
    {
      id: "BK003",
      userName: "Mike Davis",
      userEmail: "mike.davis@email.com",
      userPhone: "+1 234-567-8903",
      parkingSpot: "C-22",
      vehicleNumber: "LMN-9012",
      startTime: "2025-01-02T11:15:00",
      endTime: "2025-01-02T15:15:00",
      duration: "4 hours",
      amount: "₹12.00",
      status: "Expired",
      paymentStatus: "Paid",
    },
  ];

  // Mock data for past bookings
  const pastBookings = [
    {
      id: "BK101",
      userName: "Emily Wilson",
      userEmail: "emily.wilson@email.com",
      userPhone: "+1 234-567-8904",
      parkingSpot: "A-05",
      vehicleNumber: "DEF-3456",
      startTime: "2025-01-01T08:00:00",
      endTime: "2025-01-01T16:00:00",
      duration: "8 hours",
      amount: "₹24.00",
      status: "Completed",
      paymentStatus: "Paid",
      completedDate: "2025-01-01",
    },
    {
      id: "BK102",
      userName: "Robert Brown",
      userEmail: "robert.b@email.com",
      userPhone: "+1 234-567-8905",
      parkingSpot: "B-12",
      vehicleNumber: "GHI-7890",
      startTime: "2024-12-31T10:00:00",
      endTime: "2024-12-31T14:00:00",
      duration: "4 hours",
      amount: "₹12.00",
      status: "Completed",
      paymentStatus: "Paid",
      completedDate: "2024-12-31",
    },
    {
      id: "BK103",
      userName: "Lisa Anderson",
      userEmail: "lisa.anderson@email.com",
      userPhone: "+1 234-567-8906",
      parkingSpot: "C-07",
      vehicleNumber: "JKL-2468",
      startTime: "2024-12-30T13:00:00",
      endTime: "2024-12-30T17:00:00",
      duration: "4 hours",
      amount: "₹12.00",
      status: "Cancelled",
      paymentStatus: "Refunded",
      completedDate: "2024-12-30",
    },
  ];

  const formatDateTime = (dateTime) => {
    return new Date(dateTime).toLocaleString();
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      Active: "status-active",
      Expired: "status-expired",
      Completed: "status-completed",
      Cancelled: "status-cancelled",
    };
    return statusClasses[status] || "status-default";
  };

  const filteredBookings = (bookings) => {
    return bookings.filter((booking) => {
      const matchesSearch =
        booking.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.vehicleNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        booking.parkingSpot.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        filterStatus === "all" ||
        booking.status.toLowerCase() === filterStatus.toLowerCase();

      return matchesSearch && matchesFilter;
    });
  };

  return (
    <div className="vendor-dashboard-userManage">
      <header className="dashboard-header-userManage">
        <div className="header-content-userManage">
          <div className="logo-section-userManage">
            <img
              src={ImgLogo}
              alt="Eways Services"
              className="company-logo-userManage"
            />
            <div className="brand-info-userManage">
              <h1 className="brand-title-userManage">At Parkkin</h1>
              <p className="brand-subtitle-userManage">Vendor Dashboard</p>
            </div>
          </div>
          <div className="header-stats-userManage">
            <div className="stat-card-userManage">
              <h3>Active Bookings</h3>
              <p className="stat-number-userManage">
                {currentBookings.filter((b) => b.status === "Active").length}
              </p>
            </div>
            <div className="stat-card-userManage">
              <h3>Today's Revenue</h3>
              <p className="stat-number-userManage">₹48.00</p>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-main-userManage">
        <div className="container-userManage">
          <div className="page-header-userManage">
            <h2 className="page-title-userManage">User Reports & Bookings</h2>
            <p className="page-subtitle-userManage">
              Manage and monitor all parking bookings and user activities
            </p>
          </div>

          <div className="controls-section-userManage">
            <div className="search-filter-container-userManage">
              <div className="search-box-userManage">
                <input
                  type="text"
                  placeholder="Search by user name, email, vehicle, or spot..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input-userManage"
                />
              </div>
              <div className="filter-box-userManage">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="filter-select-userManage"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="expired">Expired</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          <div className="tabs-container-userManage">
            <div className="tab-buttons-userManage">
              <button
                className={`tab-button-userManage ${
                  activeTab === "current" ? "active" : ""
                }`}
                onClick={() => setActiveTab("current")}
              >
                Current Bookings
                <span className="tab-count-userManage">
                  {filteredBookings(currentBookings).length}
                </span>
              </button>
              <button
                className={`tab-button-userManage ${
                  activeTab === "past" ? "active" : ""
                }`}
                onClick={() => setActiveTab("past")}
              >
                Past Bookings
                <span className="tab-count-userManage">
                  {filteredBookings(pastBookings).length}
                </span>
              </button>
            </div>

            <div className="tab-content-userManage">
              {activeTab === "current" && (
                <div className="bookings-grid-userManage">
                  {filteredBookings(currentBookings).map((booking) => (
                    <div key={booking.id} className="booking-card-userManage">
                      <div className="booking-header-userManage">
                        <div className="booking-id-userManage">
                          #{booking.id}
                        </div>
                        <div
                          className={`status-badge-userManage ${getStatusBadge(
                            booking.status
                          )}`}
                        >
                          {booking.status}
                        </div>
                      </div>

                      <div className="user-info-userManage">
                        <h3 className="user-name-userManage">
                          {booking.userName}
                        </h3>
                        <p className="user-email-userManage">
                          {booking.userEmail}
                        </p>
                        <p className="user-phone-userManage">
                          {booking.userPhone}
                        </p>
                      </div>

                      <div className="booking-details-userManage">
                        <div className="detail-row-userManage">
                          <span className="detail-label-userManage">
                            Parking Spot:
                          </span>
                          <span className="detail-value-userManage">
                            {booking.parkingSpot}
                          </span>
                        </div>
                        <div className="detail-row-userManage">
                          <span className="detail-label-userManage">
                            Vehicle:
                          </span>
                          <span className="detail-value-userManage">
                            {booking.vehicleNumber}
                          </span>
                        </div>
                        <div className="detail-row-userManage">
                          <span className="detail-label-userManage">
                            Start Time:
                          </span>
                          <span className="detail-value-userManage">
                            {formatDateTime(booking.startTime)}
                          </span>
                        </div>
                        <div className="detail-row-userManage">
                          <span className="detail-label-userManage">
                            End Time:
                          </span>
                          <span className="detail-value-userManage">
                            {formatDateTime(booking.endTime)}
                          </span>
                        </div>
                        <div className="detail-row-userManage">
                          <span className="detail-label-userManage">
                            Duration:
                          </span>
                          <span className="detail-value-userManage">
                            {booking.duration}
                          </span>
                        </div>
                      </div>

                      <div className="booking-footer-userManage">
                        <div className="amount-userManage">
                          {booking.amount}
                        </div>
                        <div
                          className={`payment-status-userManage ${booking.paymentStatus.toLowerCase()}`}
                        >
                          {booking.paymentStatus}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "past" && (
                <div className="bookings-grid-userManage">
                  {filteredBookings(pastBookings).map((booking) => (
                    <div key={booking.id} className="booking-card-userManage">
                      <div className="booking-header-userManage">
                        <div className="booking-id-userManage">
                          #{booking.id}
                        </div>
                        <div
                          className={`status-badge-userManage ${getStatusBadge(
                            booking.status
                          )}`}
                        >
                          {booking.status}
                        </div>
                      </div>

                      <div className="user-info-userManage">
                        <h3 className="user-name-userManage">
                          {booking.userName}
                        </h3>
                        <p className="user-email-userManage">
                          {booking.userEmail}
                        </p>
                        <p className="user-phone-userManage">
                          {booking.userPhone}
                        </p>
                      </div>

                      <div className="booking-details-userManage">
                        <div className="detail-row-userManage">
                          <span className="detail-label-userManage">
                            Parking Spot:
                          </span>
                          <span className="detail-value-userManage">
                            {booking.parkingSpot}
                          </span>
                        </div>
                        <div className="detail-row-userManage">
                          <span className="detail-label-userManage">
                            Vehicle:
                          </span>
                          <span className="detail-value-userManage">
                            {booking.vehicleNumber}
                          </span>
                        </div>
                        <div className="detail-row-userManage">
                          <span className="detail-label-userManage">
                            Completed:
                          </span>
                          <span className="detail-value-userManage">
                            {booking.completedDate}
                          </span>
                        </div>
                        <div className="detail-row-userManage">
                          <span className="detail-label-userManage">
                            Duration:
                          </span>
                          <span className="detail-value-userManage">
                            {booking.duration}
                          </span>
                        </div>
                      </div>

                      <div className="booking-footer-userManage">
                        <div className="amount-userManage">
                          {booking.amount}
                        </div>
                        <div
                          className={`payment-status-userManage ${booking.paymentStatus.toLowerCase()}`}
                        >
                          {booking.paymentStatus}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManage;
