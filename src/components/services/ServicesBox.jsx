import { motion } from "framer-motion";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid, MdSecurity } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const Services = [
  {
    name: "Tech Consulting",
    description: "Lorem ipsum dolor sit amet consectetur...",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-[#98A1BC]/70",
  },
  {
    name: "Support",
    description: "Lorem ipsum dolor sit amet consectetur...",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-[#98A1BC]/70",
  },
  {
    name: "Resource Availability",
    description: "Lorem ipsum dolor sit amet consectetur...",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-[#98A1BC]/70",
  },
  {
    name: "Recruitment",
    description: "Lorem ipsum dolor sit amet consectetur...",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-[#98A1BC]/70",
  },
];

const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, icon, bgColor }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className={`${bgColor} rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
