import React from "react";
import TurnTable from "./TurnTable";

const AboutPage = () => {
  const imageModules = import.meta.glob("/src/assets/images/360_images/*.jpg", {
    eager: true,
  });
  const images = Object.values(imageModules).map((module) => {
    return typeof module === "object" && module.default
      ? module.default
      : module;
  });

  return (
    <section id="about" className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto p-8">
        <h2 className="section-title text-4xl mb-10 text-center">
          เกี่ยวกับเรา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="p-6 space-y-4">
            <p className="text-lg text-gray-700">
              หวังเหล่าจี๋เป็นเครื่องดื่มสมุนไพรยอดนิยมจากจีนที่มีประวัติยาวนาน
              ช่วยคลายร้อน บำรุงสุขภาพ และได้รับการรับรองจาก FDA
            </p>
            <p className="text-lg text-gray-700">
              ส่วนผสมจากสมุนไพรธรรมชาติ เช่น โกฐจุฬาลัมพา และเก๊กฮวย
              ช่วยให้ร่างกายสดชื่นและมีพลัง
            </p>
          </div>
          <div className="p-6">{/* <TurnTable images={images} /> */}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
