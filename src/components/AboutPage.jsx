import React from "react";
import AboutUs from "./AboutUs";
import CustomerFeedback from "./CustomerFeedback";
import LatestNews from "./LatestNews";
import NewsLetterSection from "./NewsLetterSection";

const AboutPage = () => {
  return (
    <div>
      <AboutUs />
      <CustomerFeedback />  
      <LatestNews />
      <NewsLetterSection />
    </div>
  );
};

export default AboutPage;
