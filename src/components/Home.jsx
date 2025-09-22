import Hero from './Hero';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Footer from './Footer';
import Carousel from "./Carousel"
import VisionMission from './VisionMission';

const Home = ({ isMenuOpen }) => (
  <div className={`transition-all duration-700 ease-in-out ${isMenuOpen ? 'transform -translate-x-[70vw] h-[80vh] overflow-hidden' : 'transform translate-x-0 h-[90vh]'}`}>
    <div className={`pt-20 transition-all duration-700 ease-in-out ${isMenuOpen ? 'scale-[0.9] origin-[70%_50%]' : 'scale-100 origin-center'}`}>
      <Hero />
      <Carousel/>
      <VisionMission/>
      <About />
      <Services />
      <Footer />
    </div>
  </div>
);

export default Home;
