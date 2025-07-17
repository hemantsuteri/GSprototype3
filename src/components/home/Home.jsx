import { useEffect } from "react";
import Hero from "../hero/Hero"
import About from "../about/About";
import Services from "../services/Services";
import Footer from "../footer/Footer";

function Home({ isMenuOpen }) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <Hero isMenuOpen={isMenuOpen} />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
