import React from "react";
import aboutImage from "../assets/aboutpage.jpg"; // Adjust path based on your folder structure
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <p>Home / About Us</p>
      </div>

      {/* Page Header */}
      <div className="about-header">
        <h1>About Us</h1>
      </div>

      {/* About Content */}
      <div className="about-content">
        {/* Left Section - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="Luxurious Bed Sheets" />
        </div>

        {/* Right Section - Text Content */}
        <div className="about-text">
          <h2>Luxury & Comfort in Every Thread</h2>
          <p>
            At [Your Brand Name], we believe that quality sleep starts with premium bedding. 
            Our mission is to provide soft, durable, and stylish bed sheets that transform 
            your sleeping experience into a haven of comfort.
          </p>
          <p>
            Crafted from the finest materials, our bed linens are designed to bring 
            a touch of elegance and relaxation to your bedroom. Whether you prefer 
            breathable cotton, silky sateen, or cooling bamboo, we have the perfect fit for you.
          </p>

          {/* Bullet Points */}
          <ul>
            <li>100% premium cotton, linen, and bamboo fabrics</li>
            <li>Hypoallergenic, breathable, and skin-friendly materials</li>
            <li>Elegant designs to match any bedroom aesthetic</li>
            <li>Durability and easy maintenance for long-lasting comfort</li>
          </ul>

          {/* Contact Us Button */}
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
