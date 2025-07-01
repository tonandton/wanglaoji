import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // กัน reload หน้า
    const form = e.target;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mvgrllyj", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        // ✅ Redirect ไปยัง Contact section
        window.location.href = "/#contact";
      } else {
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
      }
    } catch (error) {
      console.error("ส่งข้อมูลล้มเหลว:", error);
      alert("เกิดข้อผิดพลาด");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 mt-16 bg-gradient-to-br from-white via-red-50 to-orange-50 font-thai"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* หัวข้อ */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-red-700 mb-12">
          ติดต่อเรา
        </h2>

        {/* Layout กล่อง 2 ส่วน */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 🧾 แบบฟอร์มติดต่อ */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  ชื่อ-นามสกุล
                </label>
                <div className="relative">
                  <FiUser className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="กรอกชื่อของคุณ"
                    className="pl-10 w-full py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  อีเมล
                </label>
                <div className="relative">
                  <FiMail className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="pl-10 w-full py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  ข้อความ
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute top-3 left-3 text-gray-400" />
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="คุณต้องการติดต่อเรื่องอะไร..."
                    className="pl-10 pt-3 w-full py-2 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded-xl transition duration-300"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* 📍 ข้อมูลติดต่อ */}
          <div className="grid grid-cols-1 gap-8 text-center">
            {/* โทร */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-red-100">
              <FiPhone className="text-4xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">โทร</h3>
              <a
                href="tel:0863589179"
                className="text-red-600 text-lg hover:underline"
              >
                086-358-9179
              </a>
            </div>

            {/* อีเมล */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-red-100">
              <FiMail className="text-4xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                อีเมล
              </h3>
              <a
                href="mailto:Cherdchai179@gmail.com"
                className="text-red-600 text-lg hover:underline break-all"
              >
                Cherdchai179@gmail.com
              </a>
            </div>

            {/* แผนที่ */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-red-100">
              <FiMapPin className="text-4xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                ที่อยู่
              </h3>
              <a
                href="https://maps.app.goo.gl/A8DVps82DvuYCdWf7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 text-base hover:underline"
              >
                1/179 ซอยพุทธบูชา36 ถนนพุทธบูชา แขวงบางมด เขตทุ่งครุ กรุงเทพฯ
                10140
              </a>
            </div>
          </div>
        </div>

        {/* เสริม: ปุ่ม LINE
      <div className="mt-12 text-center">
        <a
          href="https://line.me/ti/p/xxxxxxxx" // ใส่ Line จริงตรงนี้
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300"
        >
          📱 ติดต่อผ่าน LINE
        </a>
      </div> */}
      </div>
    </section>
  );
};

export default ContactPage;
