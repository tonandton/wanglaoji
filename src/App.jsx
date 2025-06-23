import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ExtraSlideSection from "./components/ExtraSlideSection";
import ContactPage from "./components/ContactPage";
import Gallery from "./components/Gallery";
import LineIcon from "./components/LineIcon";

function App() {
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
