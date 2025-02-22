import React from "react";
import "./PromoSection.css"; // Import CSS file
import leftImage from "../assets/promo1.png"; // Import left section image
import rightImage from "../assets/promo2.png"; // Import right section image

const PromoSection = () => {
  return (
    <section className="promo-section">
      {/* Left Section */}
      <div className="promo-box left-box">
        <div className="promo-content">
          <span className="category">PREMIUM COMFORT</span>
          <h2>Luxury Cotton <br /></h2>
          <button className="shop-btn green-btn">Shop Now →</button>
        </div>
        <div className="promo-image">
          <img src={leftImage} alt="Luxury Bedsheets" />
        </div>
      </div>

      {/* Right Section */}
      <div className="promo-box right-box">
        <div className="promo-content">
          <span className="category">ELEGANT DESIGN</span>
          <h2>Soft & Stylish <br /> Bed Covers</h2>
          <button className="shop-btn yellow-btn">Shop Now →</button>
        </div>
        <div className="promo-image">
          <img src={rightImage} alt="Soft Bed Covers" />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
