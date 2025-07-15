import React, { useState } from "react";
import "./Payment.css";
import ImgLogo from "../../../../assets/logo.svg";
import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer/Footer";
const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [amount, setAmount] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [duration, setDuration] = useState("");

  const paymentMethods = [
    { id: "razorpay", name: "Razorpay", icon: "💳", color: "#0c4a6e" },
    { id: "stripe", name: "Stripe", icon: "🏦", color: "#635bff" },
    { id: "upi", name: "UPI Payment", icon: "📱", color: "#ff6600" },
    { id: "credit", name: "Credit Card", icon: "💳", color: "#1e40af" },
    { id: "debit", name: "Debit Card", icon: "💳", color: "#059669" },
    { id: "cash", name: "Cash Payment", icon: "💵", color: "#dc2626" },
  ];

  const handlePayment = () => {
    if (!selectedPayment || !amount || !vehicleNumber) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Processing payment:", {
      method: selectedPayment,
      amount,
      vehicleNumber,
      duration,
    });

    alert(
      `Processing ${selectedPayment} payment of ₹${amount} for vehicle ${vehicleNumber}`
    );
  };

  return (
    <div className="payment-page-pay">
      {/* Header */}
      <header className="header-pay">
        <div className="header-content-pay">
          <div className="brand-pay">
            <img src={ImgLogo} alt="Eways Services" className="logo-pay" />
            <h1>At Parkkin</h1>
          </div>
          <nav className="nav-pay">
            <Link to="/dashboard" className="nav-link-pay">
              Home
            </Link>
            <a href="/services" className="nav-link-pay">
              Services
            </a>
            <a href="/contact" className="nav-link-pay">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content-pay">
        <div className="container-pay">
          {/* Hero Section */}
          {/* <section className="hero">
            <div className="hero-content">
              <h1 className="hero-title">Smart Parking Payment</h1>
              <p className="hero-subtitle">
                Secure, fast, and convenient payment solutions for your parking
                needs
              </p>
            </div>
            <div className="phone-mockup">
              <div className="phone">
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="app-header">Parkkin App</div>
                    <div className="parking-slot">P-1A</div>
                    <div className="timer">02:30:45</div>
                    <div className="amount">₹50.00</div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Payment Form */}
          <section className="payment-section-pay">
            <div className="payment-card-pay">
              <h2 className="section-title-pay">Complete Your Payment</h2>

              <div className="form-grid-pay">
                <div className="form-group-pay">
                  <label>Vehicle Number</label>
                  <input
                    type="text"
                    placeholder="Enter vehicle number"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    className="form-input-pay"
                  />
                </div>

                <div className="form-group-pay">
                  <label>Parking Duration</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="form-input-pay"
                  >
                    <option value="">Select duration</option>
                    <option value="1">1 Hour - ₹25</option>
                    <option value="2">2 Hours - ₹50</option>
                    <option value="4">4 Hours - ₹90</option>
                    <option value="8">8 Hours - ₹150</option>
                    <option value="24">Full Day - ₹200</option>
                  </select>
                </div>

                <div className="form-group-pay">
                  <label>Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-input-pay"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="payment-methods-pay">
                <h3>Choose Payment Method</h3>
                <div className="payment-grid-pay">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`payment-option-pay ${
                        selectedPayment === method.id ? "selected" : ""
                      }`}
                      onClick={() => setSelectedPayment(method.id)}
                      style={{ "--accent-color": method.color }}
                    >
                      <div className="payment-icon-pay">{method.icon}</div>
                      <div className="payment-name-pay">{method.name}</div>
                      <div className="payment-check-pay">
                        {selectedPayment === method.id && "✓"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Button */}
              <button
                className="pay-button-pay"
                onClick={handlePayment}
                disabled={!selectedPayment || !amount || !vehicleNumber}
              >
                <span>Pay ₹{amount || "0"}</span>
                <div className="button-bg-pay"></div>
              </button>
            </div>
          </section>

          {/* Features */}
          <section className="features-pay">
            <div className="features-grid-pay">
              <div className="feature-card-pay">
                <div className="feature-icon-pay">🔒</div>
                <h3>Secure Payments</h3>
                <p>Bank-grade security with encrypted transactions</p>
              </div>
              <div className="feature-card-pay">
                <div className="feature-icon-pay">⚡</div>
                <h3>Instant Processing</h3>
                <p>Lightning fast payment processing in seconds</p>
              </div>
              <div className="feature-card-pay">
                <div className="feature-icon-pay">📱</div>
                <h3>Multiple Options</h3>
                <p>Support for all major payment methods</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="footer-pay">
        <div className="footer-content-pay">
          <div className="footer-section-pay">
            <h4>At Parkkin</h4>
            <p>Smart parking solutions for modern cities</p>
          </div>
          <div className="footer-section-pay">
            <h4>Contact</h4>
            <p>support@parkkin.com</p>
            <p>+91 98765 43210</p>
          </div>
          <div className="footer-section-pay">
            <h4>Powered by</h4>
            <p>Eways Services Private Limited</p>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
};

export default Payment;
