import { Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock user data - in real app this would come from API
  const mockUsers = [
    {
      id: "USR-2024-001",
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+91 9876543210",
      profileImage:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740",
      membershipType: "Premium",
      totalBookings: 127,
    },
    {
      id: "USR-2024-002",
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+91 9876543211",
      profileImage:
        "data:image/jpeg;base64,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",
      membershipType: "Standard",
      totalBookings: 45,
    },
    {
      id: "USR-2024-003",
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+91 9876543212",
      profileImage:
        "data:image/jpeg;base64,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",
      membershipType: "Premium",
      totalBookings: 89,
    },
    {
      id: "USR-2024-004",
      name: "Michael Brown",
      email: "michael.brown@email.com",
      phone: "+91 9876543213",
      profileImage:
        "data:image/jpeg;base64,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",
      membershipType: "Standard",
      totalBookings: 23,
    },
  ];

  const handleSearch = (value) => {
    setSearchTerm(value);
    setIsSearching(true);

    if (value.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    // Filter users by name or email
    const filtered = mockUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase())
    );

    setTimeout(() => {
      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        fontFamily: "Inter, sans-serif",
        color: "#ffffff",
        paddingTop: "2rem",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #00a6e6, #0088cc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          At Parkkin
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "2rem",
          }}
        >
          Parking Management System - Vendor Portal
        </p>
      </div>

      {/* Search Section */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              position: "relative",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Search
              size={20}
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "1rem 1rem 1rem 3rem",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#ffffff",
                fontSize: "1rem",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>

        {/* Search Results */}
        {isSearching && (
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: "20px",
                height: "20px",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderTop: "2px solid #00a6e6",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            ></div>
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
        )}

        {searchTerm && !isSearching && (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              overflow: "hidden",
            }}
          >
            {searchResults.length > 0 ? (
              <>
                <div
                  style={{
                    padding: "1rem",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Found {searchResults.length} user
                  {searchResults.length !== 1 ? "s" : ""}
                </div>
                {searchResults.map((user) => (
                  <Link
                    key={user.id}
                    to="/user-info"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "1rem",
                      textDecoration: "none",
                      color: "inherit",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background =
                        "rgba(0, 166, 230, 0.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "1rem",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {user.name}
                      </div>
                      <div
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "0.9rem",
                        }}
                      >
                        {user.email}
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                      }}
                    >
                      <div
                        style={{
                          background:
                            user.membershipType === "Premium"
                              ? "linear-gradient(135deg, #00a6e6, #0088cc)"
                              : "rgba(255, 255, 255, 0.2)",
                          color: "#ffffff",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "20px",
                          fontSize: "0.8rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {user.membershipType}
                      </div>
                      <div
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "0.8rem",
                        }}
                      >
                        {user.totalBookings} bookings
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <div
                style={{
                  padding: "2rem",
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                No users found matching "{searchTerm}"
              </div>
            )}
          </div>
        )}

        {/* Quick Access Button */}
        {!searchTerm && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link
              to="/user-info"
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                background: "linear-gradient(135deg, #00a6e6, #0088cc)",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.transform = "translateY(-3px)")
              }
              onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
            >
              View Sample User Information
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserHome;
