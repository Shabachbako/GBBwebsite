import React from "react";
import "./FeaturedProducts.css"; 
import { FaExpand, FaHeart, FaRedo } from "react-icons/fa"; 
import product1 from "../assets/product1.jpg"; 
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";

const FeaturedProducts = () => {
  const products = [
    { id: 1, image: product1, name: "Luxury Cotton Sheets", price: "₦18,740", oldPrice: "₦34,990" },
    { id: 2, image: product2, name: "Soft Linen Set", price: "₦20,720", oldPrice: "₦22,970" },
    { id: 3, image: product3, name: "Floral Pattern Sheets", price: "₦25,530", oldPrice: "₦31,240" },
    { id: 4, image: product4, name: "Silk Bedspread", price: "₦22,300", oldPrice: "₦28,500" },
    { id: 5, image: product5, name: "Premium Cotton Duvet", price: "₦19,500", oldPrice: "₦27,000" },
    { id: 6, image: product6, name: "Elegant Striped Sheets", price: "₦21,000", oldPrice: "₦29,500" },
  ];

  return (
    <section id="featured-products" className="featured-section"> {/* Added id */}
      <div className="featured-header">
        <h2>Featured Products</h2>
        <a href="#" className="view-more">View More →</a>
      </div>

      <div className="featured-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />

            {/* Hover Icons */}
            <div className="product-icons">
              <button><FaExpand /></button>
              <button><FaHeart /></button>
              <button><FaRedo /></button>
            </div>

            <p className="product-name">{product.name}</p>
            <p className="product-price">
              <span className="new-price">{product.price}</span>
              <span className="old-price">{product.oldPrice}</span>
            </p>

            {/* Add to Cart Button */}
            <button className="add-to-cart">Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
