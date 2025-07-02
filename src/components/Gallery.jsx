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
      const itemWidth = 384; // max-w-md
      const index = Math.round(scrollPosition / itemWidth);
      setActiveIndex(index);
    }
  }, [scrollPosition]);

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-4xl font-bold text-red-600 mb-12">
          รูปภาพสินค้า
        </h2>

        <div className="relative">
          {/* ปุ่มซ้าย */}
          <button
            onClick={handleScrollLeft}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-700 text-white p-3 rounded-full shadow-md transition z-20"
            aria-label="Scroll Left"
          >
            ❮
          </button>

          {/* ปุ่มขวา */}
          <button
            onClick={handleScrollRight}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-700 text-white p-3 rounded-full shadow-md transition z-20"
            aria-label="Scroll Right"
          >
            ❯
          </button>

          {/* แกลเลอรี่ */}
          <div
            ref={galleryRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth space-x-4 px-2 sm:px-4 py-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[360px] h-[260px] scroll-snap-align-start relative cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-contain bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-center text-gray-500 mt-2">
            (คลิกเพื่อขยายภาพ)
          </p>

          {/* จุดบอกตำแหน่ง */}
          <div className="mt-6 flex justify-center space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  i === activeIndex ? "bg-red-600 scale-125" : "bg-gray-400"
                }`}
                onClick={() => setScrollPosition(i * 384)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal แสดงภาพเต็ม */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Enlarged"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-pointer"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
