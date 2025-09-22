import React from "react";
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section id="vision-mission" className="mb-20 px-4 md:px-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-2 text-blue-900">Our Vision & Mission</h2>
        <div style={{background: 'linear-gradient(to right, coral, #FFFDD0)', height: "1.5vh"}} className="mb-3"></div>
        <p className="mb-8 text-lg text-justify">
          At Noventia Consulting, our journey is defined by a clear vision and a steadfast mission. We are dedicated to pioneering technology solutions that drive real-world impact and foster a culture of excellence. Our aim is to be your most trusted partner in navigating the complexities of digital transformation.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Vision: The Future We Envision</h3>
            <p className="mb-4 text-justify">
              We envision a future where every business, regardless of size, can leverage cutting-edge technology to achieve unparalleled growth and efficiency. Our vision is built on a foundation of expert capabilities, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-justify">
              <li>Microsoft Dynamics 365 expertise</li>
              <li>Seamless Azure cloud integration</li>
              <li>Powerful Power Platform automation</li>
              <li>Comprehensive end-to-end ERP & CRM solutions</li>
              <li>Innovative custom application development</li>
              <li>Dynamic modern workplace solutions (M365)</li>
              <li>Informed, data-driven decision-making (Power BI)</li>
            </ul>
          </div>

          {/* Mission Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Mission: How We Get There</h3>
            <p className="mb-4 text-justify">
              Our mission is to make this vision a reality by providing high-impact, value-driven services that are people-focused and performance-oriented. We are committed to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-justify">
              <li>Providing talent on-demand</li>
              <li>Delivering specialized staff augmentation</li>
              <li>Ensuring right-skill, right-time resourcing</li>
              <li>Accelerating project delivery with efficiency</li>
              <li>Offering cost efficiency through flexible models</li>
              <li>Building seamless team extensions and partnerships</li>
              <li>Facilitating knowledge transfer & capability building</li>
              <li>Acting as a trusted advisory partner</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VisionMission;
