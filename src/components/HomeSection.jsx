import React from "react";
import "./HomeSection.css"; // Importing the CSS file
import LeftImage from "../assets/bed1.jpg"; // Import the left image
import RightImage from "../assets/bed2.jpg"; // Import the right image

const HomeSection = () => {
  return (
    <section className="home-section">
      {/* Left Container */}
      <div className="home-box left-box animate-left">
        <span className="tag">NEW COLLECTION</span>
        <h2>Luxury Comfort</h2>
        <h1>Premium Cotton Bedsheets</h1>
        <p>Soft, breathable, and perfect for a restful sleep</p>
        <button className="shop-btn">Shop Now →</button>
        <img src={LeftImage} alt="Premium Cotton Bedsheets" className="home-img" />
      </div>

      {/* Right Container */}
      <div className="home-box right-box animate-right">
      <img src={RightImage} alt="Luxury Satin Bedsheets" className="home-img1" />
        <span className="tag">BEST SELLER</span>
        <h2>Elegant Designs</h2>
        <h1>Luxury Satin Bedsheets</h1>
        <p>Beautifully crafted for style and ultimate comfort</p>
        <button className="shop-btn yellow-btn">Shop Now →</button>
      </div>
    </section>
  );
};

export default HomeSection;
