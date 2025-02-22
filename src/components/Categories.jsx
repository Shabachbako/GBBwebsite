import React from "react";
import "./Categories.css"; // Import the CSS file
import { 
  FaBed, FaStar, FaFeather, FaPalette, FaChild, FaLeaf, FaAlignLeft, FaCrown, FaHotel, FaPrint, FaCloudSun, FaEllipsisH 
} from "react-icons/fa"; 

const Categories = () => {
  const categories = [
    { name: "Cotton Bedsheets", icon: <FaLeaf /> },
    { name: "Silk Collection", icon: <FaFeather /> },
    { name: "Satin Luxury", icon: <FaCrown /> },
    { name: "Linen Comfort", icon: <FaBed /> },
    { name: "Kids' Bedsheets", icon: <FaChild /> },
    { name: "Floral Prints", icon: <FaPalette /> },
    { name: "Striped Designs", icon: <FaAlignLeft /> },
    { name: "Luxury Collection", icon: <FaStar /> },
    { name: "Hotel-Style", icon: <FaHotel /> },
    { name: "Printed Patterns", icon: <FaPrint /> },
    { name: "Classic Whites", icon: <FaCloudSun /> },
    { name: "More Options", icon: <FaEllipsisH /> },
  ];

  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2>Shop by Category</h2>
        <a href="#" className="view-more">
          View More →
        </a>
      </div>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-box" key={index}>
            <div className="icon-wrapper">{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
