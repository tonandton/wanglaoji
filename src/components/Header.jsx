import React, { useRef, useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const sections = ["home", "about", "trademark", "contact"];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname !== "/") return;

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;

  //     let current = "home";
  //     for (const id of sections) {
  //       const el = document.getElementById(id);
  //       if (el) {
  //         const elTop = el.offsetTop;
  //         const elHeight = el.offsetHeight;

  //         // ถ้า scrollY อยู่ในช่วงของ section
  //         if (
  //           scrollY >= elTop - 120 &&
  //           scrollY < elTop + elHeight - windowHeight / 4
  //         ) {
  //           current = id;
  //         }
  //       }
  //     }
  //     setActiveSection(current);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top;
          const height = rect.height;

          // ถ้าส่วนบนของ section อยู่ในหน้าจออย่างน้อย 20%
          if (top <= window.innerHeight * 0.3 && top + height > 0) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollOrNavigate = (id) => {
    if (id === "trademark") {
      navigate("/trademark");
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 500);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-lg border-b border-white/10 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <h1
          onClick={() => {
            if (location.pathname !== "/") navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMobileMenuOpen(false);
          }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 hover:text-yellow-500 cursor-pointer"
        >
          หวังเหล่าจี๋
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-800">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollOrNavigate(id)}
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
                : id === "contact"
                ? "ติดต่อเรา"
                : ""}
            </button>
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
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-inner px-6 pb-4 pt-2 space-y-2">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollOrNavigate(id)}
              className={`block text-base py-2 w-full text-left transition-colors duration-300 ${
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
                : id === "contact"
                ? "ติดต่อเรา"
                : ""}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
