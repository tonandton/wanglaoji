import React, { useState, useEffect } from "react";

const ImageSwitcher = ({
  images = [],
  interval = 4000,
  showArrows = false,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToIndex = (index) => setCurrent(index);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl shadow-2xl group">
      {/* Images */}
      <div className="relative w-full h-[320px] md:h-[400px] bg-white">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      {showArrows && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20"
          >
            ▶
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-red-600 scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSwitcher;
