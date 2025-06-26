import React, { useRef, useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const sections = ["home", "about", "trademark", "contact"];

const Header = () => {
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll smooth
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Detect section in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 100 <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-lg border-b border-white/10 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <h1
          onClick={scrollToTop}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 hover:text-yellow-500 cursor-pointer"
        >
          หวังเหล่าจี๋
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-800">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className={`transition-colors duration-300 ${
                activeSection === id
                  ? "text-red-700 font-semibold underline underline-offset-8"
                  : "text-gray-600 hover:text-red-500"
              }`}
            >
              {id === "home"
                ? "หน้าแรก"
                : id === "about"
                ? "เกี่ยวกับ"
                : id === "trademark"
                ? "เครื่องหมายการค้า"
                : "ติดต่อเรา"}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-red-700 text-2xl">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-inner px-6 pb-4 pt-2">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className={`block text-base py-2 transition-colors duration-300 ${
                activeSection === id
                  ? "text-red-700 font-semibold underline underline-offset-4"
                  : "text-gray-800 hover:text-red-500"
              }`}
            >
              {id === "home"
                ? "หน้าแรก"
                : id === "about"
                ? "เกี่ยวกับ"
                : id === "trademark"
                ? "เครื่องหมายการค้า"
                : "ติดต่อเรา"}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
