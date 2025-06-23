import React, { useRef } from "react";
import TurnTable from "./TurnTable";

const imageModules = import.meta.glob("/src/assets/images/360_images-2/*.png", {
  eager: true,
});
const images = Object.values(imageModules).map((module) => {
  return typeof module === "object" && module.default ? module.default : module;
});

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const LandingPage = () => (
  <section
    id="home"
    className="min-h-screen bg-gradient-to-br from-red-100 to-orange-50"
  >
    <div className="container mx-auto px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ฝั่งซ้าย: ข้อมูลสินค้า * */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-7xl font-bold text-red-700">หวังเหล่าจี๋</h1>
          <p className="text-2xl text-gray-800">
            เครื่องดื่มสมุนไพรเพื่อสุขภาพที่คุณวางใจ ผลิตจากสมุนไพรธรรมชาติ 100%
            พร้อมรสชาติกลมกล่อม สดชื่นทุกช่วงเวลา
          </p>
          <button className="btn-modern mt-4">
            <a
              href="#extra-slide"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("extra-slide");
              }}
              className="nav-link text-base sm:text-lg md:text-xl text-gray-200 hover:text-yellow-200 transition-colors duration-300"
            >
              รายละเอียดเพิ่มเติม
            </a>
          </button>
        </div>

        {/* ฝั่งขวา: รูปหมุน 360  */}
        <div className="flex justify-center">
          <TurnTable images={images} />
        </div>
      </div>
    </div>
  </section>
);

export default LandingPage;
