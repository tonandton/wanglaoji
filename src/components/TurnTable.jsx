import React, { useState, useRef } from "react";

const TurnTable = ({ images }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const accumulatedDeltaX = useRef(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const THRESHOLD = 15; // ค่าที่ต้องลากถึงจะเปลี่ยนรูป

  const handleStart = (e) => {
    isDragging.current = true;
    accumulatedDeltaX.current = 0;
    lastX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    if (!hasInteracted) setHasInteracted(true);
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;

    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - lastX.current;

    accumulatedDeltaX.current += deltaX;

    if (Math.abs(accumulatedDeltaX.current) > THRESHOLD) {
      if (accumulatedDeltaX.current > 0) {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
      } else {
        setIndex((prev) => (prev + 1) % images.length);
      }
      lastX.current = clientX;
      accumulatedDeltaX.current = 0;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-lg select-none overflow-hidden max-w-full mx-auto touch-action-manipulation cursor-pointer"
      style={{
        height: "auto",
        maxHeight: "800px",
        width: "100%",
        maxWidth: "1200px",
      }}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <img
        src={images[index]}
        alt={`360-view-${index}`}
        className="w-full h-full object-contain pointer-events-none transition-opacity duration-200 ease-in-out"
      />

      {!hasInteracted && (
        <>
          {/* 👈 ซ้าย */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl pointer-events-none select-none animate-wiggle-left">
            👈
          </div>

          {/* 👉 ขวา */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl pointer-events-none select-none animate-wiggle-right">
            👉
          </div>

          {/* ข้อความ */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-sm text-white bg-red-600 px-3 py-1 rounded-full shadow-lg pointer-events-none select-none">
            ลากเพื่อหมุน 360°
          </div>
        </>
      )}
    </div>
  );
};

export default TurnTable;
