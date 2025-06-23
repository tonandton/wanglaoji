import React, { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("right");
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);

  const imageModules = import.meta.glob("/src/assets/images/gallerys/*.jpg", {
    eager: true,
  });
  const images = Object.values(imageModules).map((mod) =>
    typeof mod === "object" && mod.default ? mod.default : mod
  );

  const handleScrollLeft = () => {
    setScrollDirection("left");
    setScrollPosition((prev) => Math.max(prev - 600, 0));
  };

  const handleScrollRight = () => {
    if (galleryRef.current) {
      const maxScroll =
        galleryRef.current.scrollWidth - galleryRef.current.clientWidth;
      setScrollDirection("right");
      setScrollPosition((prev) => Math.min(prev + 600, maxScroll));
    }
  };

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const container = galleryRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const next = scrollDirection === "right" ? prev + 600 : prev - 600;

        if (next >= maxScroll) {
          setScrollDirection("left");
          return maxScroll;
        } else if (next <= 0) {
          setScrollDirection("right");
          return 0;
        }
        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [scrollDirection]);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
      const itemWidth = 192; // ปรับตามขนาด .w-48
      const index = Math.round(scrollPosition / itemWidth);
      setActiveIndex(index);
    }
  }, [scrollPosition]);

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-red-600 mb-10">
          รูปภาพจากงานแสดงสินค้า
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={handleScrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/80 text-white p-4 rounded-full shadow-lg hover:bg-red-700 active:bg-red-800 transition z-10"
            aria-label="Scroll Left"
          >
            ❮
          </button>

          {/* Right Button */}
          <button
            onClick={handleScrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/80 text-white p-4 rounded-full shadow-lg hover:bg-red-700 active:bg-red-800 transition z-10"
            aria-label="Scroll Right"
          >
            ❯
          </button>

          {/* Gallery */}
          <div
            ref={galleryRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth space-x-6 px-16"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full max-w-md h-[320px] scroll-snap-align-start relative cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* 🔵 Dot Indicators */}
          <div className="mt-6 flex justify-center space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-red-600 scale-125" : "bg-gray-400"
                }`}
                onClick={() => setScrollPosition(i * 192)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={closeModal} // ✅ คลิกที่พื้นหลัง modal เพื่อปิด
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // ✅ ไม่ปิด modal เมื่อคลิกรูป
          >
            {/* <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-red-600 hover:text-white transition shadow-lg"
              aria-label="Close modal"
            >
              ✕
            </button> */}
            <img
              src={modalImage}
              alt="Enlarged"
              className="w-full max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
