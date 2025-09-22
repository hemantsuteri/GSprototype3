import React from "react";
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
  return (
    <div className="overflow-hidden w-full bg-slate-100 py-6">
      <div className="flex gap-8">
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
      </div>
    </div>
  );
};

export default Carousel;
