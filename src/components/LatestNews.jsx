import React from "react";
import "./LatestNews.css"; // Import CSS

// Import images
import newsImage1 from "../assets/sheetz.jpg"; // Replace with actual image path
import newsImage2 from "../assets/sheetz2.jpeg"; // Replace with actual image path

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      image: newsImage1,
      admin: "Admin",
      comments: 12,
      title: "Transform Your Bedroom with Our Luxurious Bed Sheets",
      description:
        "Discover the softness and elegance of our premium cotton bed sheets. Designed for ultimate comfort and style, they add a touch of luxury to your sleep...",
    },
    {
      id: 2,
      image: newsImage2,
      admin: "Admin",
      comments: 9,
      title: "Why Quality Bed Sheets Matter for a Good Night’s Sleep",
      description:
        "Experience the difference with our high-thread-count bed sheets. Made from breathable fabric, they ensure a restful night and a refreshing morning...",
    },
  ];

  return (
    <div className="latest-news">
      <h2 className="news-heading">Latest in Bed Linen Trends</h2>
      <div className="news-container">
        {newsData.map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <div className="news-meta">
                <span className="admin">👤 By {news.admin}</span>
                <span className="comments">💬 {news.comments} Comments</span>
              </div>
              <h3 className="news-title">{news.title}</h3>
              <p className="news-description">{news.description}</p>
              <a href="#" className="news-link">
                View More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
