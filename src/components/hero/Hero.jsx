
// import React from "react";
// import Home from "../../assets/Home.jpg";
import backVideo from "../../assets/backVideo.mp4"
// import keyboard from "../../assets/keyboard.mp4"
// import React from "react";
// import backVideo from "../../assets/backVideo.mp4";
import gapsera from "../../assets/gapsera.png";
// import { Typewriter } from "react-simple-typewriter";
import TypingEffect from "../typewriter/Typewriter"
const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={backVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <TypingEffect/>

      {/* Overlay to enhance contrast (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        {/* <div className="max-w-3xl w-full text-center bg-[rgba(240,240,233,0.5)] rounded-lg p-6 transition-transform duration-500 ease-in-out hover:scale-115"> */}
        {/* <div className="max-w-3xl w-full text-center bg-[rgba(240,240,233,0.5)] rounded-lg p-6 transition-transform duration-500 ease-in-out hover:scale-115"> */}
        <div className="max-w-3xl w-full text-center bg-[rgba(240,240,233,0.5)] rounded-lg p-6 transition-transform duration-500 ease-in-out hover:scale-110   hover:shadow-2xl">
        {/* <div className="flex justify-center>
        <img src={gapsera} className="h-[15%] w-[15%]" alt="Gapsera Logo"/>
        </div> */}
        <div className="flex justify-center">
  <img src={gapsera} alt="Gapsera" className="h-[15%] w-[15%]" />
</div>

          <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
            Gapsera
          </p>
          <p className="text-xl sm:text-2xl text-black dark:text-white mt-2">
            The Tech Consulting Firm.
          </p>
          <p className="text-sm sm:text-base text-black dark:text-white/70 mt-2">
            We provide the one-step solution for all your needs to boost your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div className="main">
//       <video src={backVideo} autoPlay loop muted />
// <div className="heroContent max-w-7xl px-4 sm:px-6 lg:px-12 mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-y-10 sm:gap-x-12 min-h-screen">
//   <div className="flex justify-center sm:justify-start sm:pl-6">

//   </div>

//   <div>
//     <div className="space-y-4 text-center sm:text-center px-4 sm:px-0 rounded-lg p-4 text-black"
//          style={{ backgroundColor: "rgba(240, 240, 233, 0.5)", padding:"10px" }}>
//       <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
//         Gapsera
//       </p>
//       <p className="text-xl sm:text-2xl text-black-700 dark:text-white">
//         The Tech Consulting Firm.
//       </p>
//       <p className="text-sm sm:text-base text-black-900 dark:text-white/70">
//         We provide the one-step solution for all your needs to boost your business.
//       </p>
//     </div>
//   </div>
// </div>
//          </div>
//   );
// };

// export default Hero;


// import React from "react";
// // import personImg from "../../assets/person2.png";
// import Home from "../../assets/Home.jpg";
// import backVideo from "../../assets/backVideo.mp4"

// const Hero = () => {
//   return (
//     <>
//     {/* <main className="relative w-full bg-secondary dark:bg-gray-900 dark:text-white overflow-hidden"> */}
//       <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-75 -z-10"
//       >
//         <source src={backVideo} type="video/mp4" />
//         {/* Your browser does not support the video tag. */}
//       </video>
//         <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]">
//                     {/* image container */}
//           {/* <div> */}
//           <div
//         // className="absolute inset-0 bg-cover bg-center animate-zoom-out-slow"
//         style={{ background: "../../assets/backVideo.mp4" }}
//       >
//             <img
//               src={Home}
//               alt="Not found"
//               // className="w-full md:max-w-lg mx-auto"
//               className="w-full md:max-w-lg mx-auto rounded-[10%]"
//             />
//           </div>
//           <div>
//             {/* <div className="space-y-2 grid justify-items-center sm:justify-items-start"> */}
//             {/* <div className="space-y-2 grid justify-items-center sm:justify-items-start mr-10"> */}
//             <div className="space-y-2 grid justify-items-center sm:justify-items-start ml-10">

//               {/* <p className="uppercase">Hello</p> */}
//               <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
//                 Gapsera
//               </p>
//               <p className="text-3xl text-gray-700 dark:text-white">
//                 The Tech Consulting firm. 
//                 {/* & <br /> Developer Outsourcing */}
//               </p>
//               <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
//                 We provide the one Step Solution for all your needs to  boost your bussiness. 
//               </p>
//               {/* <a
//                 href="mailto:abc@gmailcom"
//                 className="inline-block primary-btn !px-6"
//               >
//                 Mail Us
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Hero;
