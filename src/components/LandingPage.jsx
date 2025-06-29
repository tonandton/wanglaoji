import React, { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";

const imageModules = import.meta.glob("/src/assets/images/image_header/*.png", {
  eager: true,
});
const images = Object.values(imageModules).map((mod) =>
  typeof mod === "object" && mod.default ? mod.default : mod
);
const headerImage = images[0]; // ใช้รูปหลัก

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const LandingPage = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100 overflow-hidden  mt-5"
  >
    {/* วงกลมเบลอสร้างมิติ */}
    <div className="absolute top-[-5%] left-[-10%] w-[300px] h-[300px] bg-red-300 opacity-30 blur-3xl rounded-full animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-200 opacity-20 blur-2xl rounded-full animate-pulse-slow" />

    <div className="relative z-10 container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* ฝั่งซ้าย: ข้อความ */}
        <div className="space-y-6 text-center" data-aos="fade-right">
          <div className="w-full max-w-xl mx-auto md:mx-0 space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-red-700 drop-shadow-[2px_4px_3px_rgba(0,0,0,0.2)] animate-fadeInUp">
              หวังเหล่าจี๋
            </h1>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              className="w-full max-w-xl mx-auto"
            >
              <SwiperSlide>
                <div className="min-h-[200px] flex items-center justify-center">
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    "หวังเหล่าจี๋" เป็นเครื่องดื่มสมุนไพร
                    ที่มีสรรพคุณช่วยแก้ร้อนใน คลายร้อน กระหายน้ำ
                    เติมความสดชื่นให้กับตัวคุณ
                    เครื่องดื่มนี้เป็นที่นิยมในเมืองจีนเป็นอย่างมากเพราะมักจะกินคู่กับอาหารที่รสจัดจ้าน
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="min-h-[200px] flex items-center justify-center">
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    เผ็ดและชาลิ้น เช่น ชาบูหม่าล่า เพราะจะทำให้หายชา
                    กินด้วยกันเข้ากันได้ดีมาก นอกจากนี้
                    ยังมีสรรพคุณของยาทำให้สุขภาพร่างกายดีขึ้น
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="min-h-[200px] flex items-center justify-center">
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    เราคัดสรรวัตถุดิบสมุนไพรแท้ 100% จากแหล่งธรรมชาติชั้นดี
                    ผ่านกรรมวิธีที่รักษาคุณค่าสารอาหาร พร้อมรสชาติที่ดื่มง่าย
                    สดชื่น และปลอดภัย เหมาะสำหรับทุกเพศทุกวัย
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-h-[200px] flex items-center justify-center">
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    เราคือตัวแทนจัดจำหน่าย เครื่องสมุนไพร หวังเหล่าจี๋
                    แต่เพียงผู้เดียวในประเทศ
                    ที่ได้รับการรับรองจากเจ้าของเครื่องหมายการค้าโดยตรง
                    มั่นใจในมาตรฐานที่ได้รับการรับรองในระดับสากล นำเข้า
                    และจำหน่ายโดย <strong>หจก. บริบูรณ์ เทรดดิ้ง</strong>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <button
              onClick={() => scrollToSection("extra-slide")}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-2xl transition duration-300 animate-fadeIn delay-300"
            >
              รายละเอียดเพิ่มเติม
            </button>
          </div>
        </div>

        {/* ฝั่งขวา: รูปเด่น */}
        <div
          className="flex justify-center animate-zoomIn delay-100"
          data-aos="fade-left"
        >
          <div className="relative group w-full max-w-md md:max-w-lg aspect-[3/4]  backdrop-blur-xl overflow-hidden transition-transform hover:scale-105 hover:rotate-[-1.5deg] duration-500">
            <img
              src={headerImage}
              alt="หวังเหล่าจี๋"
              className="w-full h-full object-contain z-10 relative"
            />
            {/* แสงสะท้อนเทียม */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LandingPage;
