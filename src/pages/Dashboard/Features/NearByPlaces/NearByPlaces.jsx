import React, { useEffect, useState } from "react";
import Footer from "../../../../components/Footer/Footer";
import ImgLogo from "../../../../assets/logo.svg";
import "./NearByPlaces.css";
import { Link } from "react-router-dom";
const NearByPlaces = () => {
  const [userLocation, setUserLocation] = useState("Loading...");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock nearby places data
  const nearbyPlaces = [
    {
      id: 1,
      name: "City Center Mall",
      distance: "0.5 km",
      availableSlots: 45,
      totalSlots: 200,
      price: "₹2/hour",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      address: "123 Downtown Street",
    },
    {
      id: 2,
      name: "Metro Station Plaza",
      distance: "0.8 km",
      availableSlots: 23,
      totalSlots: 150,
      price: "₹1.5/hour",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      address: "456 Transit Avenue",
    },
    {
      id: 3,
      name: "Business District",
      distance: "1.2 km",
      availableSlots: 67,
      totalSlots: 300,
      price: "₹3/hour",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      address: "789 Corporate Blvd",
    },
    {
      id: 4,
      name: "University Campus",
      distance: "1.5 km",
      availableSlots: 12,
      totalSlots: 80,
      price: "₹1/hour",
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      address: "321 Education Lane",
    },
    {
      id: 5,
      name: "Airport Terminal",
      distance: "2.1 km",
      availableSlots: 156,
      totalSlots: 500,
      price: "₹4/hour",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
      address: "999 Airport Road",
    },
    {
      id: 6,
      name: "Shopping Complex",
      distance: "1.8 km",
      availableSlots: 34,
      totalSlots: 250,
      price: "₹2.5/hour",
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1577715597610-257f957c5bf8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      address: "555 Retail Street",
    },
  ];

  useEffect(() => {
    // Simulate getting user location
    setTimeout(() => {
      setUserLocation("Downtown, New York");
    }, 1000);
  }, []);

  const filteredPlaces = nearbyPlaces.filter(
    (place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookNow = (place) => {
    setSelectedPlace(place);
    console.log("Booking parking at:", place.name);
  };

  const getAvailabilityColor = (available, total) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return "#00e676";
    if (percentage > 25) return "#ffb74d";
    return "#f44336";
  };

  return (
    <div className="nearby-places-container-nbpd">
      {/* Header */}
      <header className="header-nbpd">
        <div className="header-content-nbpd">
          <div className="logo-section-nbpd">
            <img src={ImgLogo} alt="Eways Services" className="logo-nbpd" />
            <h1 className="brand-name-nbpd">At Parkkin</h1>
          </div>
          <nav className="nav-menu-nbpd">
            <Link to="/dashboard" className="nav-link-nbpd">
              Home
            </Link>
            <Link to="/vehicles" className="nav-link-nbpd">
              Book Parking
            </Link>
            <Link to="/near-by-places" className="nav-link-nbpd active">
              Nearby Places
            </Link>
            <Link to="/report" className="nav-link-nbpd">
              My Bookings
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section-nbpd">
        <div className="hero-content-nbpd">
          <div className="hero-text-nbpd">
            <h2 className="hero-title-nbpd">Find Parking Near You</h2>
            <p className="hero-subtitle-nbpd">
              Discover available parking slots at nearby locations and book
              instantly
            </p>
            <div className="location-info-nbpd">
              <div className="location-icon-nbpd">📍</div>
              <span className="current-location-nbpd">{userLocation}</span>
            </div>
          </div>
          <div className="hero-phone-nbpd">
            <div className="phone-mockup-nbpd">
              <div className="phone-screen-nbpd">
                <div className="app-interface-nbpd">
                  <div className="app-header-nbpd">
                    <div className="app-logo-nbpd"></div>
                    <span>Parkkin</span>
                  </div>
                  <div className="map-preview-nbpd"></div>
                  <div className="quick-stats-nbpd">
                    <div className="stat-nbpd">
                      <span className="stat-number-nbpd">156</span>
                      <span className="stat-label-nbpd">Available</span>
                    </div>
                    <div className="stat-nbpd">
                      <span className="stat-number-nbpd">2.1km</span>
                      <span className="stat-label-nbpd">Nearest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section-nbpd">
        <div className="search-container-nbpd">
          <div className="search-box-nbpd">
            <input
              type="text"
              placeholder="Search for places, malls, stations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-nbpd"
            />
            <button className="search-button-nbpd">🔍</button>
          </div>
          <div className="filters-nbpd">
            <button className="filter-btn-nbpd active-nbpd">All</button>
            <button className="filter-btn-nbpd">Malls</button>
            <button className="filter-btn-nbpd">Stations</button>
            <button className="filter-btn-nbpd">Offices</button>
            <button className="filter-btn-nbpd">Airports</button>
          </div>
        </div>
      </section>

      {/* Places Grid */}
      <section className="places-section-nbpd">
        <div className="places-container-nbpd">
          <div className="section-header-nbpd">
            <h3 className="section-title-nbpd">Nearby Parking Locations</h3>
            <p className="section-subtitle-nbpd">
              {filteredPlaces.length} locations found
            </p>
          </div>

          <div className="places-grid-nbpd">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="place-card-nbpd">
                <div className="place-image-nbpd">
                  <img src={place.image} alt={place.name} />
                  <div className="availability-badge-nbpd">
                    <span
                      className="availability-dot-nbpd"
                      style={{
                        backgroundColor: getAvailabilityColor(
                          place.availableSlots,
                          place.totalSlots
                        ),
                      }}
                    ></span>
                    {place.availableSlots} available
                  </div>
                </div>

                <div className="place-content-nbpd">
                  <div className="place-header-nbpd">
                    <h4 className="place-name-nbpd">{place.name}</h4>
                    <div className="place-rating-nbpd">⭐ {place.rating}</div>
                  </div>

                  <p className="place-address-nbpd">{place.address}</p>

                  <div className="place-info-nbpd">
                    <div className="info-item-nbpd">
                      <span className="info-label-nbpd">Distance</span>
                      <span className="info-value-nbpd">{place.distance}</span>
                    </div>
                    <div className="info-item-nbpd">
                      <span className="info-label-nbpd">Price</span>
                      <span className="info-value-nbpd">{place.price}</span>
                    </div>
                  </div>

                  <div className="slots-info-nbpd">
                    <div className="slots-bar-nbpd">
                      <div
                        className="slots-fill-nbpd"
                        style={{
                          width: `${
                            (place.availableSlots / place.totalSlots) * 100
                          }%`,
                          backgroundColor: getAvailabilityColor(
                            place.availableSlots,
                            place.totalSlots
                          ),
                        }}
                      ></div>
                    </div>
                    <span className="slots-text-nbpd">
                      {place.availableSlots}/{place.totalSlots} slots available
                    </span>
                  </div>

                  <button
                    className="book-button-nbpd"
                    onClick={() => handleBookNow(place)}
                  >
                    <Link to="/vehicles" className="book-button-link-nbpd">
                      Book Now
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NearByPlaces;
