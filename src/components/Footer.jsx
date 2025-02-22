import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"; // Social Icons
import "./Footer.css"; // Import Footer Styles
import logo from "../assets/logoimage.png"; // Import your logo
import visa from "../assets/visa.png"; // Import payment icons
import mastercard from "../assets/mastercard.jpg";
import paypal from "../assets/paypal.jpg";
import skrill from "../assets/skrill.jpeg";
import maestro from "../assets/maestro.png";
import visaElectron from "../assets/visa-electron.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & Links */}
        <div className="footer-left">
          <img src={logo} alt="CozySheets Logo" className="footer-logo" />
          <ul className="footer-links">
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Fabric Care Guide</a></li>
          </ul>
        </div>

        {/* Middle Section - Footer Navigation */}
        <div className="footer-nav">
          <div className="footer-column">
            <h4>About CozySheets</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Customer Reviews</a></li>
              <li><a href="#">Partnerships</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Bed Sheets</a></li>
              <li><a href="#">Duvet Covers</a></li>
              <li><a href="#">Pillowcases</a></li>
              <li><a href="#">Bedding Sets</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Help & Support</h4>
            <ul>
              <li><a href="#">Secure Payment</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="social-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaYoutube />
        </div>
        <p>©2025 <span className="company-name">CozySheets</span> All rights reserved</p>

        {/* Payment Icons */}
        <div className="payment-icons">
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="MasterCard" />
          <img src={paypal} alt="PayPal" />
          <img src={skrill} alt="Skrill" />
          <img src={maestro} alt="Maestro" />
          <img src={visaElectron} alt="Visa Electron" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
