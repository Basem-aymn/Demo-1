import React, { useState } from "react";
import SplitText from "./SplitText";

const NavBar = ({ currentLanguage, toggleLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-black/20 z-50 ">
      <nav className="w-full md:max-w-7xl mx-auto flex items-center justify-between p-4 relative animate__animated animate__backInDown ">
        {/* Logo - left */}
        <SplitText
          text="demo"
          className="text-xl font-bold text-white uppercase"
          delay={70}
          duration={2}
          ease="elastic.out(1,0.3)"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-50px"
          textAlign="left"
        />

        {/* Hamburger (mobile only - right) */}
        <button
          className="text-white md:hidden focus:outline-none ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center text-white absolute top-full left-0 w-full bg-black/90 md:static md:bg-transparent md:w-auto md:flex-1 md:justify-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li>
              <a href="#home" className="block py-2 hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="block py-2 hover:text-gray-300">
                Our Services
              </a>
            </li>
            <li>
              <a href="#business" className="block py-2 hover:text-gray-300">
                For Business
              </a>
            </li>
            <li>
              <a href="#chauffeurs" className="block py-2 hover:text-gray-300">
                For Chauffeurs
              </a>
            </li>
            <li>
              <a href="#help" className="block py-2 hover:text-gray-300">
                Help
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: Packages + Language */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => console.log("Packages clicked")}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            Packages
          </button>
          <button
            onClick={toggleLanguage}
            className="text-white hover:text-gray-300"
          >
            {currentLanguage === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Language Toggle - centered only on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="text-white hover:text-gray-300"
          >
            {currentLanguage === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
