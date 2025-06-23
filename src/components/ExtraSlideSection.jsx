import React from "react";
import ImageSlider from "./ImageSlider";

const ExtraSlideSection = () => {
  const imageModules = import.meta.glob(
    "/src/assets/images/slider/Present_*.jpg",
    {
      eager: true,
    }
  );

  const images = Object.values(imageModules).map((mod) =>
    typeof mod === "object" && mod.default ? mod.default : mod
  );

  return (
    <section
      id="extra-slide"
      className="py-16 bg-gradient-to-b from-white via-red-50 to-orange-50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-red-600 text-center mb-10">
          ผลิตภัณฑ์และรสชาติ
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-gray-800 space-y-4 md:space-y-6 px-4 md:px-0">
            <p className="text-lg leading-relaxed">
              สำรวจผลิตภัณฑ์ใหม่ล่าสุดของ <strong>หวังเหล่าจี๋</strong>{" "}
              ที่ผสมผสาน รสชาติสมุนไพรเข้มข้นและคุณประโยชน์ต่อสุขภาพ
            </p>
            <p className="text-lg leading-relaxed">
              เหมาะสำหรับทุกวัย สดชื่นทุกช่วงเวลา
            </p>
          </div>
          <ImageSlider images={images} autoSlide />
        </div>
      </div>
    </section>
  );
};

export default ExtraSlideSection;
