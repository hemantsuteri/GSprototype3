import Hero from "../hero/Hero";
import About from "../about/About";
import Services from "../services/Services";
import Footer from "../footer/Footer";

function Home({ isMenuOpen }) {
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
