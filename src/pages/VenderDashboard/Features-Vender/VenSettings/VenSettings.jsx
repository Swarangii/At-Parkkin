import React, { useState } from "react";
import "./VenSettings.css";
import Footer from "../../../../components/Footer/Footer";
import ImgLogo from "../../../../assets/logo.svg";
import { Link } from "react-router-dom";
const VenSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [settings, setSettings] = useState({
    // Profile Settings
    companyName: "Metro Parking Solutions",
    contactEmail: "admin@metroparking.com",
    phoneNumber: "+91 9876435756",
    address: "123 Business District, City Center",

    // Parking Settings
    hourlyRate: 5.0,
    dailyRate: 25.0,
    monthlyRate: 150.0,
    reservationFee: 2.0,
    cancellationPolicy: "24hours",

    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    bookingAlerts: true,
    paymentAlerts: true,

    // Security
    twoFactorAuth: false,
    loginAlerts: true,

    // Business Hours
    businessHours: {
      monday: { open: "06:00", close: "22:00", closed: false },
      tuesday: { open: "06:00", close: "22:00", closed: false },
      wednesday: { open: "06:00", close: "22:00", closed: false },
      thursday: { open: "06:00", close: "22:00", closed: false },
      friday: { open: "06:00", close: "22:00", closed: false },
      saturday: { open: "08:00", close: "20:00", closed: false },
      sunday: { open: "08:00", close: "18:00", closed: false },
    },
  });

  const handleInputChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBusinessHoursChange = (day, field, value) => {
    setSettings((prev) => ({
      ...prev,
      businessHours: {
        ...prev.businessHours,
        [day]: {
          ...prev.businessHours[day],
          [field]: value,
        },
      },
    }));
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
    // Here you would typically save to backend
    alert("Settings saved successfully!");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="settings-section-venset">
            <div className="section-header-venset">
              <h3>Company Profile</h3>
              <p>Manage your business information and contact details</p>
            </div>
            <div className="form-grid-venset">
              <div className="form-group-venset">
                <label>Company Name</label>
                <input
                  type="text"
                  value={settings.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  className="form-input-venset"
                />
              </div>
              <div className="form-group-venset">
                <label>Contact Email</label>
                <input
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) =>
                    handleInputChange("contactEmail", e.target.value)
                  }
                  className="form-input-venset"
                />
              </div>
              <div className="form-group-venset">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={settings.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  className="form-input-venset"
                />
              </div>
              <div className="form-group-venset full-width-venset">
                <label>Business Address</label>
                <textarea
                  value={settings.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="form-textarea-venset"
                  rows="3"
                />
              </div>
            </div>
          </div>
        );

      case "parking":
        return (
          <div className="settings-section-venset">
            <div className="section-header-venset">
              <h3>Parking Configuration</h3>
              <p>Set your pricing and parking policies</p>
            </div>
            <div className="form-grid-venset">
              <div className="form-group-venset">
                <label>Hourly Rate (₹)</label>
                <input
                  type="number"
                  step="0.01"
                  value={settings.hourlyRate}
                  onChange={(e) =>
                    handleInputChange("hourlyRate", parseFloat(e.target.value))
                  }
                  className="form-input-venset"
                />
              </div>
              <div className="form-group-venset">
                <label>Daily Rate (₹)</label>
                <input
                  type="number"
                  step="0.01"
                  value={settings.dailyRate}
                  onChange={(e) =>
                    handleInputChange("dailyRate", parseFloat(e.target.value))
                  }
                  className="form-input-venset"
                />
              </div>
              <div className="form-group-venset">
                <label>Monthly Rate (₹)</label>
                <input
                  type="number"
                  step="0.01"
                  value={settings.monthlyRate}
                  onChange={(e) =>
                    handleInputChange("monthlyRate", parseFloat(e.target.value))
                  }
                  className="form-input-venset"
                />
              </div>
              <div className="form-group-venset">
                <label>Reservation Fee (₹)</label>
                <input
                  type="number"
                  step="0.01"
                  value={settings.reservationFee}
                  onChange={(e) =>
                    handleInputChange(
                      "reservationFee",
                      parseFloat(e.target.value)
                    )
                  }
                  className="form-input-venset"
                />
              </div>
              <div className="form-group-venset">
                <label>Describtion </label>
                <input
                  type="string"
                  step="0.01"
                  value={settings.reservationFee}
                  onChange={(e) =>
                    handleInputChange(parseFloat(e.target.value))
                  }
                  className="form-input-venset"
                />
              </div>
              <div className="form-group-venset full-width-venset">
                <label>Cancellation Policy</label>
                <select
                  value={settings.cancellationPolicy}
                  onChange={(e) =>
                    handleInputChange("cancellationPolicy", e.target.value)
                  }
                  className="form-select-venset"
                >
                  <option value="1hour">1 Hour Before</option>
                  <option value="24hours">24 Hours Before</option>
                  <option value="48hours">48 Hours Before</option>
                  <option value="no-cancellation">No Cancellation</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "hours":
        return (
          <div className="settings-section-venset">
            <div className="section-header-venset">
              <h3>Business Hours</h3>
              <p>Configure your parking facility operating hours</p>
            </div>
            <div className="business-hours-venset">
              {Object.entries(settings.businessHours).map(([day, hours]) => (
                <div key={day} className="day-row-venset">
                  <div className="day-name-venset">
                    <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                  </div>
                  <div className="day-controls-venset">
                    <label className="switch-venset">
                      <input
                        type="checkbox"
                        checked={!hours.closed}
                        onChange={(e) =>
                          handleBusinessHoursChange(
                            day,
                            "closed",
                            !e.target.checked
                          )
                        }
                      />
                      <span className="slider-venset"></span>
                    </label>
                    {!hours.closed && (
                      <>
                        <input
                          type="time"
                          value={hours.open}
                          onChange={(e) =>
                            handleBusinessHoursChange(
                              day,
                              "open",
                              e.target.value
                            )
                          }
                          className="time-input-venset"
                        />
                        <span className="time-separator-venset">to</span>
                        <input
                          type="time"
                          value={hours.close}
                          onChange={(e) =>
                            handleBusinessHoursChange(
                              day,
                              "close",
                              e.target.value
                            )
                          }
                          className="time-input-venset"
                        />
                      </>
                    )}
                    {hours.closed && (
                      <span className="closed-text-venset">Closed</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="settings-section-venset">
            <div className="section-header-venset">
              <h3>Notification Preferences</h3>
              <p>Choose how you want to receive updates and alerts</p>
            </div>
            <div className="notification-settings-venset">
              <div className="notification-group-venset">
                <h4>Communication Channels</h4>
                <div className="setting-item-venset">
                  <div className="setting-info-venset">
                    <span className="setting-name-venset">
                      Email Notifications
                    </span>
                    <span className="setting-desc-venset">
                      Receive updates via email
                    </span>
                  </div>
                  <label className="switch-venset">
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={(e) =>
                        handleInputChange(
                          "emailNotifications",
                          e.target.checked
                        )
                      }
                    />
                    <span className="slider-venset"></span>
                  </label>
                </div>
                <div className="setting-item-venset">
                  <div className="setting-info-venset">
                    <span className="setting-name-venset">
                      SMS Notifications
                    </span>
                    <span className="setting-desc-venset">
                      Receive urgent alerts via SMS
                    </span>
                  </div>
                  <label className="switch-venset">
                    <input
                      type="checkbox"
                      checked={settings.smsNotifications}
                      onChange={(e) =>
                        handleInputChange("smsNotifications", e.target.checked)
                      }
                    />
                    <span className="slider-venset"></span>
                  </label>
                </div>
                <div className="setting-item-venset">
                  <div className="setting-info-venset">
                    <span className="setting-name-venset">
                      Push Notifications
                    </span>
                    <span className="setting-desc-venset">
                      Browser and mobile app notifications
                    </span>
                  </div>
                  <label className="switch-venset">
                    <input
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={(e) =>
                        handleInputChange("pushNotifications", e.target.checked)
                      }
                    />
                    <span className="slider-venset"></span>
                  </label>
                </div>
              </div>
              <div className="notification-group-venset">
                <h4>Alert Types</h4>
                <div className="setting-item-venset">
                  <div className="setting-info-venset">
                    <span className="setting-name-venset">Booking Alerts</span>
                    <span className="setting-desc-venset">
                      New bookings and cancellations
                    </span>
                  </div>
                  <label className="switch-venset">
                    <input
                      type="checkbox"
                      checked={settings.bookingAlerts}
                      onChange={(e) =>
                        handleInputChange("bookingAlerts", e.target.checked)
                      }
                    />
                    <span className="slider-venset"></span>
                  </label>
                </div>
                <div className="setting-item-venset">
                  <div className="setting-info-venset">
                    <span className="setting-name-venset">Payment Alerts</span>
                    <span className="setting-desc-venset">
                      Payment confirmations and issues
                    </span>
                  </div>
                  <label className="switch-venset">
                    <input
                      type="checkbox"
                      checked={settings.paymentAlerts}
                      onChange={(e) =>
                        handleInputChange("paymentAlerts", e.target.checked)
                      }
                    />
                    <span className="slider-venset"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="settings-section-venset">
            <div className="section-header-venset">
              <h3>Security Settings</h3>
              <p>Protect your account with advanced security features</p>
            </div>
            <div className="security-settings-venset">
              <div className="setting-item-venset">
                <div className="setting-info-venset">
                  <span className="setting-name-venset">
                    Two-Factor Authentication
                  </span>
                  <span className="setting-desc-venset">
                    Add an extra layer of security to your account
                  </span>
                </div>
                <label className="switch-venset">
                  <input
                    type="checkbox"
                    checked={settings.twoFactorAuth}
                    onChange={(e) =>
                      handleInputChange("twoFactorAuth", e.target.checked)
                    }
                  />
                  <span className="slider-venset"></span>
                </label>
              </div>
              <div className="setting-item-venset">
                <div className="setting-info-venset">
                  <span className="setting-name-venset">Login Alerts</span>
                  <span className="setting-desc-venset">
                    Get notified of new login attempts
                  </span>
                </div>
                <label className="switch-venset">
                  <input
                    type="checkbox"
                    checked={settings.loginAlerts}
                    onChange={(e) =>
                      handleInputChange("loginAlerts", e.target.checked)
                    }
                  />
                  <span className="slider-venset"></span>
                </label>
              </div>
              <div className="security-actions-venset">
                <button className="btn-venset btn-outline-venset">
                  Change Password
                </button>
                <button className="btn-venset btn-outline-venset">
                  Download Security Report
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="vendor-settings-venset">
      <header className="settings-header-venset">
        <div className="header-content-venset">
          <div className="header-left-venset">
            <img
              src={ImgLogo}
              alt="Eways Services"
              className="company-logo-venset"
            />
            <div className="header-text-venset">
              <h1>At Parkkin</h1>
              <p>Vendor Settings Portal</p>
            </div>
          </div>
          <div className="header-right-venset">
            <button
              className="btn-venset btn-primary-venset"
              onClick={handleSave}
            >
              <Link to="/venderdashboard" className="btn-link-venset">
                Save Changes
              </Link>
            </button>
          </div>
        </div>
      </header>

      <div className="settings-container-venset">
        <nav className="settings-nav-venset">
          <div className="nav-header-venset">
            <h2>Settings</h2>
          </div>
          <ul className="nav-list-venset">
            <li>
              <button
                className={`nav-item-venset ${
                  activeTab === "profile" ? "active" : ""
                }`}
                onClick={() => setActiveTab("profile")}
              >
                <span className="nav-icon-venset">👤</span>
                <span className="nav-text-venset">Profile</span>
              </button>
            </li>
            <li>
              <button
                className={`nav-item-venset ${
                  activeTab === "parking" ? "active" : ""
                }`}
                onClick={() => setActiveTab("parking")}
              >
                <span className="nav-icon-venset">🅿️</span>
                <span className="nav-text-venset">Parking</span>
              </button>
            </li>
            <li>
              <button
                className={`nav-item-venset ${
                  activeTab === "hours" ? "active" : ""
                }`}
                onClick={() => setActiveTab("hours")}
              >
                <span className="nav-icon-venset">🕒</span>
                <span className="nav-text-venset">Business Hours</span>
              </button>
            </li>
            <li>
              <button
                className={`nav-item-venset ${
                  activeTab === "notifications" ? "active" : ""
                }`}
                onClick={() => setActiveTab("notifications")}
              >
                <span className="nav-icon-venset">🔔</span>
                <span className="nav-text-venset">Notifications</span>
              </button>
            </li>
            <li>
              <button
                className={`nav-item-venset ${
                  activeTab === "security" ? "active" : ""
                }`}
                onClick={() => setActiveTab("security")}
              >
                <span className="nav-icon-venset">🔐</span>
                <span className="nav-text-venset">Security</span>
              </button>
            </li>
          </ul>
        </nav>
        <main className="settings-main-venset">{renderTabContent()}</main>
      </div>
      <Footer />
    </div>
  );
};

export default VenSettings;
