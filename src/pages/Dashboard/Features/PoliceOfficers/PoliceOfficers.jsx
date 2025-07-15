import React from "react";
import "./PoliceOfficers.css";
import ImgLogo from "../../../../assets/logo.svg";
import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer/Footer";
const PoliceOfficers = () => {
  return (
    <div className="contact-police-page-pod">
      {/* Header */}
      <header className="header-pod">
        <div className="header-container-pod">
          <div className="logo-section-pod">
            <img src={ImgLogo} alt="Eways Services" className="logo-pod" />
            <h1 className="brand-name-pod">At Parkkin</h1>
          </div>
          <nav className="nav-pod">
            <Link to="/dashboard" className="nav-link-pod">
              Home
            </Link>
            <a href="#police-call" className="nav-link-pod active">
              Emergency Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section-pod">
        <div className="hero-container-pod">
          <div className="hero-content-pod">
            <h1 className="hero-title-pod">Contact Police Officers</h1>
            <p className="hero-subtitle-pod">
              Quick guide to reach nearby police assistance in India for
              parking-related emergencies
            </p>
          </div>
          <div className="hero-mockup-pod">
            <div className="phone-mockup-pod">
              <div className="phone-screen-pod">
                <div className="app-interface-pod">
                  <div className="app-header-pod">
                    <div className="app-logo-pod">AP</div>
                    <div className="app-title-pod">At Parkkin Emergency</div>
                  </div>
                  <div className="emergency-content-pod">
                    <div className="emergency-button-pod">
                      <div className="emergency-icon-pod">🚨</div>
                      <div className="emergency-text-pod">Contact Police</div>
                    </div>
                    <div className="location-info-pod">
                      <div className="location-icon-pod">📍</div>
                      <div className="location-text-pod">Nearby Station</div>
                    </div>
                    <div className="quick-numbers-pod">
                      <div className="number-item-pod">
                        <span className="number-pod">100</span>
                        <span className="label-pod">Emergency</span>
                      </div>
                      <div className="number-item-pod">
                        <span className="number-pod">103</span>
                        <span className="label-pod">Traffic</span>
                      </div>
                    </div>
                  </div>
                  <div className="app-footer-pod">
                    <div className="nav-item-pod active">🚨</div>
                    <div className="nav-item-pod">📞</div>
                    <div className="nav-item-pod">📍</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Numbers Section */}
      <section className="emergency-numbers-pod">
        <div className="container-pod">
          <h2 className="section-title-pod">Emergency Contact Numbers</h2>
          <div className="numbers-grid-pod">
            <div className="number-card-pod">
              <div className="number-icon-pod">🚨</div>
              <h3>National Emergency</h3>
              <div className="number-pod">100</div>
              <p>24/7 Police Emergency Helpline</p>
            </div>
            <div className="number-card-pod">
              <div className="number-icon-pod">🚔</div>
              <h3>Traffic Police</h3>
              <div className="number-pod">103</div>
              <p>Traffic violations & parking disputes</p>
            </div>
            <div className="number-card-pod">
              <div className="number-icon-pod">📞</div>
              <h3>Women Helpline</h3>
              <div className="number-pod">1091</div>
              <p>Women safety & harassment cases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section-pod">
        <div className="container-pod">
          <h2 className="section-title-pod">
            How to Contact Nearby Police in India
          </h2>
          <div className="steps-container-pod">
            <div className="step-card-pod">
              <div className="step-number-pod">1</div>
              <div className="step-content-pod">
                <h3>Identify Your Location</h3>
                <p>
                  Note down your exact location including landmark, area name,
                  and pin code. This helps police reach you quickly.
                </p>
                <ul>
                  <li>Use GPS coordinates if available</li>
                  <li>Mention nearby landmarks</li>
                  <li>Provide complete address</li>
                </ul>
              </div>
            </div>

            <div className="step-card-pod">
              <div className="step-number-pod">2</div>
              <div className="step-content-pod">
                <h3>Call Emergency Numbers</h3>
                <p>
                  Dial 100 for immediate police assistance or use local police
                  station numbers.
                </p>
                <ul>
                  <li>Speak clearly and calmly</li>
                  <li>Provide your contact details</li>
                  <li>Explain the parking-related issue</li>
                </ul>
              </div>
            </div>

            <div className="step-card-pod">
              <div className="step-number-pod">3</div>
              <div className="step-content-pod">
                <h3>Use Mobile Apps</h3>
                <p>
                  Download official police apps for your state or city for quick
                  assistance.
                </p>
                <ul>
                  <li>Delhi Police App</li>
                  <li>Mumbai Police App</li>
                  <li>Citizen Cop (Multi-state)</li>
                </ul>
              </div>
            </div>

            <div className="step-card-pod">
              <div className="step-number-pod">4</div>
              <div className="step-content-pod">
                <h3>Visit Nearest Police Station</h3>
                <p>
                  For non-emergency parking disputes, visit the local police
                  station during working hours.
                </p>
                <ul>
                  <li>Carry necessary documents</li>
                  <li>Bring evidence (photos/videos)</li>
                  <li>File a written complaint if needed</li>
                </ul>
              </div>
            </div>

            <div className="step-card-pod">
              <div className="step-number-pod">5</div>
              <div className="step-content-pod">
                <h3>Online Complaint Filing</h3>
                <p>
                  Many states offer online complaint filing systems for
                  parking-related issues.
                </p>
                <ul>
                  <li>Visit your state police website</li>
                  <li>Fill online complaint form</li>
                  <li>Upload supporting documents</li>
                </ul>
              </div>
            </div>

            <div className="step-card-pod">
              <div className="step-number-pod">6</div>
              <div className="step-content-pod">
                <h3>Follow Up</h3>
                <p>
                  Keep your complaint number and follow up regularly for status
                  updates.
                </p>
                <ul>
                  <li>Note down complaint/FIR number</li>
                  <li>Contact investigating officer</li>
                  <li>Check online status regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State-wise Information */}
      <section className="state-info-pod">
        <div className="container-pod">
          <h2 className="section-title-pod">State-wise Police Helplines</h2>
          <div className="states-grid-pod">
            <div className="state-card-pod">
              <h3>Delhi</h3>
              <p>Police: 100 | Traffic: 1095</p>
            </div>
            <div className="state-card-pod">
              <h3>Mumbai</h3>
              <p>Police: 100 | Traffic: 1095</p>
            </div>
            <div className="state-card-pod">
              <h3>Bangalore</h3>
              <p>Police: 100 | Traffic: 080-22868550</p>
            </div>
            <div className="state-card-pod">
              <h3>Chennai</h3>
              <p>Police: 100 | Traffic: 044-28444329</p>
            </div>
            <div className="state-card-pod">
              <h3>Hyderabad</h3>
              <p>Police: 100 | Traffic: 040-27853508</p>
            </div>
            <div className="state-card-pod">
              <h3>Kolkata</h3>
              <p>Police: 100 | Traffic: 033-22143526</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-pod" id="police-call">
        <div className="container-pod">
          <div className="cta-content-pod">
            <h2>Need Immediate Assistance?</h2>
            <p>
              Don't hesitate to contact authorities for any parking-related
              emergencies
            </p>
            <button className="cta-button-pod">Call Emergency: 100</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PoliceOfficers;
