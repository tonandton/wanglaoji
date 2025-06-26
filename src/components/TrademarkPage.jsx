import React, { useState } from "react";
import { FiDownload, FiFileText } from "react-icons/fi";

// สมมุติ PDF ถูกวางไว้ที่ public หรือ import ผ่าน glob
const pdfFiles = [
  {
    title: "หนังสือรับรองเครื่องหมายการค้า ปี 2020",
    file: "/docs/01-POWER-OF-ATTORNEY.pdf",
  },
  {
    title: "หนังสือรับรองการต่ออายุ ปี 2024",
    file: "/docs/02-ใบมอบอำนาจให้บริษัท-บี-ที.pdf",
  },
  {
    title: "ใบจดทะเบียนเครื่องหมาย (Thailand)",
    file: "/docs/03-ใบมอบอำนาจให้หจก-บริบูรณ์เทรดดิ้ง.pdf",
  },
];

const TrademarkPage = () => {
  const [selected, setSelected] = useState(pdfFiles[0]);

  return (
    <section
      id="trademark"
      className="min-h-screen py-20 bg-gradient-to-b from-yellow-50 via-red-50 to-white font-thai"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-red-800 drop-shadow-md">
          เอกสารเครื่องหมายการค้า
        </h2>

        {/* รายการ PDF */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfFiles.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-lg ${
                selected.file === item.file
                  ? "bg-gradient-to-r from-red-100 to-red-50 border-red-400"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3 text-gray-800">
                <FiFileText className="text-3xl text-red-600 mt-1" />
                <div className="text-left">
                  <p className="font-semibold text-lg leading-snug">
                    {item.title}
                  </p>
                  <div className="mt-2 flex gap-4 text-sm text-red-500">
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      เปิดดู
                    </a>
                    <a
                      href={item.file}
                      download
                      className="hover:underline text-gray-600"
                    >
                      <FiDownload className="inline-block mr-1" />
                      ดาวน์โหลด
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* แสดง PDF ที่เลือก */}
        <div className="bg-white rounded-2xl shadow-xl border p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            📄 {selected.title}
          </h3>
          <div className="w-full h-[500px] border rounded-lg overflow-hidden">
            <iframe
              src={selected.file}
              title={selected.title}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkPage;
