import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
        {/* <div className=""> */}
          {/* <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2"> */}
            <div className="relative font-bold container md:w-[70%] sm:py-16 py-10">
              {/* <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                ABOUT
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                About
              </h1>
            </div> */}
            {/* <div className="text-left text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
  ABOUT
</div> */}
{/* <h1 className="text-left text-3xl md:text-4xl">
  About
</h1> */}
<h1 className="text-left text-3xl md:text-4xl mb-[2%]">
  About
</h1>


<div className="text-slate-500 text-justify">
  <p>
    At Gapsera, we bridge the gap between innovation and execution.
  </p>
  <br />
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
    <li>
      <strong>End-to-end Tech Consulting:</strong>  
      {/* <p className="ml-4">
        We offer strategic guidance and technical expertise across the entire software lifecycle — from
        planning and architecture to deployment and optimization — helping you make smarter tech decisions.
      </p> */}
    </li>

    <li>
      <strong>On-demand and Full-time Staffing:</strong>
      {/* <p className="ml-4">
        Whether you need temporary specialists or permanent team members, we provide pre-vetted talent across
        roles like developers, analysts, cloud engineers, and more, to match your exact requirements.
      </p> */}
    </li>

    <li>
      <strong>Enterprise Software Implementation & Support:</strong>
      {/* <p className="ml-4">
        We help businesses implement, integrate, and manage complex platforms like SAP, Salesforce, SRP, and
        Microsoft solutions, ensuring optimal performance and smooth day-to-day operations.
      </p> */}
    </li>

    <li>
      <strong>Customized Solutions:</strong>
      {/* <p className="ml-4">
        Every business is unique. That’s why we design tailored IT solutions and support systems that align with
        your goals, workflows, and technical ecosystem — maximizing efficiency and ROI.
      </p> */}
    </li>
  </ul>
  <p className="mt-4">
    At Gapsera, we don’t just provide services — we become your technology partner in growth.
  </p>
{/*  </div> */}

              {/* <div>
                <a href="#" className="primary-btn inline-block my-6 mr-6">
                  {" "}
                  Download Resume
                </a>
                <a href="tel:+123456789" className="outline-btn inline-block ">
                  {" "}
                  Contact
                </a>
              </div> */}
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default About;
