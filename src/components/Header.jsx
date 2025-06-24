import React, { useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (headerRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
      }, 400);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="bg-gradient-to-r from-red-800 to-red-600 text-white sticky top-0 z-50 shadow-md font-thai"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <h1
          onClick={scrollToTop}
          className="text-2xl sm:text-3xl font-bold text-yellow-300 cursor-pointer"
        >
          หวังเหล่าจี๋
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {[
            { label: "หน้าแรก", id: "home", action: scrollToTop },
            { label: "เกี่ยวกับ", id: "about" },
            { label: "เครื่องหมายการค้า", id: "trademark" },
            { label: "ติดต่อเรา", id: "contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                item.action ? item.action() : scrollToSection(item.id);
              }}
              className="text-base md:text-lg text-gray-200 hover:text-yellow-200 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-yellow-300 text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-red-700 shadow-md space-y-3">
          {[
            { label: "หน้าแรก", id: "home", action: scrollToTop },
            { label: "เกี่ยวกับ", id: "about" },
            { label: "เครื่องหมายการค้า", id: "trademark" },
            { label: "ติดต่อเรา", id: "contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                item.action ? item.action() : scrollToSection(item.id);
              }}
              className="block text-base text-gray-100 hover:text-yellow-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
