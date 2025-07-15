import React from "react";
import "./Complaint.css";
const phoneMockups = () => {
  return (
    <div className="phone-mockup-complaint">
      <div className="phone-frame-complaint">
        <div className="phone-screen-complaint">
          <div className="app-interface-complaint">
            <div className="app-header-complaint">
              <div className="status-bar-complaint">
                <span>9:41</span>
                <div className="signal-icons-complaint">
                  <span>📶</span>
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>
              <div className="app-title-complaint">
                <h3>At Parkkin</h3>
                <span>Find & Book Parking</span>
              </div>
            </div>

            <div className="app-content-complaint">
              <div className="search-section-complaint">
                <div className="search-bar-complaint">
                  <span className="search-icon-complaint">🔍</span>
                  <span>Search parking spots...</span>
                </div>
              </div>

              <div className="quick-actions-complaint">
                <div className="action-item-complaint active">
                  <div className="action-icon-complaint">🅿️</div>
                  <span>Book Now</span>
                </div>
                <div className="action-item-complaint">
                  <div className="action-icon-complaint">📍</div>
                  <span>My Spots</span>
                </div>
                <div className="action-item-complaint">
                  <div className="action-icon-complaint">💳</div>
                  <span>Payment</span>
                </div>
              </div>

              <div className="parking-info-complaint">
                <div className="info-card-complaint">
                  <div className="card-header-complaint">
                    <h4>Current Booking</h4>
                    <span className="status-badge-complaint">Active</span>
                  </div>
                  <div className="card-content-complaint">
                    <p>📍 Downtown Mall - Level B2</p>
                    <p>⏰ 2 hours remaining</p>
                    <div className="extend-btn-complaint">Extend Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default phoneMockups;
