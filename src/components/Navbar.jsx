import { motion, AnimatePresence } from 'framer-motion';
import logonew3 from '../assets/logonew5.png';
import './Navbar.css'; 

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="navbar">
  <a href="#">
    <div className="navbar-left">
      <img src={logonew3} alt="Noventia Logo" className="navbar-logo" />
      <div className="navbar-title">
        <h1>NOVENTIA</h1>
        <h2>Talent. Technology. Transformation.</h2>
      </div>
    </div>
    </a>

    {/* Desktop Nav */}
    <ul className="navbar-links">
      {["Home", "About", "Services", "Contact"].map((item, idx) => (
        <li key={idx}>
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      ))}
    </ul>

    {/* Mobile menu button */}
    <div className="navbar-menu-btn">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
      </button>
    </div>

    {/* Mobile Nav */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '100vw' }}
          transition={{ type: "tween", duration: 0.5 }}
          className="mobile-nav"
        >
          <button onClick={() => setIsMenuOpen(false)} className="close-btn">
            ✕
          </button>
          <ul>
            {["Home", "About", "Services", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
);

export default Navbar;