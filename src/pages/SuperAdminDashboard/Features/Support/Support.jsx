import React, { useEffect, useState } from "react";
import ImgLogo from "../../../../assets/logo.svg";
import "./Support.css";
const Support = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const supportCards = [
    {
      icon: "🎛️",
      title: "System Management",
      description:
        "Complete control over parking system operations, user management, and system configurations.",
      features: [
        "User account management",
        "Parking lot configuration",
        "Real-time system monitoring",
        "Access control settings",
      ],
    },
    {
      icon: "📊",
      title: "Analytics & Reports",
      description:
        "Comprehensive reporting and analytics dashboard for data-driven decision making.",
      features: [
        "Revenue analytics",
        "Usage statistics",
        "Custom report generation",
        "Performance metrics",
      ],
    },
    {
      icon: "🔧",
      title: "Technical Support",
      description:
        "Advanced technical assistance and system troubleshooting for super administrators.",
      features: [
        "24/7 priority support",
        "System diagnostics",
        "Performance optimization",
        "Integration assistance",
      ],
    },
    {
      icon: "🛡️",
      title: "Security & Compliance",
      description:
        "Advanced security features and compliance management for enterprise-level operations.",
      features: [
        "Security audit logs",
        "Compliance monitoring",
        "Data protection settings",
        "Access permission control",
      ],
    },
  ];

  const stats = [
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "Support Available" },
    { number: "<2min", label: "Response Time" },
    { number: "500+", label: "Active Locations" },
  ];

  return (
    <div className="support-container-supsup">
      {/* Header */}
      <header className="support-header-supsup">
        <div className="header-content-supsup">
          <div className="logo-section-supsup">
            <img
              src={ImgLogo}
              alt="Eways Services"
              className="logo-image-supsup"
            />
            <div>
              <h1 className="brand-name-supsup">At Parkkin</h1>
            </div>
          </div>
          <div className="admin-badge-supsup">
            <span>🔒</span>
            Super Admin Portal
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="support-main-supsup">
        {/* Hero Section */}
        <section className={`hero-section-supsup ${isLoaded ? "fade-in" : ""}`}>
          <h1 className="hero-title-supsup">
            Super Admin{" "}
            <span className="hero-gradient-supsup">Support Center</span>
          </h1>
          <p className="hero-subtitle-supsup">
            Advanced support and management tools for parking system
            administrators.
            <br />
            Get priority assistance and access powerful system controls.
          </p>
        </section>

        {/* Quick Stats */}
        <section
          className={`stats-section-supsup ${isLoaded ? "slide-up" : ""}`}
        >
          <h2 className="stats-title-supsup">System Performance</h2>
          <div className="stats-grid-supsup">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item-supsup">
                <span className="stat-number-supsup">{stat.number}</span>
                <span className="stat-label-supsup">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Support Cards */}
        <section className="support-grid-supsup">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className={`support-card-supsup ${isLoaded ? "fade-in" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon-supsup">{card.icon}</div>
              <h3 className="card-title-supsup">{card.title}</h3>
              <p className="card-description-supsup">{card.description}</p>
              <ul className="card-features-supsup">
                {card.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="action-button-supsup">Access Tools</button>
              <button className="action-button-supsup secondary-button-supsup">
                Learn More
              </button>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section
          className={`contact-section-supsup ${isLoaded ? "slide-up" : ""}`}
        >
          <h2 className="contact-title-supsup">Need Immediate Assistance?</h2>
          <p className="contact-description-supsup">
            Our dedicated super admin support team is available 24/7 to help you
            with any system-critical issues or advanced configurations.
          </p>

          <div className="contact-info-supsup">
            <div className="contact-item-supsup">
              <h4>Emergency Hotline</h4>
              <p>+1 (555) 123-PARK</p>
              <p>Available 24/7</p>
            </div>
            <div className="contact-item-supsup">
              <h4>Priority Email</h4>
              <p>superadmin@parkkin.com</p>
              <p>Response within 15 minutes</p>
            </div>
            <div className="contact-item-supsup">
              <h4>Secure Chat</h4>
              <p>Encrypted messaging</p>
              <p>Instant support available</p>
            </div>
            <div className="contact-item-supsup">
              <h4>System Status</h4>
              <p>status.parkkin.com</p>
              <p>Real-time monitoring</p>
            </div>
          </div>

          <button
            className="action-button-supsup"
            style={{
              marginTop: "2rem",
              fontSize: "1.1rem",
              padding: "1rem 2rem",
            }}
          >
            🚀 Open Priority Support Ticket
          </button>
        </section>
      </main>
    </div>
  );
};

export default Support;
