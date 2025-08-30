import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card.jsx";
import IconFeatures from "./components/IconFeatures";
import DemoFooter from "./components/DemoFooter";
import FeaturesSection from "./components/FeaturesSection";
import ReviewsCarousel from "./components/ReviewsCarousel";
import Footer from "./components/Footer";
import { MdWhatsapp } from "react-icons/md";

import pexelsChris from "./assets/pexels-chris-schippers-139261-421927.jpg";

function App() {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  const cities = ["All", "MONTREAL", "WINDSOR", "COMING SOON"];
  const cards = Array(9).fill(null);

  return (
    <div className="min-h-screen">
      {/* NavBar */}
      <NavBar currentLanguage={language} toggleLanguage={toggleLanguage} />

      {/* First image section */}
      <div
        className="relative h-[100vh] sm:h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${pexelsChris})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold text-white text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Explore the world with Demo Limousine
          </h1>
          
        </div>
      </div>

      {/* Buttons section */}
      <div className="flex justify-center space-x-4 p-8">
        {cities.map((city, index) => (
          <button
            key={index}
            className="btn bg-black text-white hover:bg-white hover:text-black px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          >
            {city}
          </button>
        ))}
      </div>

      {/* Cards section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 p-8">
        {cards.map((_, i) => (
          <Card key={i} />
        ))}
      </div>

      {/* Second image section (parallax) */}
      <div
        className="relative min-h-[40rem] sm:min-h-[50vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/pexels-iriser-1366957.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 py-8 sm:py-0">
          <h1 className="text-4xl font-bold text-white text-center px-4">
            Our Luxury Experience
          </h1>
          <IconFeatures />
        </div>
      </div>

      {/* Reviews Carousel Section - Separate div under last image */}
      <div className="py-12 bg-gray-50">
        <ReviewsCarousel />
      </div>

      {/* Standalone image AFTER the slider - Completely separate */}
      <div
        className="relative h-[40vh] sm:h-[25vh] bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/pexels-chaitaastic-2093323.jpg')",
        }}
      >
        {/* Stats Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-white p-8">
          <div className="grid grid-cols-2 gap-6 md:flex md:justify-around md:flex-wrap text-center drop-shadow-lg">
            <div className="mb-6 md:mb-0">
              <p className="text-4xl font-extrabold">1,200+</p>
              <p className="text-sm mt-1">Private Rides Completed</p>
            </div>
            <div className="mb-6 md:mb-0">
              <p className="text-4xl font-extrabold">250+</p>
              <p className="text-sm mt-1">Cross-Border Transfers</p>
            </div>
            <div className="mb-6 md:mb-0">
              <p className="text-4xl font-extrabold">98.6%</p>
              <p className="text-sm mt-1">On-Time Airport Transfers</p>
            </div>
            <div className="mb-6 md:mb-0">
              <p className="text-4xl font-extrabold">350+</p>
              <p className="text-sm mt-1">Private City Tours Delivered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/201273388957"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <MdWhatsapp
            className="text-4xl sm:text-6xl text-green-500 bg-white rounded-full p-2 shadow-2xl cursor-pointer hover:scale-110 hover:shadow-3xl transition-all duration-300 ease-in-out w-10 h-10 sm:w-[70px] sm:h-[70px]"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
