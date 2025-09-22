import { useState } from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid, MdSecurity } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import techConsultingdetailed from "../../assets/techConsultingdetailed.jpg";
import supportdetail from "../../assets/supportdetail.jpg";
import resourcedetail from "../../assets/resourcedetail.jpg";
import recruitementdetail from "../../assets/recruitementdetail.jpg";

const Services = [
  {
    name: "Tech Consulting",
    description: "We provide expert technology strategy and integration services.",
    icon: <AiFillLayout className="text-4xl" />,
    image: techConsultingdetailed,
    bgColor: "bg-[#98A1BC]/70",
  },
  {
    name: "Support",
    description: "24/7 technical support to ensure business continuity.",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    image: supportdetail,
    bgColor: "bg-[#98A1BC]/70",
  },
  {
    name: "Resource Availability",
    description: "Access to skilled tech talent across various domains.",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    image: resourcedetail,
    bgColor: "bg-[#98A1BC]/70",
  },
  {
    name: "Recruitment",
    description: "Efficient hiring solutions to scale your tech teams.",
    icon: <MdSecurity className="text-4xl" />,
    image: recruitementdetail,
    bgColor: "bg-[#98A1BC]/70",
  },
];

const ServicesBox = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="my-10 container relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map((service) => (
          <div
            key={service.name}
            className={`${service.bgColor} rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay cursor-pointer`}
            onClick={() => setSelectedService(service)}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {service.icon}
              <h1 className="text-2xl font-bold">{service.name}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 z-30 w-[90%] max-w-lg bg-white text-black p-6 rounded-xl shadow-xl flex flex-col items-center" style={{ transform: 'translate(-50%, -50%)' }}>
            <img
              src={selectedService.image}
              alt={selectedService.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedService.name}</h2>
            <p className="text-center">{selectedService.description}</p>
            <div className="flex gap-10">
              <button
                className="mt-4 px-4 py-2 bg-[#98A1BC] text-white rounded"
                onClick={() => setSelectedService(null)}
              >
                Go Back
              </button>
              <Link to="/contact">
                <button
                  className="mt-4 px-4 py-2 bg-[#98A1BC] text-white rounded"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ServicesBox;
