import React from "react";
import "./parkingPartners.css";
import imgLogo from "../../../../assets/logo.svg";
import Footer from "../../../../components/Footer/Footer";
import { Link } from "react-router-dom";

const parkingPartners = () => {
  return (
    <div className="parking-partners-page">
      {/* Header */}
      <header className="header-parking-partner">
        <div className=".header-content-parking-partner">
          <div className="logo-section">
            <img src={imgLogo} alt="Eways Services" className="logo" />
            <div className="company-name-pp">At Parkkin</div>
          </div>
          <nav>
            <ul className="nav-menu-parking-partner">
              <li>
                <Link to="/dashboard" className="nav-link-parking-partner">
                  Home
                </Link>
              </li>
              <li>
                <a href="#features" className="nav-link-parking-partner">
                  Features
                </a>
              </li>
              <li>
                <a href="#partners" className="nav-link-parking-partner">
                  Members
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link-parking-partner">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content-parking-partner">
          <div className="hero-text-parking-partner">
            <h1>
              Revolutionize{" "}
              <span className="highlight">Parking Management</span> for Modern
              Cities
            </h1>
            <p>
              Join the future of smart parking with our comprehensive management
              system. Streamline operations, maximize revenue, and provide
              seamless experiences for both vendors and customers.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary">
                Become a Member
              </a>
              <a href="#features" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div className="phone-mockup">
            <div className="phone-container">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="app-header">
                      <div className="app-title">Parkkin Admin</div>
                    </div>

                    <div className="parking-card">
                      <div className="parking-status">● OCCUPIED</div>
                      <div className="parking-location">
                        City Center Plaza - A1
                      </div>
                      <div className="parking-time">Started: 2:30 PM</div>
                    </div>

                    <div className="parking-card">
                      <div className="parking-status">● AVAILABLE</div>
                      <div className="parking-location">Mall Parking - B3</div>
                      <div className="parking-time">Last updated: 3:15 PM</div>
                    </div>

                    <div className="parking-card">
                      <div className="parking-status">● RESERVED</div>
                      <div className="parking-location">
                        Office Complex - C2
                      </div>
                      <div className="parking-time">
                        Reserved until: 6:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-content">
          <h2>Powerful Features for Parking Partners</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time Analytics</h3>
              <p>
                Get comprehensive insights into parking utilization, revenue
                trends, and customer behavior with our advanced analytics
                dashboard.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Seamless Payments</h3>
              <p>
                Integrated payment processing with multiple payment methods,
                automatic billing, and instant settlement for maximum
                convenience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Smart Space Management</h3>
              <p>
                Optimize your parking spaces with intelligent allocation
                algorithms and dynamic pricing based on demand and availability.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile App Integration</h3>
              <p>
                Complete mobile solution for both administrators and customers
                with intuitive interfaces and real-time updates.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Advanced Security</h3>
              <p>
                Enterprise-grade security with encrypted transactions, secure
                access controls, and compliance with industry standards.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Notifications</h3>
              <p>
                Stay informed with real-time alerts for bookings, payments,
                issues, and important updates across all your parking
                facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="partners">
        <div className="cta-content">
          <h2>Ready to Transform Your Parking Business?</h2>
          <p>
            Join hundreds of parking partners who have already revolutionized
            their operations with Parkkin's cutting-edge technology and
            increased their revenue by up to 40%.
          </p>
          <a href="#contact" className="btn-white">
            Start Your Membership Today
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default parkingPartners;
