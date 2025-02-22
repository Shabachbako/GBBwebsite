import React from "react";
import aboutImage from "../assets/about-banner.png"; // Adjust path based on your folder structure
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
          <img src={aboutImage} alt="Shopping Cart in Store" />
        </div>

        {/* Right Section - Text Content */}
        <div className="about-text">
          <h2>What is e-commerce business?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries but also the leap into electronic typesetting.
          </p>

          {/* Bullet Points */}
          <ul>
            <li>slim body with metal cover</li>
            <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
            <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
            <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
          </ul>

          {/* Contact Us Button */}
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
