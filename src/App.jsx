import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import FlashSale from "./components/FlashSale";
import BestSellers from "./components/BestSellers";
import PromoSection from "./components/PromoSection";
import NewsLetterSection from "./components/NewsLetterSection";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AboutPage from "./components/AboutPage"; // ✅ Import the new AboutPage file

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar stays on all pages */}

      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <HomeSection />
            <Categories />
            <FeaturedProducts />
            <FlashSale />
            <PromoSection />
            <BestSellers />
            <NewsLetterSection />
          </>
        } />

        {/* Contact Us Route */}
        <Route path="/contact" element={<ContactUs />} />

        {/* ✅ About Page Route (Using AboutPage) */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer /> {/* Footer stays on all pages */}
    </Router>
  );
}

export default App;
