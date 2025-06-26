import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactPage = () => (
  <section
    id="contact"
    className="py-20 bg-gradient-to-br from-white via-red-50 to-orange-50 font-thai"
  >
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* หัวข้อ */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-red-700 mb-12">
        ติดต่อเรา
      </h2>

      {/* กล่องข้อมูลติดต่อ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* เบอร์โทร */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-red-100">
          <FiPhone className="text-4xl text-red-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">โทร</h3>
          <p className="text-lg text-gray-600">086-358-9179</p>
        </div>

        {/* อีเมล */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-red-100">
          <FiMail className="text-4xl text-red-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">อีเมล</h3>
          <p className="text-lg text-gray-600 break-all">
            Cherdchai179@gmail.com
          </p>
        </div>

        {/* ที่อยู่ */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-red-100">
          <FiMapPin className="text-4xl text-red-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">ที่อยู่</h3>
          <p className="text-lg text-gray-600">
            <span>แขวงบางจาก เขตภาษีเจริญ</span>
            <br />
            <span>กรุงเทพมหานคร 10160</span>
          </p>
        </div>
      </div>

      {/* ปุ่มติดต่อผ่าน Line (เสริม) */}
      {/* <div className="mt-12 text-center">
        <a
          href="https://line.me/ti/p/xxxxx" // 🔁 ใส่ลิงก์ Line ของคุณที่นี่
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

export default ContactPage;
