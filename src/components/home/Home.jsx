import { useEffect } from "react";
import Hero from "../hero/Hero";
import About from "../about/About";
import Services from "../services/Services";
import Footer from "../footer/Footer";

function Home({ isMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`transition-all duration-700 ease-in-out ${
        isMenuOpen ? "transform -translate-x-[70vw] h-[80vh]" : "transform translate-x-0 h-[100vh]"
      }`}
    >
      {/* ✅ Apply scaling only to Hero */}
      <div
        className={`transition-all duration-700 ease-in-out ${
          isMenuOpen ? "scale-[0.8] origin-[70%_50%]" : "scale-100 origin-center"
        }`}
      >
        <Hero isMenuOpen={isMenuOpen} />
      </div>

      {/* The rest of the page stays unchanged */}
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
