import React, { useRef, useEffect, useState } from "react";

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

  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      scrollRight();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoSlide]);

  return (
    <>
      <div className="relative w-full overflow-hidden rounded-xl shadow-xl max-w-full">
        <div
          ref={containerRef}
          className="flex w-full h-full overflow-hidden scroll-smooth scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 scroll-snap-align-start bg-black/30 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full max-h-[350px] md:max-h-[450px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => {
                  setLightboxImage(src);
                  setLightboxOpen(true);
                }}
              />
            </div>
          ))}
        </div>

        {/* ปุ่มเลื่อน */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full z-10 hover:bg-red-700"
        >
          ◀
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full z-10 hover:bg-red-700"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                scrollToIndex(i);
              }}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-red-600" : "bg-gray-300"
              } cursor-pointer`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={lightboxImage}
            alt="zoomed"
            className="max-w-full max-h-[90vh] rounded-xl shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default ImageSlider;
