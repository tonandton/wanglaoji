import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GalleryAbout from "./GalleryAbout";

const AboutPage = () => {
  const aboutImages = import.meta.glob("/src/assets/images/image_about/*.jpg", {
    eager: true,
  });
  const aboutImageList = Object.values(aboutImages).map((mod) =>
    typeof mod === "object" && mod.default ? mod.default : mod
  );
  const imageTimeline = aboutImageList[0]; // เลือกรูปแรก
  const imageTradmark = aboutImageList[1]; // เลือกรูปแรก

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-white via-white/90 to-gray-50 bg-fixed bg-center bg-cover"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12"
          data-aos="fade-up"
        >
          เกี่ยวกับเรา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start text-gray-800">
          {/* คอลัมน์ซ้าย */}
          <div
            className="space-y-6 text-base md:text-lg leading-loose p-6  backdrop-blur-sm"
            data-aos="fade-right"
          >
            <p>
              สืบเนื่องจากแบรนด์ <strong>"หวังเหล่าจี๋"</strong> ในปี 1828
              หวังเหล่าจี๋ ถูกคิดค้นโดย <strong>"หวาง เจ๋อปัง"</strong>{" "}
              ซึ่งเป็นแพทย์สมุนไพรในมณฑลกวางตุ้ง
              โดยเริ่มแรกเป็นสูตรชาสมุนไพรที่ใช้รักษาอาการร้อนใน
              และถูกจำหน่ายในร้านขายยาเป็นหลัก
            </p>
            <p>
              ในปี 1949 รัฐบาลจีนเข้ามาควบคุมธุรกิจเอกชน ทำให้ทรัพย์สินของตระกูล
              <strong>"หวาง เจ๋อปัง"</strong> ถูกโอนให้รัฐ ภายใต้รัฐวิสาหกิจจีน
              ชื่อว่า <strong>"กว่างเย้า"</strong>{" "}
              ที่ทำธุรกิจเกี่ยวกับยาและสินค้าเพื่อสุขภาพ
            </p>
            <p>
              ในปี 1997 <strong>หงเต้า (JDB Group)</strong>{" "}
              ซึ่งเป็นบริษัทที่เชี่ยวชาญด้านอาหารและเครื่องดื่ม
              ได้เข้ามาทำสัญญากับรัฐวิสาหกิจจีน <strong>"กว่างเย้า"</strong>
              เพื่อขยายการตลาดของแบรนด์ <strong>"หวังเหล่าจี๋"</strong>{" "}
              จำหน่ายในประเทศจีน และได้ทำการตลาดในประเทศไทยและทั่วโลก
              โดยจดสิทธิบัตรไว้ภายใต้ชื่อแบรนด์ <strong>"หวังเหล่าจี๋"</strong>
            </p>
            <p>
              ใบปี 2008-2010 <strong>หงเต้า (JDB Group)</strong>{" "}
              สามารถสร้างมูลค่ากาตลาดได้ถึง 500,000 ล้านบาน และทำให้
              "หวังเหล่าจี๋" กลายมาเป็นแบรนด์เครื่องดื่มชั้นนำของประเทศจีน
              แม้แบรนด์จะเติบโตอย่างรวดเร็ว แต่ความสัมพันธ์ระหว่าง{" "}
              <strong>"กว่างเย้า"</strong>
            </p>
          </div>
          <div
            className="space-y-6 text-base md:text-lg leading-loose  p-6  backdrop-blur-sm"
            data-aos="fade-left"
          >
            <p>
              และ <strong>หงเต้า (JDB Group)</strong> เริ่มมีปัญหา เนื่องจาก{" "}
              <strong>"กว่างเย้า"</strong>
              พบความผิดปกติของยอดขขายไม่สมเหตุสมผล จึงได้ยึดแบรนด์
              "หวังเหล่าจี๋" คืนและได้ยกเลิกสัญญาที่ทำกับ{" "}
              <strong>หงเต้า (JDB Group)</strong>
              ทั้งหมด ทำให้เกิดข้อพิพาททางกฏหมายที่ส่งผลกระทบต่อแบรนด์ตั้งนั้นมา
            </p>
            <p>
              ในปี 2012 <strong>หงเต้า (JBD Group)</strong>{" "}
              ถูกสั่งห้ามไม่ให้ใช้แบรนด์ <strong>"หวังเหล่าจี๋"</strong>{" "}
              ทำการตลาดอีก เพื่อรอความชัดเจนในเรื่องของเครื่องหมายการค้า
              จึงได้ออกแบรนด์ใหม่ชื่ออว่า <strong>'เจียตัวเป่า'</strong> ภายใต้{" "}
              <strong>JDB Group</strong>
              ทำการตลาดควบคู่กัน ซึ่งทั้งรูปลักษณ์ภายนอกและรสชาติเหมือนกับ
              <strong>'หวังเหล่าจี๋'</strong>
            </p>
            <p>
              การที่มีข้อพิพาทฟ้องร้องเกี่ยวกับสิทธิ์ในการใช้ชื่อและสูตรของหวังเหล่าจี๋โดย
              กว่างเย้า รัฐวิสาหกิจจีน
              อ้างว่าตนเป็นเจ้าของสิทธิ์ในการผลิตและจัดจจำหน่ายในประเทศจีน
              จึงสั่งห้ามไม่ให้ <strong>หงเต้า (JDB Group)</strong>{" "}
              ทำการผลิตเครือ่งดิ่มสมุนไพรหวังเหล่าจี๋ในประเทศจีน ทำให้ หงเต้า{" "}
              <strong>(JDB Group)</strong> ย้ายฐานการผลิตไปยังประเทศมาเลเซีย
              และในอนาคตสามารถผลิตในประเทศไทยได้
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-4" data-aos="fade-up">
          <p>
            <strong className="text-red-600 text-2xl">GROUP PROFILE</strong>{" "}
          </p>
        </div>
        <div className="flex justify-center" data-aos="fade-up">
          <p>
            ก่อตั้งขึ้นในปี ค.ศ. 1995 กลุ่มบริษัท JOB Group
            เป็นองค์กรขนาดใหญ่ที่ดำเนินธุรกิจครบวงจรตั้งแต่ การเพาะปลูกวัตถุดิบ
            การผลิต ไปจนถึงการจำหน่ายเครื่องดื่ม
            โดยมีสำนักงานใหญ่ตั้งอยู่ที่กรุงปักกิ่ง ผลิตภัณฑ์ของ JDB Group
            ถูกจำหน่ายไปใน 80 กว่าประเทศทั่วโลก และมียอดขายสะสมถถึง 28
            พันล้านดอลลาร์สหรัฐ ผลิตภัณฑ์ของเรา ประกอบไปด้วย ชาจับเลี้ยง "Wang
            Lao Ji" ในรูปแบบกระป๋อง ในช่วงกว่า 20 ปีที่ผ่านมา
            นับตั้งแต่ก่อตั้งกลุ่มบริษัท JDB Group
            ได้สร้างแบรนด์เครื่องดื่มชื่อดังของจีน 3 แบรนด์ ได้แก่
            "หวังเหล่าจี๋" (Wong Lo Ji), "เจี่ยวตัวเป่า" (Lia Duo Bao), และ
            "คุณหลุน เมาน์เทน" (Kunlun Mountains)
          </p>
        </div>
        <div className="flex justify-center mt-5 mb-8" data-aos="fade-up">
          <p>
            ต่อมา วันที่ 15 เมษายน ปี ค.ศ 2024 ห้างหุ้นส่วนจำกัด บริบูรณ์
            เทรดดิ้ง
            ได้รับความไว้วางใจให้เป็นผู้นำเข้าและผู้จัดจำหน่ายแต่เเพียงผู้เดียวในประเทศไทย
          </p>
        </div>

        <GalleryAbout
          imageTimeline={imageTimeline}
          imageTradmark={imageTradmark}
        />
      </div>
    </section>
  );
};

export default AboutPage;
