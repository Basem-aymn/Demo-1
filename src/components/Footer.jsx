import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Brand */}
        <div className="text-white text-2xl font-bold mb-4 md:mb-0">demo</div>

        {/* Quick Links */}
        <nav className="flex space-x-6 text-gray-400">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Services
          </a>
          <a href="#" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#" className="hover:text-white transition">
            FAQ
          </a>
          <a href="#" className="hover:text-white transition">
            Contact Us
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-400">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-white transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-gray-400 text-sm space-y-1 text-center md:text-left">
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@demo.com</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>

        {/* Additional Info */}
        <div className="text-gray-400 text-sm max-w-xs text-center md:text-left">
          <h4 className="text-white font-semibold mb-2">About Us</h4>
          <p>
            demo is your trusted ride-sharing partner, providing safe and
            reliable transportation services 24/7.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-xs">
        &copy; {currentYear} demo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
