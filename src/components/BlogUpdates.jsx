import React from "react";
import "./BlogUpdates.css"; // Updated CSS file

// Import images
import newsImage1 from "../assets/sheetz.jpg";
import newsImage2 from "../assets/sheetz2.jpeg";
import newsImage3 from "../assets/sheetz3.jpg";
import newsImage4 from "../assets/sheetz4.jpg";
import newsImage5 from "../assets/sheetz5.jpg";
import newsImage6 from "../assets/sheetz6.jpg";

const BlogUpdates = () => {
  const blogData = [
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
    {
      id: 3,
      image: newsImage3,
      admin: "Admin",
      comments: 15,
      title: "Best Colors for Your Bedroom Aesthetic in 2024",
      description:
        "Upgrade your space with trending colors that enhance relaxation and style. Find the perfect hues to complement your bed linens...",
    },
    {
      id: 4,
      image: newsImage4,
      admin: "Admin",
      comments: 7,
      title: "How to Maintain the Softness of Your Bed Sheets",
      description:
        "Learn expert tips on washing and caring for your bed sheets to keep them as soft and comfortable as new...",
    },
    {
      id: 5,
      image: newsImage5,
      admin: "Admin",
      comments: 11,
      title: "Sustainable Bedding: Eco-Friendly Choices for Your Home",
      description:
        "Discover how our organic and ethically sourced bed sheets help you create a sustainable and luxurious sleep environment...",
    },
    {
      id: 6,
      image: newsImage6,
      admin: "Admin",
      comments: 5,
      title: "The Science of Sleep: How Bedding Impacts Your Rest",
      description:
        "Understand the role of bedding materials and textures in optimizing sleep quality for a more restful night...",
    },
  ];

  return (
    <div className="blog-updates">
      <h2 className="blog-heading">Latest Blog Updates</h2>
      <div className="blog-container">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-admin">👤 By {blog.admin}</span>
                <span className="blog-comments">💬 {blog.comments} Comments</span>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <a href="#" className="blog-link">View More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogUpdates;
