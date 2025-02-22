import React, { useState } from "react";
import "./CustomerFeedback.css"; // Import CSS file
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images from assets folder
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";

// Sample customer feedback data
const feedbacks = [
  {
    rating: 5.0,
    text: "The best shopping experience! Great product quality and fast delivery.",
    name: "Ridoy Rock",
    location: "London, UK",
    image: user1,
  },
  {
    rating: 4.8,
    text: "Amazing service and friendly customer support. Highly recommended!",
    name: "Sophia James",
    location: "New York, USA",
    image: user2,
  },
  {
    rating: 5.0,
    text: "I love this site! Easy navigation, great discounts, and high quality.",
    name: "Michael Smith",
    location: "Toronto, Canada",
    image: user3,
  },
  {
    rating: 4.9,
    text: "Great shopping platform with quick responses and amazing packaging!",
    name: "Olivia Brown",
    location: "Sydney, Australia",
    image: user4,
  },
  {
    rating: 5.0,
    text: "Exceptional experience! The support team resolved my issue quickly.",
    name: "Daniel Lee",
    location: "Berlin, Germany",
    image: user5,
  },
  {
    rating: 4.7,
    text: "High-quality products and reasonable prices. Will buy again.",
    name: "Emma Wilson",
    location: "Paris, France",
    image: user6,
  },
];

const CustomerFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const feedbackPerSlide = 3; // Number of cards visible at a time
  const totalSlides = Math.ceil(feedbacks.length / feedbackPerSlide); // Calculate total slides

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="customer-feedback">
      <h2>Customers Feedback</h2>

      <div className="feedback-slider">
        <div
          className="feedback-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {feedbacks.map((feedback, index) => (
            <div className="feedback-card" key={index}>
              <div className="rating">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                <span> ({feedback.rating})</span>
              </div>
              <p className="feedback-text">{feedback.text}</p>
              <div className="customer-info">
                <img src={feedback.image} alt={feedback.name} />
                <div>
                  <h4>{feedback.name}</h4>
                  <p>{feedback.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="feedback-navigation">
        <button className="nav-btn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="nav-btn active" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CustomerFeedback;
