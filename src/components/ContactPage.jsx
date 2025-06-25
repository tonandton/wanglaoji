import React from "react";

const ContactPage = () => (
  <section
    id="contact"
    className="py-20 bg-gradient-to-br from-red-50 to-white"
  >
    <div className="container mx-auto p-8 text-center">
      <h2 className="section-title text-4xl mb-10">ติดต่อเรา</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-red-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-gray-800">โทร: 086-358-9179</p>
        </div>
        <div className="bg-red-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-gray-800">อีเมล: Cherdchai179@gmail.com</p>
          <p className="text-lg text-gray-800">ที่อยู่:</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;
