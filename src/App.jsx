import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ExtraSlideSection from "./components/ExtraSlideSection";
import ContactPage from "./components/ContactPage";
import Gallery from "./components/Gallery";
import PhoneIcon from "./components/PhoneIcon";
import LineIcon from "./components/LineIcon";
import TrademarkPage from "./components/TrademarkPage";
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
    <Router>
      <div className="font-kanit">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <ExtraSlideSection />
                <Gallery />
                <AboutPage />
                <PhoneIcon />
                <LineIcon />
                <ContactPage />
              </>
            }
          />
          <Route path="/trademark" element={<TrademarkPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
