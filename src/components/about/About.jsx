import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white py-10">
      <div className="relative font-bold container md:w-[70%] sm:py-16 py-10">
        <h1 className="text-left text-3xl md:text-4xl mb-[2%]">
          About
        </h1>

        <div className="text-slate-500 text-justify space-y-4 font-normal">
          <p>At Noventia Consulting, we bridge the gap between innovation and execution.</p>

          <p>
            We are a dynamic tech consulting company helping businesses scale with the right talent and
            technology. From expert staffing to support for platforms like SAP, Salesforce, and Microsoft,
            we ensure seamless digital transformation and reliable execution.
          </p>

          <p>
            With a flexible and client-first approach, we enable startups, SMEs, and large enterprises to stay
            ahead of the curve by offering:
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li><strong>End-to-end Tech Consulting:</strong></li>
            <li><strong>On-demand and Full-time Staffing:</strong></li>
            <li><strong>Enterprise Software Implementation & Support:</strong></li>
            <li><strong>Customized Solutions:</strong></li>
          </ul>

          <p className="mt-4">
            At Noventia Consulting, we don’t just provide services — we become your technology partner in growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
