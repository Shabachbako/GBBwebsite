import React from "react";
import { FiMail } from "react-icons/fi"; // Import email icon from react-icons
import "./NewsletterSection.css"; // Import CSS file
import leftImage from "../assets/news1.png"; // Left side chair image
import rightImage from "../assets/news2.png"; // Right side chair & plant image

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      {/* Left Image */}
      <img src={leftImage} alt="Left Chair Decor" className="newsletter-left-img" />

      {/* Newsletter Content */}
      <div className="newsletter-content">
        <h2>
          Get <span className="discount-text">20%</span> Off Discount Coupon
        </h2>
        <p>by Subscribing to our Newsletter</p>

        {/* Subscription Form */}
        <form className="newsletter-form">
          <div className="input-wrapper">
            <FiMail className="email-icon" />
            <input type="email" placeholder="EMAIL ADDRESS" required />
          </div>
          <button type="submit" className="coupon-btn">Get the Coupon</button>
        </form>
      </div>

      {/* Right Image */}
      <img src={rightImage} alt="Right Chair and Plant Decor" className="newsletter-right-img" />
    </section>
  );
};

export default NewsletterSection;
