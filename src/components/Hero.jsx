// import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import homepage from "../assets/homepage4.png";
// import bg from "../assets/bg.jpg"

// const Hero = () => {
//   const [imageWidth, setImageWidth] = useState('100vw');

//   useEffect(() => {
//     const handleResize = () => {
//       // Set the width based on your logic: 720px for large screens, 100vw for smaller
//       if (window.innerWidth >= 720) {
//         setImageWidth('720px');
//       } else {
//         setImageWidth('100vw');
//       }
//     };

//     // Set initial width on component mount
//     handleResize();

//     // Add event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <section 
//       id="home" 
//       className="flex flex-col items-center justify-center min-h-screen w-screen"
//       // style={{
//       //   backgroundImage: `url(${bg})`,
//       //   backgroundSize: 'cover',
//       //   backgroundPosition: 'center',
//       //   backgroundRepeat: 'no-repeat'
//       // }}
//     >
//       <div className="flex flex-col items-center text-center">
//         <div style={{ width: imageWidth, marginTop: "15vh" }} className="h-auto">
//           <img
//             src={homepage}
//             alt="Homepage"
//             className="w-full h-auto"
//           />
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mt-8"
//         >
//           <h1 className='mt-2 mb-4' style={{
//             background: "linear-gradient(90deg, navy, purple, magenta)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             fontSize: "48px",
//             fontWeight: "bold",
//             textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//             fontStyle : "Orbitron"
//           }}>NOVENTIA CONSULTING</h1>
//           <h2 className='mt-2 mb-8' style={{
//             background: "linear-gradient(90deg, navy, purple, magenta)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             fontSize: "24px",
//             fontWeight: "bold",
//             textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//             fontStyle : "Orbitron"
//           }}
//             >Accelerate with confidence, Scale with Noventia</h2>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
