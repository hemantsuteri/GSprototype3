import React from "react";
// import personImg from "../../assets/person2.png";
import Home from "../../assets/Home.jpg";

const Hero = () => {
  return (
    <>
      <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]">
                    {/* image container */}
          <div>
            <img
              src={Home}
              alt="Not found"
              // className="w-full md:max-w-lg mx-auto"
              className="w-full md:max-w-lg mx-auto rounded-[10%]"
            />
          </div>
          <div>
            {/* <div className="space-y-2 grid justify-items-center sm:justify-items-start"> */}
            {/* <div className="space-y-2 grid justify-items-center sm:justify-items-start mr-10"> */}
            <div className="space-y-2 grid justify-items-center sm:justify-items-start ml-10">

              {/* <p className="uppercase">Hello</p> */}
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                Gapsera
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                The Tech Consulting firm. 
                {/* & <br /> Developer Outsourcing */}
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                We provide the one Step Solution for all your needs to  boost your bussiness. 
              </p>
              {/* <a
                href="mailto:abc@gmailcom"
                className="inline-block primary-btn !px-6"
              >
                Mail Us
              </a> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
