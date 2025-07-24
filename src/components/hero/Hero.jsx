import React from "react";
import backVideo from "../../assets/backVideo.mp4";
import gapsera from "../../assets/gapsera.png";
import TypingEffect from "../typewriter/Typewriter";

const Hero = ({ isMenuOpen }) => {
  return (
    <div
      className={`relative h-screen overflow-hidden transition-all duration-700 ease-in-out
        ${
          isMenuOpen ? "-translate-x-[70vw] translate-y-[20px]" : "translate-x-0"
        }`}
      style={{
        width: "100vw",
      }}
    >
      {/* Background Video */}
      <video
        src={backVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Typing Effect */}
      <TypingEffect />

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-3xl w-full text-center bg-[rgba(240,240,233,0.5)] rounded-lg p-6 transition duration-500 hover:scale-105 hover:shadow-2xl">
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
