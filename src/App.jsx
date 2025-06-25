import React, { useEffect } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ExtraSlideSection from "./components/ExtraSlideSection";
import ContactPage from "./components/ContactPage";
import Gallery from "./components/Gallery";
import LineIcon from "./components/LineIcon";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // ❗ ถ้าอยากให้ animation เล่นทุกครั้งที่ scroll กลับมา
    });

    const refreshAOS = () => {
      AOS.refresh(); // หรือ refreshHard() ถ้าคุณมี lazy images
    };

    window.addEventListener("load", refreshAOS);
    return () => window.removeEventListener("load", refreshAOS);
  }, []);

  return (
    <div className="font-kanit">
      <Header />
      <LandingPage />
      <ExtraSlideSection />
      <Gallery />
      <AboutPage />
      <LineIcon />
      <ContactPage />
    </div>
  );
}

export default App;
