import React, { useState } from "react";

const GalleryAbout = ({ imageTimeline, imageTradmark }) => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center justify-items-center text-gray-800 py-8">
        <img
          src={imageTimeline}
          alt="timeline"
          className="rounded-3xl cursor-zoom-in w-full max-w-[800px]"
          data-aos="fade-up"
          onClick={() => openModal(imageTimeline)}
        />
        <img
          src={imageTradmark}
          alt="tradmark"
          className="rounded-3xl cursor-zoom-in w-full max-w-[800px]"
          data-aos="fade-up"
          onClick={() => openModal(imageTradmark)}
        />
      </div>

      {/* ✅ Modal ขยายรูปแบบไม่ตัดและอยู่กึ่งกลางจริง */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal} // กดพื้นหลังเพื่อปิด
        >
          <div
            className="max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // กันปิดเมื่อกดรูป
          >
            <img
              src={modalImage}
              alt="full-view"
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryAbout;
