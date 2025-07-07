import React from "react";

const imageModules = import.meta.glob("/src/assets/images/*.{jpg,jpeg,png}", {
  eager: true,
});

const images = Object.entries(imageModules).reduce((acc, [path, mod]) => {
  const filename = path.split("/").pop();
  acc[filename] = mod.default;
  return acc;
}, {});

const dealerSale = [{ name: "สมัครตัวแทน Dealer", img: images["dealer.jpg"] }];

const DealerSection = () => {
  return (
    <section className="bg-white py-20 px-6 font-thai">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* รูปภาพ */}
        <div className="w-full">
          {dealerSale.map((item, index) => (
            <img
              src={item.img}
              alt={item.name}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          ))}
        </div>

        {/* ข้อความ */}
        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700">
            การสมัครเป็น Dearler
          </h2>
          <p className="text-lg leading-relaxed">
            หวัง เหล่า จี๋ / Wang Lao Ji น้ำจับเลี้ยง สมุนไพรธรรมชาติ 100%
            สูตรเข้มข้น ดับกระหาย แก้ร้อนใน แก้เผ็ดร้อน
          </p>
          <p className="text-lg leading-relaxed font-semibold text-gray-700">
            นำเข้าและจัดจำหน่ายโดย ห้างหุ้นส่วนจำกัด บริบูรณ์ เทรดดิ้ง
          </p>
          <p className="text-lg leading-relaxed">
            รับสมัครตัวแทนจำหน่าย Dealer ทั่วประเทศ โดยมีเงื่อนไขดังนี้:
          </p>
          <ul className="list-disc list-inside text-base space-y-2 text-gray-700">
            <li>
              ได้ราคาดีลเลอร์{" "}
              <strong className="underline">ราคาต้นทุนของบริษัท</strong>{" "}
              (ขั้นต่ำ 300 ลังขึ้นไป)
            </li>
            <li>มีหนังสือแต่งตั้งการเป็นตัวแทนจำหน่าย (Dealer) ประจำพื้นที่</li>
            <li>
              มีทีมกฎหมายดูแลเรื่องลิขสิทธิ์ เครื่องหมายการค้า ทะเบียนการค้า
              และเงื่อนไขอื่นๆ ตามที่บริษัทกำหนด
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DealerSection;
