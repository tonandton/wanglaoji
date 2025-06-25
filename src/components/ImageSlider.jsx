import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageSlider = ({ images, autoSlide = true, interval = 5000 }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: index * scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Auto slide
  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      scrollRight();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoSlide]);

  // ESC close lightbox
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // ความเร็ว animation (ms)
      once: true, // ให้เล่นแค่ครั้งแรกที่ scroll มาถึง
      offset: 100, // ระยะก่อนถึง element
    });
  }, []);

  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-100 bg-white bg-opacity-60 backdrop-blur-lg"
        data-aos="fade-left"
      >
        {/* Slider Container */}
        <div
          ref={containerRef}
          className="flex w-full h-full overflow-hidden scroll-smooth scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 scroll-snap-align-start bg-black/5 flex items-center justify-center transition-opacity duration-500"
            >
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full max-h-[400px] md:max-h-[500px] object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                onClick={() => {
                  setLightboxImage(src);
                  setLightboxOpen(true);
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-red-600 hover:text-red-800 border border-gray-300 backdrop-blur-md p-2 md:p-3 rounded-full shadow-lg transition"
          aria-label="Previous"
        >
          ❮
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-red-600 hover:text-red-800 border border-gray-300 backdrop-blur-md p-2 md:p-3 rounded-full shadow-lg transition"
          aria-label="Next"
        >
          ❯
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                scrollToIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? "bg-red-600 scale-110 shadow-md"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={lightboxImage}
            alt="zoomed"
            className="max-w-[95vw] max-h-[90vh] rounded-xl shadow-2xl transition-opacity duration-500"
          />
        </div>
      )}
    </>
  );
};

export default ImageSlider;
