import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card.jsx";
import IconFeatures from "./components/IconFeatures";
import ReviewsCarousel from "./components/ReviewsCarousel";
import Footer from "./components/Footer";
import LazyBackground from "./components/LazyBackground";
import translations from "./translations";
import { MdWhatsapp } from "react-icons/md";

function App() {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  const cities = [
    translations[language].all,
    translations[language].montreal,
    translations[language].windsor,
    translations[language].comingSoon,
  ];
  const cards = Array(9).fill(null);

  return (
    <div className="min-h-screen">
      {/* NavBar */}
      <NavBar currentLanguage={language} toggleLanguage={toggleLanguage} />

      {/* First video section */}
      <LazyBackground
        src="/5967730-uhd_3840_2160_30fps.mp4"
        className="relative h-[100vh] sm:h-[100vh] bg-cover bg-center"
        isVideo={true}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold text-white text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {translations[language].explore}
          </h1>
        </div>
      </LazyBackground>

      {/* Buttons section */}
      <div className="flex justify-center space-x-4 p-8">
        {cities.map((city, index) => (
          <button
            key={index}
            className={`btn bg-black text-white hover:bg-white hover:text-black ${
              language === 'fr'
                ? 'px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-base'
                : 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* City to City Trips Section */}
      <div className="p-8 backdrop-blur-sm rounded-2xl border mx-4 my-8" style={{backgroundColor: 'rgba(104, 114, 122, 0.1)', borderColor: 'rgba(54, 83, 94, 0.3)'}}>
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#36535E'}}>City to City Trips</h2>
        <p className="text-center mb-8 text-lg" style={{color: '#68727A'}}>Premium transportation services between cities with luxury vehicles and professional drivers</p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {cards.slice(0, 3).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>

      {/* Airport Trips Section */}
      <div className="p-8 backdrop-blur-sm rounded-2xl border mx-4 my-8" style={{backgroundColor: 'rgba(54, 83, 94, 0.1)', borderColor: 'rgba(104, 114, 122, 0.3)'}}>
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#36535E'}}>Airport Trips</h2>
        <p className="text-center mb-8 text-lg" style={{color: '#68727A'}}>Reliable airport transfers with punctual service and comfortable luxury transportation</p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {cards.slice(3, 6).map((_, i) => (
            <Card key={i + 3} sectionType="airport" />
          ))}
        </div>
      </div>

      {/* Attractions Section */}
      <div className="p-8 backdrop-blur-sm rounded-2xl border mx-4 my-8" style={{backgroundColor: 'rgba(104, 114, 122, 0.15)', borderColor: 'rgba(54, 83, 94, 0.4)'}}>
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#36535E'}}>Attractions</h2>
        <p className="text-center mb-8 text-lg" style={{color: '#68727A'}}>Explore local attractions with guided tours and premium transportation services</p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {cards.slice(6, 9).map((_, i) => (
            <Card key={i + 6} sectionType="attractions" />
          ))}
        </div>
      </div>

      {/* Second image section (parallax) */}
      <LazyBackground
        src="/pexels-iriser-1366957.jpg"
        className="relative min-h-[40rem] sm:min-h-[50vh] bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 py-8 sm:py-0">
          <h1 className="text-4xl font-bold text-white text-center px-4">
            {translations[language].luxuryExperience}
          </h1>
          <IconFeatures />
        </div>
      </LazyBackground>

      {/* Reviews Carousel Section - Separate div under last image */}
      <div className="py-12 bg-gray-50">
        <ReviewsCarousel />
      </div>

      {/* Standalone image AFTER the slider - Completely separate */}
      <LazyBackground
        src="/pexels-chaitaastic-2093323.jpg"
        className="relative h-[40vh] sm:h-[25vh] bg-cover bg-fixed"
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
      </LazyBackground>

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
