import React, { useState } from "react";
import "./Vehicles.css";
import ImgLogo from "../../../../assets/logo.svg";
import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer/Footer";
const Vehicles = () => {
  const [showBookingForm, setShowBookingForm] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleNumber: "",
    date: "",
    time: "",
    duration: "1",
  });

  const vehicleTypes = [
    {
      id: 1,
      name: "Cars",
      icon: "🚗",
      description: "Standard parking spaces for sedans, hatchbacks, and SUVs",
      features: [
        "Compact & Mid-size",
        "SUVs & Crossovers",
        "Electric Vehicles",
        "Luxury Cars",
      ],
    },
    {
      id: 2,
      name: "Motorcycles",
      icon: "🏍️",
      description: "Dedicated spaces for motorcycles and scooters",
      features: ["Sports Bikes", "Cruisers", "Scooters", "Electric Bikes"],
    },
    {
      id: 3,
      name: "Bicycles",
      icon: "🚴",
      description: "Secure bicycle parking with lock facilities",
      features: [
        "Mountain Bikes",
        "Road Bikes",
        "Electric Bikes",
        "Folding Bikes",
      ],
    },
    {
      id: 4,
      name: "Buses",
      icon: "🚌",
      description: "Large parking areas for buses and coaches",
      features: ["City Buses", "Tourist Coaches", "School Buses", "Mini Buses"],
    },
    {
      id: 5,
      name: "Trucks",
      icon: "🚛",
      description: "Commercial parking for trucks and cargo vehicles",
      features: [
        "Delivery Trucks",
        "Semi-Trailers",
        "Pickup Trucks",
        "Cargo Vans",
      ],
    },
    {
      id: 6,
      name: "Vans",
      icon: "🚐",
      description: "Medium-sized parking for vans and mini-buses",
      features: ["Cargo Vans", "Passenger Vans", "Minivans", "Camper Vans"],
    },
  ];

  const features = [
    {
      title: "Smart Allocation",
      description:
        "AI-powered system automatically assigns optimal parking slots",
      icon: "🤖",
    },
    {
      title: "Real-time Tracking",
      description: "Monitor vehicle entry and exit with advanced sensors",
      icon: "📡",
    },
    {
      title: "Mobile Integration",
      description: "Seamless booking and payment through mobile app",
      icon: "📱",
    },
    {
      title: "24/7 Security",
      description: "Comprehensive surveillance and security monitoring",
      icon: "🔒",
    },
  ];

  const handleBookingClick = (vehicleId) => {
    setShowBookingForm(vehicleId);
  };

  const handleFormChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e, vehicleType) => {
    e.preventDefault();
    alert(
      `Booking request submitted for ${vehicleType}!\nName: ${bookingData.name}\nVehicle: ${bookingData.vehicleNumber}\nDate: ${bookingData.date}\nTime: ${bookingData.time}\nDuration: ${bookingData.duration} hours`
    );
    setShowBookingForm(null);
    setBookingData({
      name: "",
      email: "",
      phone: "",
      vehicleNumber: "",
      date: "",
      time: "",
      duration: "1",
    });
  };

  const closeBookingForm = () => {
    setShowBookingForm(null);
    setBookingData({
      name: "",
      email: "",
      phone: "",
      vehicleNumber: "",
      date: "",
      time: "",
      duration: "1",
    });
  };

  return (
    <div className="vehicles-page-vd">
      {/* Header */}
      <header className="header-vd">
        <div className="container-vd">
          <div className="header-content-vd">
            <div className="logo-section-vd">
              <img src={ImgLogo} alt="Eways Services" className="logo-vd" />
              <h1 className="brand-name-vd">At Parkkin</h1>
            </div>
            <nav className="nav-vd">
              <Link to="/dashboard" className="nav-link-vd">
                Home
              </Link>
              <a href="#services" className="nav-link-vd">
                Services
              </a>
              <a href="#vehicles" className="nav-link-vd active">
                Vehicles
              </a>
              <a href="#contact" className="nav-link-vd">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-vd">
        <div className="container-vd">
          <div className="hero-content-vd">
            <h2 className="hero-title-vd">
              Smart Parking Solutions
              <span className="gradient-text-vd">For Every Vehicle</span>
            </h2>
            <p className="hero-description-vd">
              Advanced parking management system supporting all vehicle types
              with intelligent allocation and real-time monitoring
            </p>
            <div className="hero-stats-vd">
              <div className="stat-vd">
                <div className="stat-number-vd">6</div>
                <div className="stat-label-vd">Vehicle Types</div>
              </div>
              <div className="stat-vd">
                <div className="stat-number-vd">24/7</div>
                <div className="stat-label-vd">Availability</div>
              </div>
            </div>
          </div>
          <div className="hero-visual-vd">
            <div className="phone-mockup-vd">
              <div className="phone-frame-vd">
                <div className="phone-content-vd">
                  <div className="app-header-vd">
                    <div className="app-title-vd">Parkkin</div>
                    <div className="app-status-vd">Connected</div>
                  </div>
                  <div className="app-content-vd">
                    <div className="parking-map-vd">
                      <div className="map-grid-vd">
                        <div className="parking-slot-vd occupied"></div>
                        <div className="parking-slot-vd available"></div>
                        <div className="parking-slot-vd occupied"></div>
                        <div className="parking-slot-vd available"></div>
                        <div className="parking-slot-vd available"></div>
                        <div className="parking-slot-vd occupied"></div>
                      </div>
                    </div>
                    <div className="quick-actions-vd">
                      <button className="action-btn-vd">Find Slot</button>
                      <button className="action-btn-vd">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="vehicle-types-vd">
        <div className="container-vd">
          <div className="section-header-vd">
            <h2 className="section-title-vd">Supported Vehicle Types</h2>
            <p className="section-description-vd">
              Our smart parking system accommodates all types of vehicles with
              optimized slot allocation and competitive pricing
            </p>
          </div>
          <div className="vehicles-grid-vd">
            {vehicleTypes.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-card-vd">
                <div className="vehicle-icon-vd">{vehicle.icon}</div>
                <h3 className="vehicle-name-vd">{vehicle.name}</h3>
                <p className="vehicle-description-vd">{vehicle.description}</p>
                <div className="vehicle-features-vd">
                  {vehicle.features.map((feature, index) => (
                    <span key={index} className="feature-tag-vd">
                      {feature}
                    </span>
                  ))}
                </div>

                {showBookingForm === vehicle.id ? (
                  <div className="booking-form-container-vd">
                    <div className="booking-form-overlay-vd">
                      <div className="booking-form-wrapper-vd">
                        <form
                          className="booking-form-vd"
                          onSubmit={(e) => handleFormSubmit(e, vehicle.name)}
                        >
                          <div className="form-header-vd">
                            <h3 className="form-title-vd">
                              Book {vehicle.name} Parking
                            </h3>
                            <button
                              type="button-vd"
                              className="close-btn-vd"
                              onClick={closeBookingForm}
                            >
                              ×
                            </button>
                          </div>

                          <div className="form-content-vd">
                            <div className="form-section-vd">
                              <h4 className="section-title-vd">
                                Personal Information
                              </h4>
                              <div className="form-group-vd">
                                <label htmlFor="name" className="form-label-vd">
                                  Full Name *
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="form-input-vd"
                                  value={bookingData.name}
                                  onChange={handleFormChange}
                                  placeholder="Enter your full name"
                                  required
                                />
                              </div>

                              <div className="form-row-vd">
                                <div className="form-group-vd">
                                  <label
                                    htmlFor="email"
                                    className="form-label-vd"
                                  >
                                    Email Address *
                                  </label>
                                  <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input-vd"
                                    value={bookingData.email}
                                    onChange={handleFormChange}
                                    placeholder="your.email@example.com"
                                    required
                                  />
                                </div>

                                <div className="form-group-vd">
                                  <label htmlFor="phone" className="form-label">
                                    Phone Number *
                                  </label>
                                  <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input-vd"
                                    value={bookingData.phone}
                                    onChange={handleFormChange}
                                    placeholder="+1 (555) 123-4567"
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-section-vd">
                              <h4 className="section-title-vd">
                                Vehicle & Booking Details
                              </h4>
                              <div className="form-group-vd">
                                <label
                                  htmlFor="vehicleNumber"
                                  className="form-label-vd"
                                >
                                  Vehicle Number *
                                </label>
                                <input
                                  type="text"
                                  id="vehicleNumber"
                                  name="vehicleNumber"
                                  className="form-input-vd"
                                  value={bookingData.vehicleNumber}
                                  onChange={handleFormChange}
                                  placeholder="e.g., ABC-1234"
                                  required
                                />
                              </div>

                              <div className="form-row-vd">
                                <div className="form-group-vd">
                                  <label
                                    htmlFor="date"
                                    className="form-label-vd"
                                  >
                                    Parking Date *
                                  </label>
                                  <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="form-input-vd"
                                    value={bookingData.date}
                                    onChange={handleFormChange}
                                    required
                                  />
                                </div>

                                <div className="form-group-vd">
                                  <label
                                    htmlFor="time"
                                    className="form-label-vd"
                                  >
                                    Arrival Time *
                                  </label>
                                  <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    className="form-input-vd"
                                    value={bookingData.time}
                                    onChange={handleFormChange}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="form-group-vd">
                                <label
                                  htmlFor="duration"
                                  className="form-label-vd"
                                >
                                  Duration *
                                </label>
                                <select
                                  id="duration"
                                  name="duration"
                                  className="form-select-vd"
                                  value={bookingData.duration}
                                  onChange={handleFormChange}
                                  required
                                >
                                  <option value="1">1 hour</option>
                                  <option value="2">2 hours</option>
                                  <option value="4">4 hours</option>
                                  <option value="8">8 hours</option>
                                  <option value="12">12 hours</option>
                                  <option value="24">24 hours</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="form-actions-vd">
                            <button
                              type="button"
                              className="cancel-btn-vd"
                              onClick={closeBookingForm}
                            >
                              Cancel
                            </button>
                            <button type="submit" className="submit-btn-vd">
                              <span>Confirm Booking</span>
                              <span className="btn-icon-vd">→</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    className="book-btn-vd"
                    onClick={() => handleBookingClick(vehicle.id)}
                  >
                    <span>Book Slot</span>
                    <span className="btn-arrow-vd">→</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-vd">
        <div className="container-vd">
          <div className="section-header-vd">
            <h2 className="section-title-vd">Why Choose Parkkin?</h2>
            <p className="section-description-vd">
              Advanced technology meets user-friendly design for the ultimate
              parking experience
            </p>
          </div>
          <div className="features-grid-vd">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-vd">
                <div className="feature-icon-vd">{feature.icon}</div>
                <h3 className="feature-title-vd">{feature.title}</h3>
                <p className="feature-description-vd">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-vd">
        <div className="container-vd">
          <div className="cta-content-vd">
            <h2 className="cta-title-vd">Ready to Experience Smart Parking?</h2>
            <p className="cta-description-vd">
              Join thousands of satisfied customers who trust Parkkin for their
              parking needs
            </p>
            <div className="cta-buttons-vd">
              <button className="cta-btn-vd primary">Download App</button>
              <button className="cta-btn-vd secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Vehicles;
