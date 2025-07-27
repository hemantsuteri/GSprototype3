import { useEffect } from "react";
import Hero from "../hero/Hero"
import About from "../about/About";
import Services from "../services/Services";
import Footer from "../footer/Footer";

function Home({ isMenuOpen }) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div 
    // className={`
    className="
    transition-all
    duration-700
    ease-in-out
    transform
    h-[100vh] translate-x-0"
    // transition-transform duration-300 ease-in-out
    // ${isMenuOpen ? 'scale-70' : ''}
    // ${!isMenuOpen ? 'hover:scale-70' : ''}
  // `}
  >
      <Hero isMenuOpen={isMenuOpen} />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
