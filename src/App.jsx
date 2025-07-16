// import Navbar from "./components/navbar/Navbar.jsx";
// import Hero from "./components/hero/Hero.jsx";
// import About from "./components/about/About.jsx";
// import Skills from "./components/skills/Skills.jsx";
// import Services from "./components/services/Services.jsx";
// import Footer from "./components/footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Home from "./components/home/Home.jsx";
// import Contact from "./pages/Contact";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
              {/* <Navbar /> */}
    {/* <Hero /> */}
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Services /> */}
      {/* <Footer /> */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      // {/* <Skills /> */}
    /* <> 
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
      </> */
  );
}

export default App;
// App.jsx or App.js