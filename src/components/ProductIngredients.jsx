import React, { useState } from "react";

const ProductIngredients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-orange-50 py-20 font-thai">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-red-700 mb-10">
          ส่วนประกอบของผลิตภัณฑ์
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* รูปภาพ (สามารถคลิกขยาย) */}
          <div className="cursor-pointer" onClick={openModal}>
            <img
              src="/src/assets/images/product_ingredients/ProductIngredients.png"
              alt="ส่วนประกอบ"
              className="rounded-xl shadow-lg w-full object-contain hover:scale-105 transition-transform duration-500"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              (คลิกเพื่อขยายภาพ)
            </p>
          </div>

          {/* รายละเอียด */}
          <div className="text-gray-800 space-y-4 text-lg leading-relaxed">
            <p>
              Wang Lao Ji Herbal Drinks ถูกเตรียมตามสูตรดั้งเดิม
              โดยใช้สมุนไพรธรรมชาติที่ประกอบด้วย "ดอกไม้สามชนิด สมุนไพรสามชนิด
              และใบหนึ่งชนิด" เราใส่ใจในกระบวนการปรุงแบบดั้งเดิม
              พร้อมกับการสกัดสารสำคัญจากสมุนไพรและผสมผสานด้วยเทคโนโลยีสมัยใหม่
            </p>
            <p>
              เครื่องดื่มสมุนไพร "หวังเหล่าจี๋"
              ผลิตจากวัตถุดิบธรรมชาติที่คัดสรรอย่างดี มีส่วนประกอบหลักได้แก่:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {[
                {
                  name: "สายน้ำผึ้ง",
                  img: "/src/assets/images/product_ingredients/honeysuckle.jpg",
                },
                {
                  name: "เก็กฮวย",
                  img: "/src/assets/images/product_ingredients/chrysanthemum.jpg",
                },
                {
                  name: "ดอกลีลาวดี",
                  img: "/src/assets/images/product_ingredients/frangipani.jpg",
                },
                {
                  name: "เฉาก๊วย",
                  img: "/src/assets/images/product_ingredients/grassjelly.jpg",
                },
                {
                  name: "ชะเอมเทศ",
                  img: "/src/assets/images/product_ingredients/licorice.jpeg",
                },
                {
                  name: "แฮ่โกวเฉ่า",
                  img: "/src/assets/images/product_ingredients/prunella.jpg",
                },
                {
                  name: "ใบพลับพลา",
                  img: "/src/assets/images/product_ingredients/plubpla.png",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow"
                  />
                  <span className="text-lg text-gray-800">{item.name}</span>
                </li>
              ))}
            </ul>
            <p>
              ไม่มีวัตถุกันเสีย ไม่แต่งกลิ่น ไม่มีคาเฟอีน
              เหมาะกับผู้ที่ต้องการดูแลสุขภาพและดื่มได้ทุกเพศทุกวัยมีเครื่องหมายฮาลาล
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Modal สำหรับภาพขยาย */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <img
            src="/src/assets/images/product_ingredients/ProductIngredients.png"
            alt="ส่วนประกอบ"
            className="max-w-full max-h-[100vh] object-contain rounded-lg shadow-2xl cursor-pointer"
          />
        </div>
      )}
    </section>
  );
};

export default ProductIngredients;
