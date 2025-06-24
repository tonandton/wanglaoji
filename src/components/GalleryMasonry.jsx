import React from "react";

const GalleryMasonry = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 px-4 md:px-0">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`gallery-${i}`}
          className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  );
};

export default GalleryMasonry;
