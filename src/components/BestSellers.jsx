import React from "react";
import "./BestSellers.css"; // New CSS file
import { FaExpand, FaHeart, FaRedo } from "react-icons/fa"; 
import product1 from "../assets/product1.jpg"; 
import product2 from "../assets/product3.jpg";
import product3 from "../assets/product6.jpg";

const BestSellers = () => {
  const products = [
    { id: 1, image: product1, name: "Luxury Cotton Sheets", price: "₦18,740", oldPrice: "₦34,990" },
    { id: 2, image: product2, name: "Soft Linen Set", price: "₦20,720", oldPrice: "₦22,970" },
    { id: 3, image: product3, name: "Floral Pattern Sheets", price: "₦25,530", oldPrice: "₦31,240" },
  ];

  return (
    <section className="bestsellers-section">
      <div className="bestsellers-header">
        <h2>Best Sellers</h2>
        <a href="#" className="bestsellers-view-more">View More →</a>
      </div>

      <div className="bestsellers-grid">
        {products.map((product) => (
          <div key={product.id} className="bestseller-card">
            <img src={product.image} alt={product.name} className="bestseller-img" />

            {/* Hover Icons */}
            <div className="bestseller-icons">
              <button><FaExpand /></button>
              <button><FaHeart /></button>
              <button><FaRedo /></button>
            </div>

            <p className="bestseller-name">{product.name}</p>
            <p className="bestseller-price">
              <span className="bestseller-new-price">{product.price}</span>
              <span className="bestseller-old-price">{product.oldPrice}</span>
            </p>

            {/* Add to Cart Button */}
            <button className="bestseller-add-to-cart">Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
