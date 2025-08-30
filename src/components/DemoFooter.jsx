import React from "react";

const DemoFooter = () => {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h1 className="text-3xl font-extrabold mb-4">SALIMO</h1>
            <p className="text-gray-300 leading-relaxed">
              SALIMO Limousine is a next-generation luxury transportation company, offering premium chauffeur-driven services across Montreal, Windsor, and soon Dubai. We specialize in private airport transfers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">City Tour</a></li>
              <li><a href="#" className="hover:text-white">City To City Rides</a></li>
              <li><a href="#" className="hover:text-white">Airport Transfers</a></li>
              <li><a href="#" className="hover:text-white">Hourly Hire</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Mont-Tremblant Round Trip from Montreal</a></li>
              <li><a href="#" className="hover:text-white">Windsor to Chatham Private Transfer</a></li>
              <li><a href="#" className="hover:text-white">Ottawa Round Trip from Montreal</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="tel:+14388322233" className="hover:text-white flex items-center space-x-2">
                <span>📞</span><span>+1 438 832 22 33</span>
              </a></li>
              <li><a href="#" className="hover:text-white flex items-center space-x-2">
                <span>💬</span><span>Chat now</span>
              </a></li>
              <li><a href="mailto:info@sa-limo.com" className="hover:text-white flex items-center space-x-2">
                <span>✉️</span><span>info@sa-limo.com</span>
              </a></li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white">📸</a>
                <a href="#" className="hover:text-white">🎵</a>
                <a href="#" className="hover:text-white">💬</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment icons */}
        <div className="flex space-x-4 mt-8">
          <img src="/payment-icons/amex.png" alt="Amex" className="h-6" />
          <img src="/payment-icons/mastercard.png" alt="Mastercard" className="h-6" />
          <img src="/payment-icons/visa.png" alt="Visa" className="h-6" />
          <img src="/payment-icons/klama.png" alt="Klama" className="h-6" />
          <img src="/payment-icons/paybright.png" alt="Paybright" className="h-6" />
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          COPYRIGHT © 2025 SALIMO, ALL RIGHTS RESERVED.
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default DemoFooter;
