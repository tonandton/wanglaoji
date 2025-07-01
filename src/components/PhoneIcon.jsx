import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneIcon = () => {
  return (
    <a
      href="tel:0863589179"
      className="fixed bottom-24 right-8 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce"
      aria-label="โทรหาเรา"
    >
      <FaPhoneAlt className="text-lg" />
    </a>
  );
};

export default PhoneIcon;
