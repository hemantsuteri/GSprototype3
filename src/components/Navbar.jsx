import { motion, AnimatePresence } from 'framer-motion';
import logonew3 from '../assets/logonew5.png';
import './Navbar.css'; 

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="navbar">
    <div className="navbar-left">
      <img src={logonew3} alt="Noventia Logo" className="navbar-logo" />
      <div className="navbar-title">
        <h1>NOVENTIA</h1>
        <h2>Talent. Technology. Transformation.</h2>
      </div>
    </div>

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

// import { motion, AnimatePresence } from 'framer-motion';

// import logonew3 from '../assets/logonew5.png';

// const Navbar = ({ isMenuOpen, setIsMenuOpen }) => (
// <nav className="flex justify-between items-center px-6 py-2 bg-white text-black shadow-md z-50 fixed top-0 left-0 right-0">
//     <div className="flex items-center">
//       <img src={logonew3} alt="Noventia Logo" className="h-15 w-24 rounded-full mr-2" />
//       <div className='flex flex-col'>
//       <h1 className="text-3xl font-bold text-blue-900 dark:text-white" style={{fontFamily : "Orbitron", letterSpacing: "3.5px"}}>
//         NOVENTIA
//       </h1>
//       <h2 className='text-sm' style={{ letterSpacing: "-0.6px"}}>Talent. Technology. Transformation. </h2>
//       </div>
//     </div>

//     {/* Desktop Nav */}
//     {/* <ul className="hidden md:flex gap-6 font-medium px-5 py-2 rounded-full bg-[#fdf5e6] dark:bg-gray-800"> */}
//     <ul className="z-2 hidden md:flex gap-6 font-medium px-5 py-2 rounded-full" style={{fontStyle : "Orbitron"}}>
//       {["Home", "About", "Services", "Contact"].map((item, idx) => (
//         <li
//           key={idx}
//           className="group px-4 py-2 rounded-full hover:bg-white transition-colors duration-300"
//         >
//           <a
//             href={`#${item.toLowerCase()}`}
//             className="text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent text-[20px] font-semibold"
//           >
//             {item}
//           </a>
//         </li>
//       ))}
//     </ul>

//     {/* Mobile menu button */}
//     <div className="md:hidden flex items-center">
//       <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-gray-700 dark:text-gray-300 focus:outline-none">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-all duration-300 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
//         </svg>
//       </button>
//     </div>

//     {/* Mobile Nav */}
//     <AnimatePresence>
//       {isMenuOpen && (
//         <motion.div
//           initial={{ x: '100vw' }}
//           animate={{ x: 0 }}
//           exit={{ x: '100vw' }}
//           transition={{ type: "tween", duration: 0.5 }}
//           className="fixed top-0 right-0 h-full w-[70vw] bg-white shadow-lg p-6 z-40 md:hidden flex flex-col items-center justify-start"
//           // className="fixed top-0 right-0 h-full w-[70vw] bg-white dark:bg-gray-800 shadow-lg p-6 z-40 md:hidden flex flex-col items-center justify-start"
//         >
//           {/* Close Button */}
//           <button 
//             onClick={() => setIsMenuOpen(false)}
//             className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 focus:outline-none"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//           <ul className="flex flex-col space-y-8 text-center text-xl mt-12 mr-[30px]">
//             {["Home", "About", "Services", "Contact"].map((item, idx) => (
//               <li
//                 key={idx}
//                 className="group px-4 py-2 rounded-full hover:bg-white transition-colors duration-300"
//               >
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-black group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent text-[20px] font-semibold"
//                   // className="text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent text-[20px] font-semibold"
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </nav>
// );

// export default Navbar;
