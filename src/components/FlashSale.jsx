import React from "react";
import "./FlashSale.css"; // Import CSS file
import saleImage from "../assets/flashsale.jpg"; // Import the image

const FlashSale = () => {
  return (
    <section className="flash-sale">
      <div className="sale-text">
        <div className="countdown">
          <div className="time-box">
            <span className="time">0</span>
            <span className="label">Days</span>
          </div>
          <div className="time-box">
            <span className="time">0</span>
            <span className="label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time">0</span>
            <span className="label">Minutes</span>
          </div>
          <div className="time-box">
            <span className="time">0</span>
            <span className="label">Seconds</span>
          </div>
        </div>

        <div className="sale-content">
          <h2>WOO! Flash Sale</h2>
          <p>
            You get into the 2k+ best Products in Flash offer with a special-quality bedsheet material sale.
          </p>
          <button className="shop-now">Shop Now →</button>
        </div>
      </div>

      <div className="sale-image">
        <img src={saleImage} alt="Flash Sale" />
      </div>
    </section>
  );
};

export default FlashSale;
