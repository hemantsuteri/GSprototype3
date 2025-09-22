import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import LandingPage from './components/LandingPage';
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel"
import VisionMission from './components/VisionMission';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import logonew3 from "./assets/logonew3.png"

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  return (
    <div className="font-sans bg-white text-gray-900">

      <Helmet>
        <link rel="apple-touch-icon" href={logonew3} />
        <link rel="manifest" href={logonew3} />
        <title>Noventia -Accelerate with Confidence, Scale with Noventia 🚀</title>
        <meta name="description" content="Helping you scale with innovative technology consulting" />
        <meta property="og:title" content="Noventia Consulting – Tech Strategy Experts" />
        <meta property="og:description" content="Helping you scale with innovative technology consulting" />
      </Helmet>

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        {/* <Hero isMenuOpen={isMenuOpen} /> */}
        <LandingPage isMenuOpen={isMenuOpen}/>
        <Carousel />
        <About />
        <VisionMission/>
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
