import React, { useState } from "react";
import ImgLogo from "../../../../assets/logo.svg";
import "./UserSettings.css";
const UserSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    locationServices: true,
    autoPayment: false,
    parkingReminders: true,
    emailUpdates: true,
    smsAlerts: false,
    darkMode: true,
    language: "english",
    currency: "usd",
  });

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    vehicleNumber: "ABC-1234",
  });

  const handleSettingChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleProfileChange = (key, value) => {
    setProfile((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="settings-container-scd">
      {/* Header */}
      <header className="settings-header-scd">
        <div className="header-content-scd">
          <div className="logo-section-scd">
            <img src={ImgLogo} alt="Eways Services" className="company-logo" />
            <div className="brand-text-scd">
              <h1>At Parkkin</h1>
              <p>Smart Parking Solutions</p>
            </div>
          </div>
          <div className="user-avatar-scd">
            <div className="avatar-circle-scd">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="settings-main-scd">
        <div className="settings-wrapper-scd">
          <div className="page-title-scd">
            <h2>Account Settings</h2>
            <p>Manage your parking preferences and account details</p>
          </div>

          <div className="settings-grid-scd">
            {/* Profile Section */}
            <section className="settings-card-scd profile-card-scd">
              <div className="card-header-scd">
                <h3>Profile Information</h3>
                <div className="header-icon-scd">👤</div>
              </div>
              <div className="card-content-scd">
                <div className="form-group-scd">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) =>
                      handleProfileChange("name", e.target.value)
                    }
                    className="form-input-scd"
                  />
                </div>
                <div className="form-group-scd">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      handleProfileChange("email", e.target.value)
                    }
                    className="form-input-scd"
                  />
                </div>
                <div className="form-group-scd">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) =>
                      handleProfileChange("phone", e.target.value)
                    }
                    className="form-input-scd"
                  />
                </div>
                <div className="form-group-scd">
                  <label>Vehicle Number</label>
                  <input
                    type="text"
                    value={profile.vehicleNumber}
                    onChange={(e) =>
                      handleProfileChange("vehicleNumber", e.target.value)
                    }
                    className="form-input-scd"
                  />
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="settings-card-scd">
              <div className="card-header-scd">
                <h3>Notifications</h3>
                <div className="header-icon-scd">🔔</div>
              </div>
              <div className="card-content-scd">
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">
                      Push Notifications
                    </span>
                    <span className="setting-desc-scd">
                      Receive parking alerts and updates
                    </span>
                  </div>
                  <label className="toggle-switch-scd">
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={() => handleSettingChange("notifications")}
                    />
                    <span className="slider-scd"></span>
                  </label>
                </div>
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">Parking Reminders</span>
                    <span className="setting-desc-scd">
                      Get reminded before parking expires
                    </span>
                  </div>
                  <label className="toggle-switch-scd">
                    <input
                      type="checkbox"
                      checked={settings.parkingReminders}
                      onChange={() => handleSettingChange("parkingReminders")}
                    />
                    <span className="slider-scd"></span>
                  </label>
                </div>
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">Email Updates</span>
                    <span className="setting-desc-scd">
                      Monthly reports and updates
                    </span>
                  </div>
                  <label className="toggle-switch-scd">
                    <input
                      type="checkbox"
                      checked={settings.emailUpdates}
                      onChange={() => handleSettingChange("emailUpdates")}
                    />
                    <span className="slider-scd"></span>
                  </label>
                </div>
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">SMS Alerts</span>
                    <span className="setting-desc-scd">
                      Text message notifications
                    </span>
                  </div>
                  <label className="toggle-switch-scd">
                    <input
                      type="checkbox"
                      checked={settings.smsAlerts}
                      onChange={() => handleSettingChange("smsAlerts")}
                    />
                    <span className="slider-scd"></span>
                  </label>
                </div>
              </div>
            </section>

            {/* Privacy & Security */}
            <section className="settings-card-scd">
              <div className="card-header-scd">
                <h3>Privacy & Security</h3>
                <div className="header-icon-scd">🔒</div>
              </div>
              <div className="card-content-scd">
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">Location Services</span>
                    <span className="setting-desc-scd">
                      Allow location access for nearby parking
                    </span>
                  </div>
                  <label className="toggle-switch-scd">
                    <input
                      type="checkbox"
                      checked={settings.locationServices}
                      onChange={() => handleSettingChange("locationServices")}
                    />
                    <span className="slider-scd"></span>
                  </label>
                </div>
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">Auto Payment</span>
                    <span className="setting-desc-scd">
                      Automatically pay for parking sessions
                    </span>
                  </div>
                  <label className="toggle-switch-scd">
                    <input
                      type="checkbox"
                      checked={settings.autoPayment}
                      onChange={() => handleSettingChange("autoPayment")}
                    />
                    <span className="slider-scd"></span>
                  </label>
                </div>
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">
                      Two-Factor Authentication
                    </span>
                    <span className="setting-desc-scd">
                      Add extra security to your account
                    </span>
                  </div>
                  <button className="action-button-scd secondary-scd">
                    Enable 2FA
                  </button>
                </div>
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">Change Password</span>
                    <span className="setting-desc-scd">
                      Update your account password
                    </span>
                  </div>
                  <button className="action-button-scd secondary-scd">
                    Change
                  </button>
                </div>
              </div>
            </section>

            {/* Preferences */}
            <section className="settings-card-scd">
              <div className="card-header-scd">
                <h3>Preferences</h3>
                <div className="header-icon-scd">⚙️</div>
              </div>
              <div className="card-content-scd">
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">Language</span>
                    <span className="setting-desc-scd">
                      Choose your preferred language
                    </span>
                  </div>
                  <select
                    className="form-select-scd"
                    value={settings.language}
                    onChange={(e) =>
                      handleSelectChange("language", e.target.value)
                    }
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                  </select>
                </div>
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">Currency</span>
                    <span className="setting-desc-scd">
                      Payment currency preference
                    </span>
                  </div>
                  <select
                    className="form-select-scd"
                    value={settings.currency}
                    onChange={(e) =>
                      handleSelectChange("currency", e.target.value)
                    }
                  >
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="gbp">GBP (£)</option>
                    <option value="inr">INR (₹)</option>
                  </select>
                </div>
                <div className="setting-item-scd">
                  <div className="setting-info-scd">
                    <span className="setting-title-scd">Dark Mode</span>
                    <span className="setting-desc-scd">
                      Switch between light and dark theme
                    </span>
                  </div>
                  <label className="toggle-switch-scd">
                    <input
                      type="checkbox"
                      checked={settings.darkMode}
                      onChange={() => handleSettingChange("darkMode")}
                    />
                    <span className="slider-scd"></span>
                  </label>
                </div>
              </div>
            </section>

            {/* Account Actions */}
            <section className="settings-card-scd account-actions-scd">
              <div className="card-header-scd">
                <h3>Account Actions</h3>
                <div className="header-icon-scd">🚀</div>
              </div>
              <div className="card-content-scd">
                <div className="action-grid-scd">
                  <button className="action-button-scd primary-scd">
                    Save Changes
                  </button>
                  <button className="action-button-scd secondary-scd">
                    Export Data
                  </button>
                  <button className="action-button-scd secondary-scd">
                    Contact Support
                  </button>
                  <button className="action-button-scd danger-scd">
                    Delete Account
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Phone Mockup */}
      <div className="phone-mockup-scd">
        <div className="phone-frame-scd">
          <div className="phone-screen-scd">
            <div className="app-preview-scd">
              <div className="app-header-scd">
                <div className="status-bar-scd"></div>
                <h4>Parkkin</h4>
              </div>
              <div className="app-content-scd">
                <div className="parking-spot-scd">
                  <div className="spot-info-scd">
                    <span>Spot A-12</span>
                    <span className="time-scd">2h 30m left</span>
                  </div>
                  <div className="extend-btn-scd">Extend</div>
                </div>
                <div className="map-preview-scd"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
