import React from "react";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../../../assets/logo.svg";
import "./parkingZone.css";
import Footer from "../../../../components/Footer/Footer";

const parkingZone = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/mappage");
  };

  return (
    <div className="parking-landing-pz">
      <div className="background-overlay-pz"></div>

      {/* Header */}
      <header className="header-pz">
        <div className="header-content-pz">
          <div className="logo-section-pz">
            <img src={imgLogo} alt="Eways Services" className="company-logo" />
            <div className="brand-info">
              <h1 className="brand-name">At-Parkkin</h1>
              <p className="company-name">eways services private limited</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content-pz">
        <div className="content-wrapper-pz">
          <div className="text-section-pz">
            <h2 className="main-title-pz">
              Find Best Place
              <br />
              For <span className="highlight-pz">Parking</span>
            </h2>
            <p className="subtitle-pz">
              Say goodbye to the hassle
              <br />
              of finding parking spots.
            </p>
          </div>

          <div className="phone-mockup-pz">
            <div className="phone-frame-pz">
              <div className="phone-screen-pz">
                <div className="screen-content-pz">
                  <div className="mock-header-pz">
                    <div className="status-bar-pz"></div>
                  </div>
                  <div className="mock-map-pz">
                    <div className="map-overlay-pz"></div>
                    <div className="car-icon-pz">🚗</div>
                    <div className="parking-markers-pz">
                      <div className="marker marker-1">P</div>
                      <div className="marker marker-2">P</div>
                      <div className="marker marker-3">P</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="cta-button-pz" onClick={handleGetStarted}>
            Let's Start
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default parkingZone;
