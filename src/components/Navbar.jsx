import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import "./Navbar.css"; 

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  // Function to scroll to FeaturedProducts
  const handleCategoryClick = () => {
    navigate("/"); // Ensure we are on the home page
    setTimeout(() => {
      const featuredSection = document.getElementById("featured-products");
      if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section */}
        <div className="navbar-left">
          <button className="category-btn" onClick={toggleCategories}>
            ☰ All Categories <FaChevronDown className={`dropdown-icon ${isCategoriesOpen ? "rotate" : ""}`} />
          </button>

          {/* Category Dropdown */}
          <ul className={`category-list ${isCategoriesOpen ? "open" : ""}`}>
            <li onClick={handleCategoryClick}>Luxury Cotton Sheets</li>
            <li onClick={handleCategoryClick}>Soft Linen Sets</li>
            <li onClick={handleCategoryClick}>Floral Pattern Sheets</li>
            <li onClick={handleCategoryClick}>Silk Bedspreads</li>
            <li onClick={handleCategoryClick}>Premium Cotton Duvets</li>
            <li onClick={handleCategoryClick}>Elegant Striped Sheets</li>
          </ul>
        </div>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-link">About Us</NavLink></li>
          <li><NavLink to="/FAQ" activeClassName="active-link">FAQ</NavLink></li>
          <li><NavLink to="/blog" activeClassName="active-link">Blog</NavLink></li>
          <li><NavLink to="/shop" activeClassName="active-link">Shop</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
        </ul>

        {/* Shop Now Button with Cart Icon */}
        <button className="seller-btn">
          <FaShoppingCart className="cart-icon" /> Shop Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
