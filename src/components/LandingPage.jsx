import React from 'react';
import { motion } from "framer-motion";
import backgroundimg from "../assets/homepage9.png";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="flex flex-col w-screen relative p-[50px] md:p-[10vh 0 0 0] lg:p-[10vh 0 0 0] xl:p-[10vh 0 0 0]"
      style={{
        background: 'linear-gradient(to right, rgba(0, 100, 255, 0.2) 0%, rgba(128, 128, 128, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%)',
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center w-full z-10">
        <div className="flex justify-center items-center flex-1" style={{ height: '100%' }}>
          <img 
          // style={{paddingTop: "10%"}}
            src={backgroundimg} 
            alt="Background"
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-center text-center flex-1"> 
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{marginTop: "10%"}}
            className="flex flex-col content-center mx-5 lg:my-10 lg:ml-[50px] lg:mr-0"
          >
            <h1 
              className='mt-16 mb-2 text-transparent drop-shadow-xl text-start' 
              style={{
                background: "linear-gradient(90deg, navy, purple, magenta)",
                backgroundClip: "text",
                fontSize: "56px",
                fontWeight: "bold",
              }}
            >
              Accelerate with Confidence,
               <br/> 
              Scale with Noventia
            </h1>
            <p 
              className='mt-2 mb-8 text-center sm:text-justify w-[90vw] sm:w-[50vw]' 
              style={{
                color: "navy",
                fontSize: "20px",
                fontWeight: "bold",
                marginRight: "22px",
                lineHeight: "36px",
              }}
            >
              Noventia empowers businesses with innovative technology solutions and the right talent at the right time. From digital transformation and automation to workplace collaboration and data-driven insights, we deliver tailored applications and end-to-end business solutions. Beyond technology, we specialize in talent on-demand, right-skill resourcing, seamless team extension, and trusted advisory-ensuring accelerated project delivery, cost efficiency, and sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// import React from 'react';
// import { motion } from "framer-motion";
// import backgroundimg from "../assets/homepage9.png";

// const Hero = () => {
//   return (
//     <section 
//       id="home" 
//       className="flex flex-col w-screen relative p-[50px] md:p-[50px 50px 0 50px] lg:p-[50px 50px 0 50px] xl:p-[50px 50px 0 50px]"
//       style={{
//         background: 'linear-gradient(to right, rgba(0, 100, 255, 0.2) 0%, rgba(128, 128, 128, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%)',
//       }}
//     >
//       <div className="flex flex-col lg:flex-row items-center justify-center w-full z-10">
//         <div className="flex justify-center items-center flex-1">
//           <img 
//             src={backgroundimg} 
//             alt="Background"
//             className="object-contain w-full h-auto"
//           />
//         </div>
//         <div className="flex flex-col items-center text-center flex-1"> 
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="flex flex-col content-center"
//             style={{margin: "0 20px"}}
//           >
//             <h1 
//               className='mt-16 mb-2 text-transparent drop-shadow-xl text-start' 
//               style={{
//                 background: "linear-gradient(90deg, navy, purple, magenta)",
//                 backgroundClip: "text",
//                 fontSize: "56px",
//                 fontWeight: "bold",
//               }}
//             >
//               Accelerate with Confidence,
//                <br/> 
//               Scale with Noventia
//             </h1>
//             <p 
//               className='mt-2 mb-8 text-center sm:text-justify w-[90vw] sm:w-[50vw]' 
//               style={{
//                 color: "navy",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 marginRight: "22px",
//                 lineHeight: "36px",
//               }}
//             >
//               Noventia empowers businesses with innovative technology solutions and the right talent at the right time. From digital transformation and automation to workplace collaboration and data-driven insights, we deliver tailored applications and end-to-end business solutions. Beyond technology, we specialize in talent on-demand, right-skill resourcing, seamless team extension, and trusted advisory-ensuring accelerated project delivery, cost efficiency, and sustainable growth.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import backgroundimg from "../assets/homepage9.png"

// const Hero = () => {
//   const [imageSize, setImageSize] = useState({ width: 'auto', height: 'auto' });

//   useEffect(() => {
//     const handleResize = () => {
//       // Adjust image size for different screen widths
//       if (window.innerWidth >= 720) {
//         setImageSize({ width: '105vw', height: 'auto' });
//       } 
//       if (window.innerWidth <= 500) {
//         setImageSize({ width: '105vw', height: 'auto' });
//       } else {
//         setImageSize({ width: '90vw', height: '90vh' });
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <section 
//       id="home" 
//       className="flex flex-col min-h-screen w-screen relative mt-[10vh]"
//       style={{
//         background: 'linear-gradient(to right, rgba(0, 100, 255, 0.2) 0%, rgba(128, 128, 128, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%)',
//       }}
//     >
//       {/* Main container for both image and text, centered */}
//       {/* <div className="flex flex-row items-center justify-start w-full z-10 mt-[15vh]"> */}
//       <div className="flex flex-col lg:flex-r ow items-center justify-start w-full z-10 ">
//         {/* Centered Image */}
//         <div className="flex justify-center items-center" style={{ height: '', flexBasis: "40%" }}>
//           <img 
//             src={backgroundimg} 
//             alt="Background"
//             className="object-contain"
//             style={{ 
//               maxWidth: "100%", 
//               maxHeight: "100%", 
//               objectFit: "contain", 
//               display: "block" 
//             }} 
//             // style={{ width: imageSize.width, height: imageSize.height, padding: "80px 65px 20px 65px" }}
//           />
//         </div>

//         {/* Text Content, now horizontally centered */}
//         <div className="flex flex-col items-center text-center"> 
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="flex flex-col content-center"
//             style={{margin: "0 20px"}}
//           >
//             <h1 
//               className='mt-16 mb-2 text-transparent drop-shadow-xl text-start' 
//               style={{
//                 background: "linear-gradient(90deg, navy, purple, magenta)",
//                 backgroundClip: "text",
//                 fontSize: "56px",
//                 fontWeight: "bold",
//               }}
//             >
//               Accelerate <br/>  with Confidence,
//                <br/> 
//               Scale with Noventia
//             </h1>
//             <p 
//               className='mt-2 mb-8 text-center sm:text-justify w-[90vw] sm:w-[50vw]' 
//               style={{
//                 color: "navy",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 marginRight: "22px",
//                 // letterSpacing: "0.5px",
//                 // wordSpacing: "1px",
//                 // fontSize: "1.125rem",
//                 lineHeight: "36px",
//               }}
//             >
//               Noventia empowers businesses with innovative technology solutions and the right talent at the right time. From digital transformation and automation to workplace collaboration and data-driven insights, we deliver tailored applications and end-to-end business solutions. Beyond technology, we specialize in talent on-demand, right-skill resourcing, seamless team extension, and trusted advisory-ensuring accelerated project delivery, cost efficiency, and sustainable growth.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;