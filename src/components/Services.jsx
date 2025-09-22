import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaLightbulb } from "react-icons/fa";

const services = [
  { icon: <FaUsers size={30} />, title: "Staff Augmentation", desc: "Providing skilled professionals to meet your team's needs." },
  { icon: <FaHandshake size={30} />, title: "Recruitment", desc: "Finding and placing top talent for key roles in your organization." },
  { icon: <FaLightbulb size={30} />, title: "Consulting", desc: "Offering strategic guidance to optimize your business and technology." },
];

const Services = () => {
  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-20 px-4 md:px-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Our Services</h2>
      <div style={{background: 'linear-gradient(to right, coral, #FFFDD0)', height: "1.5vh"}} className="mb-4"></div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 bg-white rounded-xl shadow-lg border-2 border-gray-200"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 text-blue-900">{service.title}</h3>
              <p className="text-center text-gray-600">{service.desc}</p>
              <a href="#" className="flex items-center font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                FIND OUT MORE
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
