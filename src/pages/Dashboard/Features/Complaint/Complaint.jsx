import React, { useState } from "react";
import HeaderComplaint from "./HeaderComplaint";
import "./Complaint.css";
import PhoneMockups from "./phoneMockups";
import Footer from "../../../../components/Footer/Footer";
const Complaint = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    complaintType: "",
    description: "",
    priority: "medium",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint submitted:", formData);
    // Handle form submission
    alert(
      "Your complaint has been submitted successfully! We will get back to you within 24 hours."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      complaintType: "",
      description: "",
      priority: "medium",
    });
  };

  return (
    <div className="complaints-page-complaint">
      <HeaderComplaint />

      {/* Hero Section */}
      <section className="hero-section-complaint">
        <div className="hero-content-complaint">
          <div className="hero-text-complaint">
            <h1>We're Here to Help</h1>
            <p>
              Having issues with our parking management system? Let us know and
              we'll resolve it quickly.
            </p>
            <div className="hero-stats-complaint">
              <div className="stat-complaint">
                <span className="stat-number-complaint">24hrs</span>
                <span className="stat-label-complaint">Response Time</span>
              </div>
              <div className="stat-complaint">
                <span className="stat-number-complaint">98%</span>
                <span className="stat-label-complaint">Resolution Rate</span>
              </div>
              <div className="stat-complaint">
                <span className="stat-number-complaint">24/7</span>
                <span className="stat-label-complaint">Support Available</span>
              </div>
            </div>
          </div>
          <div className="hero-mockup-complaint">
            <PhoneMockups />
          </div>
        </div>
      </section>

      {/* Complaints Form Section */}
      <section className="form-section-complaint" id="complaint">
        <div className="container-complaint">
          <div className="form-header-complaint">
            <h2>Submit Your Complaint</h2>
            <p>
              Fill out the form below and our support team will contact you
              within 24 hours
            </p>
          </div>

          <div className="form-container-complaint">
            <form onSubmit={handleSubmit} className="complaint-form-complaint">
              <div className="form-grid-complaint">
                <div className="form-group-complaint">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group-complaint">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group-complaint">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group-complaint">
                  <label htmlFor="location">Parking Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Downtown Mall, Building A"
                  />
                </div>

                <div className="form-group-complaint full-width-complaint">
                  <label htmlFor="complaintType">Complaint Type *</label>
                  <select
                    id="complaintType"
                    name="complaintType"
                    value={formData.complaintType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select complaint type</option>
                    <option value="payment">Payment Issues</option>
                    <option value="booking">Booking Problems</option>
                    <option value="app">App Functionality</option>
                    <option value="parking">Parking Space Issues</option>
                    <option value="refund">Refund Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group-complaint full-width-complaint">
                  <label htmlFor="priority">Priority Level</label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div className="form-group-complaint full-width-complaint">
                  <label htmlFor="description">Complaint Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Please describe your issue in detail..."
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn-complaint">
                Submit Complaint
                <span className="btn-arrow-complaint">→</span>
              </button>
            </form>

            {/* Contact Info */}
            <div className="contact-info-complaint">
              <h3>Alternative Contact Methods</h3>
              <div className="contact-methods-complaint">
                <div className="contact-item-complaint">
                  <div className="contact-icon-complaint">📞</div>
                  <div>
                    <h4>Phone Support</h4>
                    <p>+1 (800) PARKKIN</p>
                    <span>Mon-Fri, 9AM-6PM</span>
                  </div>
                </div>
                <div className="contact-item-complaint">
                  <div className="contact-icon-complaint">✉️</div>
                  <div>
                    <h4>Email Support</h4>
                    <p>support@parkkin.com</p>
                    <span>24/7 Response</span>
                  </div>
                </div>
                <div className="contact-item-complaint">
                  <div className="contact-icon-complaint">💬</div>
                  <div>
                    <h4>Live Chat</h4>
                    <p>Available in app</p>
                    <span>Instant Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section-complaint">
        <div className="container-complaint">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid-complaint">
            <div className="faq-item-complaint">
              <h3>How long does it take to resolve complaints?</h3>
              <p>
                Most complaints are resolved within 24 hours. Complex issues may
                take up to 48 hours.
              </p>
            </div>
            <div className="faq-item-complaint">
              <h3>Can I track my complaint status?</h3>
              <p>
                Yes, you'll receive an email with a tracking number to monitor
                your complaint progress.
              </p>
            </div>
            <div className="faq-item-complaint">
              <h3>What if I'm not satisfied with the resolution?</h3>
              <p>
                You can escalate your complaint to our senior support team for
                further review.
              </p>
            </div>
            <div className="faq-item-complaint">
              <h3>Are there any charges for complaint resolution?</h3>
              <p>
                No, our complaint resolution service is completely free for all
                Parkkin users.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Complaint;
