import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card.jsx";
import IconFeatures from "./components/IconFeatures";
import DemoFooter from "./components/DemoFooter";
import FeaturesSection from "./components/FeaturesSection";
import ReviewsCarousel from "./components/ReviewsCarousel";
import Footer from "./components/Footer";
import { MdWhatsapp } from "react-icons/md";

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
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/pexels-chris-schippers-139261-421927.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">
            Explore the world with Salimo Limousine
          </h1>
        </div>
      </div>

      {/* Buttons section */}
      <div className="flex justify-center space-x-4 p-8">
        {cities.map((city, index) => (
          <button
            key={index}
            className="btn bg-black text-white hover:bg-white hover:text-black px-6 py-3"
          >
            {city}
          </button>
        ))}
      </div>

      {/* Cards section */}
      <div className="flex flex-wrap justify-center items-center gap-10 p-8">
        {cards.map((_, i) => (
          <Card key={i} />
        ))}
      </div>

      {/* Second image section (parallax) */}
      <div
        className="relative h-[50vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/pexels-iriser-1366957.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
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
        className="relative h-[40vh] bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/pexels-chaitaastic-2093323.jpg')",
        }}
      >
        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="max-w-6xl mx-auto flex justify-around flex-wrap text-center drop-shadow-lg">
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
            className="text-6xl text-black bg-gray-100 rounded-full p-2 shadow-md cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out"
            style={{
              width: "70px",
              height: "70px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
