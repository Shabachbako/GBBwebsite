import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa"; // For the success modal icon
import "./ContactUs.css";

const ContactUs = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for submission status and loading
  const [status, setStatus] = useState({ success: null, message: "" });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ success: true, message: "Your message has been sent!" });
        setShowModal(true); // Show success modal
        setFormData({ firstName: "", email: "", subject: "", message: "" }); // Reset form

        setTimeout(() => {
          setShowModal(false); // Hide modal after 3 seconds
        }, 3000);
      } else {
        setStatus({ success: false, message: "Failed to send message. Try again!" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Something went wrong. Please try again!" });
    }

    setLoading(false); // Stop loading spinner
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <p>Home / Contact</p>
        <h1>Contact</h1>
      </div>

      <div className="contact-content">
        {/* Left Section - Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Fill out the form below or write to us. We will respond as soon as possible.</p>

          <div className="info-box">
            <div className="icon"><FaPhoneAlt /></div>
            <div>
              <h3>Phone</h3>
              <p>+(234) 803 5764 280</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon"><FaEnvelope /></div>
            <div>
              <h3>Email</h3>
              <p>example@gmail.com</p>
              <p>example@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon"><FaMapMarkerAlt /></div>
            <div>
              <h3>Address</h3>
              <p>18, association close, Ogudu Lagos Nigeria.</p>
            </div>
          </div>

          {/* Google Map Embed */}
          <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24194.65302164465!2d-74.006015!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af3c453d9f%3A0xa0b66c47b1a76d00!2sNew%20York!5e0!3m2!1sen!2sus!4v1634258579933!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form">
          <h2 className="form-title">Get In Touch</h2>
          {status.message && (
            <p className={status.success ? "success-msg" : "error-msg"}>{status.message}</p>
          )}
          <form onSubmit={handleSubmit}>
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder="Your Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label>Email Address*</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Subject*</label>
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label>Message*</label>
            <textarea
              name="message"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Send Now"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <FaCheckCircle className="check-icon" />
            <p>Form submitted successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
