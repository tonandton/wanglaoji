import React, { useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const scrollOrNavigate = (id) => {
    if (id === "trademark") {
      navigate("/trademark");
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/"); // เผื่อผู้ใช้เปิดจากหน้าที่ไม่ใช่หน้าแรก
        setTimeout(() => {
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-lg border-b border-white/10 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* โลโก้ / ชื่อแบรนด์ */}
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 hover:text-yellow-500 cursor-pointer tracking-wide transition-colors duration-300"
        >
          หวังเหล่าจี๋
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-800">
          {[
            { label: "หน้าแรก", id: "home" },
            { label: "เกี่ยวกับ", id: "about" },
            { label: "เครื่องหมายการค้า", id: "trademark" },
            { label: "ติดต่อเรา", id: "contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                scrollOrNavigate(item.id);
              }}
              className="hover:text-red-600 text-gray-700 transition-colors duration-300"
            >
              {item.label}
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

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-inner px-6 pb-4 pt-2">
          {[
            { label: "หน้าแรก", id: "home" },
            { label: "เกี่ยวกับ", id: "about" },
            { label: "เครื่องหมายการค้า", id: "trademark" },
            { label: "ติดต่อเรา", id: "contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="block text-base py-2 text-gray-800 hover:text-red-600 transition-colors duration-300"
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
