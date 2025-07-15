import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./mapPage.css";

const mapPage = () => {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedParking, setSelectedParking] = useState(null);
  const [map, setMap] = useState(null);

  const parkingSpots = [
    {
      id: 1,
      name: "Victoria Levis",
      address: "St. Pool Dubom, 7h",
      price: "₹5/h",
      distance: "2.3km",
      lat: 40.7128,
      lng: -74.006,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Central Plaza",
      address: "Downtown District",
      price: "₹4/h",
      distance: "1.8km",
      lat: 40.7589,
      lng: -73.9851,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Metro Station",
      address: "Transit Hub",
      price: "₹3/h",
      distance: "3.1km",
      lat: 40.7488,
      lng: -73.9857,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop",
    },
  ];

  useEffect(() => {
    // Initialize Google Map
    if (window.google && mapRef.current) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 13,
        styles: [
          {
            elementType: "geometry",
            stylers: [{ color: "#212121" }],
          },
          {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#212121" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ color: "#757575" }],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#2c2c2c" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8a8a8a" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#000000" }],
          },
        ],
      });

      // Add parking markers
      parkingSpots.forEach((spot) => {
        const marker = new window.google.maps.Marker({
          position: { lat: spot.lat, lng: spot.lng },
          map: mapInstance,
          title: spot.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 15,
            fillColor: "#00a6e6",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        });

        marker.addListener("click", () => {
          setSelectedParking(spot);
        });
      });

      setMap(mapInstance);
    }
  }, []);

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const loadGoogleMaps = () => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  };

  useEffect(() => {
    loadGoogleMaps();
  }, []);

  return (
    <div className="map-page">
      {/* Header */}
      <header className="map-header">
        <button className="back-button" onClick={handleBack}>
          ←
        </button>
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Near by me..."
              value={searchQuery}
              onChange={handleSearch}
              className="search-input"
            />
            <button className="location-button">📍</button>
          </div>
        </div>
      </header>

      {/* Map Container */}
      <div className="map-container">
        <div ref={mapRef} className="google-map"></div>

        {/* Map fallback with custom styling */}
        <div className="map-fallback">
          <div className="map-overlay"></div>
          <div className="user-location">📍</div>
          {parkingSpots.map((spot) => (
            <div
              key={spot.id}
              className={`parking-marker ${
                selectedParking?.id === spot.id ? "selected" : ""
              }`}
              style={{
                top: `${20 + spot.id * 15}%`,
                left: `${15 + spot.id * 20}%`,
              }}
              onClick={() => setSelectedParking(spot)}
            >
              P
            </div>
          ))}
        </div>
      </div>

      {/* Parking Spot Card */}
      {selectedParking && (
        <div className="parking-card">
          <div className="parking-card-content">
            <img
              src={selectedParking.image}
              alt={selectedParking.name}
              className="parking-image"
            />
            <div className="parking-info">
              <h3 className="parking-name">{selectedParking.name}</h3>
              <p className="parking-address">{selectedParking.address}</p>
              <div className="parking-details">
                <span className="parking-price">{selectedParking.price}</span>
                <span className="parking-distance">
                  {selectedParking.distance}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <span className="nav-icon">🗺️</span>
          <span className="nav-label">Map</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">📋</span>
          <span className="nav-label">List</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">📖</span>
          <span className="nav-label">Bookings</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default mapPage;
