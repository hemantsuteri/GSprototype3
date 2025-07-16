import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import techConsulting from "../../assets/techConsulting.jpg"
// import techConsulting from "../../assets/techConsulting.jpg"

const Services = [
  {
    name: "Tech Consulting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
    // image: "https://images.pexels.com/photos/8927463/pexels-photo-8927463.jpeg",
    // image: { techConsulting: 'path-to-image' },
    icon: <AiFillLayout className="text-4xl" />,
    // bgColor: "bg-blue-500/70",
    bgColor: "bg-[#98A1BC]/70",
  },
  {
    name: "Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
    // image: "https://picsum.photos/200/301",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    // bgColor: "bg-lime-500/70",
    bgColor: "bg-[#98A1BC]/70",
  },
  {
    name: "Resource Availability",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
    // image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    // bgColor: "bg-fuchsia-500/70",
    bgColor: "bg-[#98A1BC]/70",
  },
  {
    name: "Recruitment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
    // image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
    // bgColor: "bg-orange-500/70",
    bgColor: "bg-[#98A1BC]/70",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            style={{ backgroundImage: `url(${image})` }}
            className={`${bgColor} rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
