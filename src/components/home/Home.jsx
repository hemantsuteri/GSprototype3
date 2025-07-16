// import Navbar from "./components/navbar/Navbar.jsx";
// import Hero from "./components/hero/Hero.jsx";
// import About from "./components/about/About.jsx";
// import Skills from "./components/skills/Skills.jsx";
// import Services from "./components/services/Services.jsx";
// import Footer from "./components/footer/Footer.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import About from "../about/About";
// import Skills from "../skills/Skills";
import Services from "../services/Services";
import Footer from "../footer/Footer"
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    // <Router>
    //   <Routes>
    //           {/* <Navbar /> */}
    // {/* <Hero /> */}
    //   {/* <About /> */}
    //   {/* <Skills /> */}
    //   {/* <Services /> */}
    //   {/* <Footer /> */}
    //     <Route path="/" element={<Home />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </Router>
    <> 
      <Navbar />
      <Hero />
      <About />
    {/* // <Skills /> */}
      <Services />
      <Footer />
      </>
  );
}

export default Home;
