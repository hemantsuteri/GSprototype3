import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pb-16 pt-20 px-4 md:px-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-2 text-blue-900">About</h2>
        <div style={{background: 'linear-gradient(to right, coral, #FFFDD0)', height: "1.5vh"}} className="mb-3"></div>
        <p className="mb-8 text-lg text-justify">
          At Noventia Consulting, we bridge the gap between innovation and execution. We are a dynamic tech consulting company helping businesses scale with the right talent and technology. From expert staffing to support for platforms like SAP, Salesforce, and Microsoft, we ensure seamless digital transformation and reliable execution.
        </p>

        <p className="mb-4 text-lg text-justify">
          With a flexible and client-first approach, we enable startups, SMEs, and large enterprises to stay ahead of the curve by offering:
        </p>
        
        <ul className="mb-8 text-lg list-disc list-inside">
          <li>End-to-end Tech Consulting</li>
          <li>On-demand and Full-time Staffing</li>
          <li>Enterprise Software Implementation & Support</li>
          <li>Customized Solutions</li>
        </ul>

        <p className="mt-8 text-lg">
          At Noventia Consulting, we don’t just provide services; we become your trusted technology partner in growth.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
