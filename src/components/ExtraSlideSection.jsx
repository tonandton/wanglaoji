// ExtraSlideSection.jsx
import React from "react";
import ImageSlider from "./ImageSlider";
import { FaLeaf, FaGlassCheers, FaHeartbeat } from "react-icons/fa";

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
      className="relative py-32 bg-fixed bg-[url('/src/assets/images/bg-parallax.jpg')] bg-cover bg-center"
    >
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-12">
          ผลิตภัณฑ์และรสชาติ
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-800 text-lg leading-relaxed px-2">
            <p>
              <strong className="text-red-600 text-xl">หวังเหล่าจี๋</strong> —
              เครื่องดื่มสมุนไพรระดับตำนาน ที่ถ่ายทอดภูมิปัญญาจีนโบราณ
              ผสมผสานเข้ากับความทันสมัย
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaLeaf className="text-green-600 mt-1" />
                <span>
                  คัดสรรสมุนไพรธรรมชาติ 100% เพื่อสุขภาพที่ดีในทุกช่วงวัย
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaGlassCheers className="text-red-400 mt-1" />
                <span>รสชาติกลมกล่อม สดชื่น เหมาะกับทุกโอกาส</span>
              </li>
              <li className="flex items-start gap-3">
                <FaHeartbeat className="text-pink-600 mt-1" />
                <span>เสริมภูมิต้านทาน ปรับสมดุลร่างกายจากภายใน</span>
              </li>
            </ul>
            <p>
              ทุกขวด คือความตั้งใจที่จะมอบประสบการณ์ “ความสดชื่นที่มีคุณค่า”
              จากธรรมชาติอย่างแท้จริง
            </p>
          </div>

          <ImageSlider images={images} autoSlide />
        </div>
      </div>
    </section>
  );
};

export default ExtraSlideSection;
