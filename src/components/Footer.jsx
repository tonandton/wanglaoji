import React from "react";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-10 px-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 text-center">
        {/* Left */}
        <div>
          <h3 className="text-xl font-bold">หวังเหล่าจี๋</h3>
          {/* <p className="text-sm text-red-100 mt-1">น้ำดื่มสมุนไพรจับเลี้ยง</p> */}
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
        <div className="text-sm text-red-100">
          &copy; {new Date().getFullYear()} CHAIYO TRADING
        </div>
      </div>
    </footer>
  );
};

export default Footer;
