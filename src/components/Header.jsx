import React, { useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (headerRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
      }, 400);
    }
  };

  return (
    <header
      ref={headerRef}
      className="bg-gradient-to-r from-red-800 to-red-600 text-white sticky top-0 z-50 shadow-lg font-thai"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 cursor-pointer"
          onClick={() => scrollToTop()}
        >
          หวังเหล่าจี๋
        </h1>
        <nav className="space-x-4 sm:space-x-6 flex items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="nav-link text-base sm:text-lg md:text-xl text-gray-200 hover:text-yellow-200 transition-colors duration-300"
          >
            หน้าแรก
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="nav-link text-base sm:text-lg md:text-xl text-gray-200 hover:text-yellow-200 transition-colors duration-300"
          >
            เกี่ยวกับ
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="nav-link text-base sm:text-lg md:text-xl text-gray-200 hover:text-yellow-200 transition-colors duration-300"
          >
            เครื่องหมายการค้า
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="nav-link text-base sm:text-lg md:text-xl text-gray-200 hover:text-yellow-200 transition-colors duration-300"
          >
            ติดต่อเรา
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
