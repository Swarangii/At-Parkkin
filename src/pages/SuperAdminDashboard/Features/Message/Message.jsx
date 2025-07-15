import React, { useEffect, useState } from "react";
import ImgLogo from "../../../../assets/logo.svg";
import "./Message.css";
const Message = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Mock data for messages
    setMessages([
      {
        id: 1,
        type: "user",
        sender: "John Doe",
        subject: "Parking Spot Unavailable",
        message:
          "The parking spot I booked was occupied when I arrived. Please resolve this issue.",
        time: "2 hours ago",
        priority: "high",
        status: "unread",
      },
      {
        id: 2,
        type: "vendor",
        sender: "City Mall Parking",
        subject: "Monthly Revenue Report",
        message:
          "Please find attached the monthly revenue report for December 2024.",
        time: "5 hours ago",
        priority: "medium",
        status: "read",
      },
      {
        id: 3,
        type: "system",
        sender: "System Alert",
        subject: "Server Maintenance Required",
        message:
          "Scheduled maintenance required for parking sensor systems on Zone A.",
        time: "1 day ago",
        priority: "high",
        status: "unread",
      },
      {
        id: 4,
        type: "user",
        sender: "Sarah Wilson",
        subject: "Payment Failed",
        message:
          "My payment for parking session failed. Please check the payment gateway.",
        time: "2 days ago",
        priority: "high",
        status: "read",
      },
      {
        id: 5,
        type: "vendor",
        sender: "Tech Park Solutions",
        subject: "New Partnership Proposal",
        message:
          "We would like to discuss a partnership opportunity for corporate parking solutions.",
        time: "3 days ago",
        priority: "low",
        status: "unread",
      },
    ]);

    setNotifications([
      {
        id: 1,
        type: "system",
        title: "High Traffic Alert",
        message: "Unusual high traffic detected in Zone B parking area.",
        time: "30 minutes ago",
        priority: "high",
      },
      {
        id: 2,
        type: "user",
        title: "New User Registration",
        message: "25 new users registered in the last hour.",
        time: "1 hour ago",
        priority: "medium",
      },
      {
        id: 3,
        type: "vendor",
        title: "Vendor Payment Due",
        message: "Payment due for 3 vendor partners.",
        time: "4 hours ago",
        priority: "medium",
      },
    ]);
  }, []);

  const filteredMessages = messages.filter(
    (message) => activeTab === "all" || message.type === activeTab
  );

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return "";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "user":
        return "👤";
      case "vendor":
        return "🏢";
      case "system":
        return "⚙️";
      default:
        return "📧";
    }
  };

  return (
    <div className="message-page-supmess">
      {/* Header */}
      <header className="header-supmess">
        <div className="header-content-supmess">
          <div className="logo-section-supmess">
            <img
              src={ImgLogo}
              alt="Eways Services"
              className="company-logo-supmess"
            />
            <h1 className="brand-name-supmess">At Parkkin</h1>
          </div>
          <div className="header-actions-supmess">
            <div className="notification-badge-supmess">
              <span className="badge-count-supmess">
                {notifications.length}
              </span>
            </div>
            <div className="admin-profile-supmess">
              <span>Super Admin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content-supmess">
        <div className="content-wrapper-supmess">
          {/* Page Title */}
          <div className="page-header-supmess">
            <h2 className="page-title-supmess">Message Center</h2>
            <p className="page-subtitle-supmess">
              Manage notifications and messages from users, vendors, and system
              alerts
            </p>
          </div>

          {/* Notifications Section */}
          <section className="notifications-section-supmess">
            <h3 className="section-title-supmess">Recent Notifications</h3>
            <div className="notifications-grid-supmess">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`notification-card-supmess ${getPriorityClass(
                    notification.priority
                  )}`}
                >
                  <div className="notification-header-supmess">
                    <span className="notification-icon-supmess">
                      {getTypeIcon(notification.type)}
                    </span>
                    <span className="notification-time-supmess">
                      {notification.time}
                    </span>
                  </div>
                  <h4 className="notification-title-supmess">
                    {notification.title}
                  </h4>
                  <p className="notification-message-supmess">
                    {notification.message}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Messages Section */}
          <section className="messages-section-supmess">
            <div className="section-header-supmess">
              <h3 className="section-title-supmess">Messages</h3>
              <div className="tab-filters-supmess">
                <button
                  className={`tab-button-supmess ${
                    activeTab === "all" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("all")}
                >
                  All Messages
                </button>
                <button
                  className={`tab-button-supmess ${
                    activeTab === "user" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("user")}
                >
                  Users
                </button>
                <button
                  className={`tab-button-supmess ${
                    activeTab === "vendor" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("vendor")}
                >
                  Vendors
                </button>
                <button
                  className={`tab-button-supmess ${
                    activeTab === "system" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("system")}
                >
                  System
                </button>
              </div>
            </div>

            <div className="messages-list-supmess">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`message-card-supmess ${
                    message.status
                  } ${getPriorityClass(message.priority)}`}
                >
                  <div className="message-header-supmess">
                    <div className="message-sender-supmess">
                      <span className="sender-icon-supmess">
                        {getTypeIcon(message.type)}
                      </span>
                      <div className="sender-info-supmess">
                        <span className="sender-name-supmess">
                          {message.sender}
                        </span>
                        <span className="message-type-supmess">
                          {message.type}
                        </span>
                      </div>
                    </div>
                    <div className="message-meta-supmess">
                      <span className="message-time-supmess">
                        {message.time}
                      </span>
                      <div
                        className={`priority-indicator-supmess ${getPriorityClass(
                          message.priority
                        )}`}
                      >
                        {message.priority}
                      </div>
                    </div>
                  </div>
                  <h4 className="message-subject-supmess">{message.subject}</h4>
                  <p className="message-preview-supmess">{message.message}</p>
                  <div className="message-actions-supmess">
                    <button className="action-btn-supmess primary-supmess">
                      Reply
                    </button>
                    <button className="action-btn-supmess secondary-supmess">
                      Mark as Read
                    </button>
                    <button className="action-btn-supmess danger-supmess">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Message;
