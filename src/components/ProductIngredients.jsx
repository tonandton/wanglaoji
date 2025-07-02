import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";

const ProductIngredients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const imageModules = import.meta.glob(
    "/src/assets/images/product_ingredients/*.{jpg,jpeg,png}",
    { eager: true }
  );

  const images = Object.entries(imageModules).reduce((acc, [path, mod]) => {
    const filename = path.split("/").pop();
    acc[filename] = mod.default;
    return acc;
  }, {});

  const ingredients = [
    { name: "สายน้ำผึ้ง", img: images["honeysuckle.jpg"] },
    { name: "เก็กฮวย", img: images["chrysanthemum.jpg"] },
    { name: "ดอกลีลาวดี", img: images["frangipani.jpg"] },
    { name: "เฉาก๊วย", img: images["grassjelly.jpg"] },
    { name: "ชะเอมเทศ", img: images["licorice.jpeg"] },
    { name: "แฮ่โกวเฉ่า", img: images["prunella.jpg"] },
    { name: "ใบพลับพลา", img: images["plubpla.png"] },
  ];

  const productIng = [
    { name: "ส่วนประกอบของผลิตภัณฑ์", img: images["ProductIngredients.png"] },
  ];

  return (
    <section className="bg-orange-50 py-20 font-thai">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-red-700 mb-10"
          data-aos="fade-up"
        >
          ส่วนประกอบของผลิตภัณฑ์
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* รูปภาพ (สามารถคลิกขยาย) */}
          <div className="cursor-pointer" onClick={openModal}>
            {productIng.map((item, index) => (
              <img
                src={item.img}
                alt={item.name}
                className="rounded-xl shadow-lg w-full object-contain hover:scale-105 transition-transform duration-500"
              />
            ))}
            <p className="text-sm text-center text-gray-500 mt-2">
              (คลิกเพื่อขยายภาพ)
            </p>
          </div>

          {/* รายละเอียด */}
          <div className="text-gray-800 space-y-4 text-lg leading-relaxed self-start">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              className="w-full max-w-xl mx-auto mb-2"
            >
              <SwiperSlide>
                <div className="min-h-[200px] flex items-center justify-center">
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    Wang Lao Ji Herbal Drinks ถูกเตรียมตามสูตรดั้งเดิม
                    โดยใช้สมุนไพรธรรมชาติที่ประกอบด้วย "ดอกไม้สามชนิด
                    สมุนไพรสามชนิด และใบหนึ่งชนิด"
                    เราใส่ใจในกระบวนการปรุงแบบดั้งเดิม
                    พร้อมกับการสกัดสารสำคัญจากสมุนไพรและผสมผสานด้วยเทคโนโลยีสมัยใหม่
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-h-[200px] flex items-center justify-center">
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    "หวังเหล่าจี๋"
                    เป็นเครื่องดื่มสมุนไพรที่มีสรรพคุณช่วยแก้ร้อนใน คลายร้อน
                    กระหายน้ำ เติมความสนชื่นให้กับตัวคุณ
                    เครื่องดื่มนี้เป็นที่นิยมในเมืองจีนเป็นอย่างมากเพราะมักจะกินคู่กับอาหารที่มีรสจัดจ้าน
                    เผ็ดและชาลิ้น เช่น ชาบูหม่าล่า เพราะจะทำให้หายชา
                    กินด้วยกันเข้าได้ดีมาก นอกจากนี้
                    ยังมีสรรพคุณของยาทำให้สุขภาพร่างกายดีขึ้น
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <p>
              เครื่องดื่มสมุนไพร "หวังเหล่าจี๋"
              ผลิตจากวัตถุดิบธรรมชาติที่คัดสรรอย่างดี มีส่วนประกอบหลักได้แก่:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {ingredients.map((item, index) => (
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
          {productIng.map((item, index) => (
            <img
              src={item.img}
              alt={item.name}
              className="max-w-full max-h-[100vh] object-contain rounded-lg shadow-2xl cursor-pointer"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductIngredients;
