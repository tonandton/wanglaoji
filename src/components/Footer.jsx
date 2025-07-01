// src/components/Footer.jsx
import React from "react";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-10 mt-1">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left */}
        <div className="text-center md:text-left ml-16">
          <h3 className="text-xl font-bold">หวังเหล่าจี๋</h3>
          <p className="text-sm text-red-100 mt-1"></p>
        </div>

        {/* Center - Social */}
        <div className="flex space-x-5">
          <a
            href="mailto:cherdchai179@gmail.com"
            className="hover:text-yellow-300 transition"
          >
            <FiMail className="text-2xl" />
          </a>
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FiFacebook className="text-2xl" />
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FiInstagram className="text-2xl" />
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-sm text-red-100 text-center md:text-right mr-16">
          &copy; {new Date().getFullYear()} CHAIYO TRADING
        </div>
      </div>
    </footer>
  );
};

export default Footer;
