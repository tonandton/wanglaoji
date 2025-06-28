// ExtraSlideSection.jsx
import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import { FaStore } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTruckPlane } from "react-icons/fa6";
import { PiPlantBold } from "react-icons/pi";
import { GiCupcake, GiHeartPlus, GiHerbsBundle } from "react-icons/gi";
import { MdGavel } from "react-icons/md";

const ExtraSlideSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // ความเร็ว animation (ms)
      once: true, // ให้เล่นแค่ครั้งแรกที่ scroll มาถึง
      offset: 100, // ระยะก่อนถึง element
    });
  }, []);

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
        <h2
          className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-12"
          data-aos="fade-up"
        >
          ผลิตภัณฑ์และรสชาติ
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 text-gray-800 text-lg leading-relaxed px-2"
            data-aos="fade-right"
          >
            <p>
              <strong className="text-red-600 text-xl">หวังเหล่าจี๋</strong> —
              เครื่องดื่มสมุนไพรระดับตำนาน ที่ถ่ายทอดภูมิปัญญาจีนโบราณ
              ผสมผสานเข้ากับความทันสมัย
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <PiPlantBold className="text-green-700 mt-1 text-xl" />
                <span>
                  คัดสรรสมุนไพรธรรมชาติ 100% เพื่อสุขภาพที่ดีในทุกช่วงวัย
                </span>
              </li>
              <li className="flex items-start gap-3">
                <GiHerbsBundle className="text-green-600 mt-1 text-xl" />
                <span>สูตรเข้มข้น ต้นตำรับแท้จากแพทย์สมุนไพรจีน</span>
              </li>
              <li className="flex items-start gap-3">
                <GiCupcake className="text-red-400 mt-1 text-xl" />
                <span>รสชาติกลมกล่อม สดชื่น ดื่มง่าย เหมาะกับทุกโอกาส</span>
              </li>
              <li className="flex items-start gap-3">
                <GiHeartPlus className="text-pink-500 mt-1 text-xl" />
                <span>เสริมภูมิต้านทาน ปรับสมดุลร่างกายจากภายใน</span>
              </li>
              <li className="flex items-start gap-3">
                <FaStore className="text-yellow-500 mt-1 text-xl" />
                <span>ส่งตรงจากแหล่งผลิตโดยไม่ผ่านพ่อค้าคนกลาง</span>
              </li>
              <li className="flex items-start gap-3">
                <MdGavel className="text-blue-500 mt-1 text-xl" />
                <span>ได้รับการรับรองตามมาตรฐานสากล</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTruckPlane className="text-red-600 mt-1 text-xl" />
                <span>จัดส่งทั่วประเทศอย่างรวดเร็วและปลอดภัย</span>
              </li>
            </ul>

            <p>
              ทุกกระป๋อง คือความตั้งใจที่จะมอบประสบการณ์ “ความสดชื่นที่มีคุณค่า”
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
