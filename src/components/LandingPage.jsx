import React from "react";
import { motion } from "framer-motion";
import backgroundimg from "../assets/homepage9test.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section" aria-label="Hero section">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img
            src={backgroundimg}
            alt="Illustration representing Noventia services"
            className="hero-image"
            loading="eager"
          />
        </div>

        <div className="hero-text">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="hero-heading">
              Accelerate with Confidence,
              <br />
              Scale with Noventia
            </h1>

            <p className="hero-paragraph">
              Noventia empowers businesses with innovative technology solutions
              and the right talent at the right time. From digital
              transformation and automation to workplace collaboration and
              data-driven insights, we deliver tailored applications and
              end-to-end business solutions. Beyond technology, we specialize
              in talent on-demand, right-skill resourcing, seamless team
              extension, and trusted advisory ensuring accelerated project
              delivery, cost efficiency, and sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
