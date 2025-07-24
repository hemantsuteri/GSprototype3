import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import dynamic365 from "../../assets/dynamic365.jpeg";
import oracle from "../../assets/oracle.png";
import salesforce from "../../assets/Salesforce.png";
import sap from "../../assets/SAP.png";
import zoho from "../../assets/zoho.png";

const images = [
  { id: 1, url: dynamic365 },
  { id: 2, url: oracle },
  { id: 3, url: salesforce },
  { id: 4, url: sap },
  { id: 5, url: zoho },
];

const Carousel = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: { duration: 18.75, ease: "linear" },
        });
        controls.set({ x: 0 });
      }
    };

    loopAnimation();
  }, [controls]);

  return (
    <div className="overflow-hidden w-full bg-slate-100 py-6">
      <motion.div
        className="flex gap-8"
        ref={containerRef}
        animate={controls}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
      >
        {[...images, ...images].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 rounded-xl overflow-hidden shadow-md"
            style={{ width: "15vw", height: "12vh" }} // 👈 15% width, 12% height of screen
          >
            <img
              src={img.url}
              alt={`carousel-${idx}`}
              className="w-full h-full object-contain" // 👈 object-contain to preserve aspect ratio
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
