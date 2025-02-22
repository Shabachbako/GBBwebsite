import React, { useState } from "react";
import "./FAQPage.css"; // Import CSS

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What materials are your bed sheets made of?", answer: "Our bed sheets are made from high-quality cotton, linen, and microfiber for ultimate comfort and durability." },
    { question: "What sizes do your bed sheets come in?", answer: "We offer bed sheets in Twin, Full, Queen, King, and California King sizes." },
    { question: "How do I care for my bed sheets?", answer: "We recommend machine washing in cold water with mild detergent and tumble drying on low for longevity." },
    { question: "Do your bed sheets come with pillowcases?", answer: "Yes, all our bed sheet sets include matching pillowcases, except for individual sheet purchases." },
    { question: "What is your return policy?", answer: "We offer a 30-day return policy for unused and unwashed bed sheets. Please contact customer service for assistance." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {/* FAQ Section */}
        <div className="faq-section">
          <h3 className="faq-heading">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{`0${index + 1}. ${faq.question}`}</span>
                <span className="faq-toggle">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="contact-section">
          <h3 className="contact-heading">Have Any Questions?</h3>
          <form className="contact-form">
            <div className="form-group">
              <label>First Name*</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email Address*</label>
              <input type="email" placeholder="yourname@example.com" required />
            </div>
            <div className="form-group">
              <label>Question*</label>
              <textarea placeholder="Ask us about our bed sheets!" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;