import React from "react";
import ImgLogo from "../../../../assets/logo.svg";
import "./Community.css";
import { Link } from "react-router-dom";
const Community = () => {
  return (
    <div className="parking-community-cd">
      {/* Header */}
      <header className="header-cd">
        <div className="container-cd">
          <div className="header-content-cd">
            <div className="logo-section-cd">
              <img
                src={ImgLogo}
                alt="Eways Services"
                className="company-logo-cd"
              />
              <h1 className="brand-name-cd">At Parkkin</h1>
            </div>
            <nav className="nav-cd">
              <Link to="/dashboard" className="nav-link-cd">
                Home
              </Link>
              <a href="#community" className="nav-link-cd">
                Community
              </a>

              <a href="#contact" className="nav-link-cd">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-cd">
        <div className="hero-background-cd">
          <div className="hero-particles-cd"></div>
          <div className="hero-gradient-cd"></div>
        </div>
        <div className="container-cd">
          <div className="hero-content-cd">
            <div className="hero-text-cd">
              <div className="hero-badge-cd">
                <span className="badge-icon-cd">🚀</span>
                <span>Leading Parking Innovation</span>
              </div>
              <h1 className="hero-title-cd">
                Smart Parking
                <span className="gradient-text-cd"> Revolution</span>
              </h1>
              <p className="hero-description-cd">
                Join our thriving community of users, vendors, and
                administrators transforming urban parking through innovative
                technology solutions.
              </p>
              <div className="hero-buttons-cd">
                <button className="btn-cd btn-primary-cd">
                  <a href="#Join-community">Join Community</a>
                  <span className="btn-icon-cd">→</span>
                </button>
                <button className="btn-cd btn-secondary-cd">
                  <span className="play-icon-cd">▶</span>
                  <span>Watch Demo</span>
                </button>
              </div>
              <div className="stats-cd">
                <div className="stat-cd">
                  <span className="stat-number-cd">50K+</span>
                  <span className="stat-label-cd">Active Users</span>
                  <div className="stat-growth-cd">+25%</div>
                </div>
                <div className="stat-cd">
                  <span className="stat-number-cd">1K+</span>
                  <span className="stat-label-cd">Vendor Partners</span>
                  <div className="stat-growth-cd">+40%</div>
                </div>
                <div className="stat-cd">
                  <span className="stat-number-cd">100+</span>
                  <span className="stat-label-cd">Cities</span>
                  <div className="stat-growth-cd">+60%</div>
                </div>
              </div>
            </div>
            <div className="hero-visual-cd">
              <div className="phone-mockup-cd">
                <div className="phone-glow-cd"></div>
                <div className="phone-frame-cd">
                  <div className="phone-screen-cd">
                    <div className="app-header-cd">
                      <div className="app-title-cd">Parkkin</div>
                      <div className="app-status-cd">
                        <span className="status-dot-cd"></span>
                        <span>Live</span>
                      </div>
                    </div>
                    <div className="map-area-cd">
                      <div className="parking-spot-cd available-cd">
                        <span className="spot-number-cd">A1</span>
                      </div>
                      <div className="parking-spot-cd occupied-cd">
                        <span className="spot-number-cd">A2</span>
                      </div>
                      <div className="parking-spot-cd available-cd">
                        <span className="spot-number-cd">A3</span>
                      </div>
                      <div className="parking-spot-cd reserved-cd">
                        <span className="spot-number-cd">A4</span>
                      </div>
                    </div>
                    <div className="booking-card-cd">
                      <div className="booking-header-cd">
                        <span>Premium Spot Available</span>
                        <span className="distance-cd">50m away</span>
                      </div>
                      <div className="booking-info-cd">
                        <div className="price-section-cd">
                          <span className="price-cd">$5</span>
                          <span className="price-unit-cd">/hr</span>
                        </div>
                        <div className="rating-cd">
                          <span>⭐</span>
                          <span>4.8</span>
                        </div>
                      </div>
                      <button className="book-btn-cd">
                        <span>Book Now</span>
                        <span className="booking-arrow-cd">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="community-cd">
        <div className="container-cd">
          <div className="section-header-cd">
            <div className="section-badge-cd">
              <span>Our Community</span>
            </div>
            <h2 className="section-title-cd">
              Connecting Everyone in the Parking Ecosystem
            </h2>
            <p className="section-description-cd">
              Three distinct user groups working together to revolutionize urban
              parking
            </p>
          </div>

          <div className="community-grid-cd">
            {/* Users Card */}
            <div
              className="community-card-cd users-card-cd"
              id="Join-community"
            >
              <div className="card-glow-cd"></div>
              <div className="card-header-cd">
                <div className="icon-wrapper-cd users-icon-cd">
                  <span>👥</span>
                </div>
                <div className="card-title-section-cd">
                  <h3>Users</h3>
                  <span className="user-count-cd">50K+ Active</span>
                </div>
              </div>
              <div className="card-content-cd">
                <p>
                  Drivers finding convenient, affordable parking solutions with
                  real-time availability and seamless booking.
                </p>
                <ul className="feature-list-cd">
                  <li>
                    <span className="feature-icon-cd">📍</span>
                    Real-time parking availability
                  </li>
                  <li>
                    <span className="feature-icon-cd">💳</span>
                    Mobile payments & reservations
                  </li>
                  <li>
                    <span className="feature-icon-cd">🗺️</span>
                    Navigation to parking spots
                  </li>
                  <li>
                    <span className="feature-icon-cd">⭐</span>
                    Community reviews & ratings
                  </li>
                </ul>
                <button className="card-btn-cd">
                  <span>Join as User</span>
                  <span className="btn-arrow-cd">→</span>
                </button>
              </div>
            </div>

            {/* Vendors Card */}
            <div className="community-card-cd vendors-card-cd">
              <div className="card-glow-cd"></div>
              <div className="card-header-cd">
                <div className="icon-wrapper-cd vendors-icon-cd">
                  <span>🏢</span>
                </div>
                <div className="card-title-section-cd">
                  <h3>Vendors</h3>
                  <span className="user-count-cd">1K+ Partners</span>
                </div>
              </div>
              <div className="card-content-cd">
                <p>
                  Parking lot owners and operators maximizing revenue through
                  smart management and digital solutions.
                </p>
                <ul className="feature-list-cd">
                  <li>
                    <span className="feature-icon-cd">📈</span>
                    Revenue optimization tools
                  </li>
                  <li>
                    <span className="feature-icon-cd">📊</span>
                    Real-time occupancy monitoring
                  </li>
                  <li>
                    <span className="feature-icon-cd">🤖</span>
                    Automated pricing strategies
                  </li>
                  <li>
                    <span className="feature-icon-cd">📋</span>
                    Customer analytics dashboard
                  </li>
                </ul>
                <button className="card-btn-cd">
                  <span>Become Vendor</span>
                  <span className="btn-arrow-cd">→</span>
                </button>
              </div>
            </div>

            {/* Super Admins Card */}
            <div className="community-card-cd admins-card-cd">
              <div className="card-glow-cd"></div>
              <div className="card-header-cd">
                <div className="icon-wrapper-cd admins-icon-cd">
                  <span>⚙️</span>
                </div>
                <div className="card-title-section-cd">
                  <h3>Super Admins</h3>
                  <span className="user-count-cd">Elite Access</span>
                </div>
              </div>
              <div className="card-content-cd">
                <p>
                  System administrators managing the entire platform ecosystem
                  with advanced controls and insights.
                </p>
                <ul className="feature-list-cd">
                  <li>
                    <span className="feature-icon-cd">🔍</span>
                    System-wide monitoring
                  </li>
                  <li>
                    <span className="feature-icon-cd">👥</span>
                    User & vendor management
                  </li>
                  <li>
                    <span className="feature-icon-cd">📈</span>
                    Advanced analytics & reporting
                  </li>
                  <li>
                    <span className="feature-icon-cd">⚙️</span>
                    Platform configuration tools
                  </li>
                </ul>
                <button className="card-btn-cd">
                  <span>Admin Portal</span>
                  <span className="btn-arrow-cd">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-cd" id="contact">
        <div className="container-cd">
          <div className="footer-content-cd">
            <div className="footer-section-cd">
              <div className="footer-logo-cd">
                <img
                  src={ImgLogo}
                  alt="Eways Services-cd"
                  className="footer-logo-img-cd"
                />
                <span>At Parkkin</span>
              </div>
              <p>
                Revolutionizing urban parking through smart technology and
                innovative solutions.
              </p>
              <div className="social-links-cd">
                <a href="#" className="social-link-cd">
                  LinkedIn
                </a>
                <a href="#" className="social-link-cd">
                  Twitter
                </a>
                <a href="#" className="social-link-cd">
                  Facebook
                </a>
              </div>
            </div>
            <div className="footer-section-cd">
              <h4>Community</h4>
              <ul>
                <li>
                  <a href="#users">Users</a>
                </li>
                <li>
                  <a href="#vendors">Vendors</a>
                </li>
                <li>
                  <a href="#admins">Super Admins</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
              </ul>
            </div>
            <div className="footer-section-cd">
              <h4>Products</h4>
              <ul>
                <li>
                  <a href="#mobile">Mobile App</a>
                </li>
                <li>
                  <a href="#web">Web Platform</a>
                </li>
                <li>
                  <a href="#api">Developer API</a>
                </li>
                <li>
                  <a href="#integrations">Integrations</a>
                </li>
              </ul>
            </div>
            <div className="footer-section-cd">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#press">Press</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom-cd">
            <p>
              &copy; 2024 Eways Services Private Limited. All rights reserved.
            </p>
            <div className="footer-links-cd">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Community;
