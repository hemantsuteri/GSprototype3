import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData,
      "YOUR_PUBLIC_KEY"
    ).then(() => {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }).catch(() => setSuccess("Failed to send message."));
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-20 bg-gray-50 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-navy mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy" />
          <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy" />
          <button type="submit" className="p-3 bg-gradient-to-r from-navy to-magenta text-white rounded-xl shadow-lg hover:scale-105 transition-transform">
            Send Message
          </button>
        </form>
        {success && <p className="mt-4 text-green-500">{success}</p>}

        {/* Optional floating icons */}
        {/* <div className="absolute right-4 bottom-4 flex flex-col gap-4">
          <a href="mailto:example@noventia.com" target="_blank" className="text-navy hover:text-magenta"><FaEnvelope size={24} /></a>
          <a href="https://linkedin.com" target="_blank" className="text-navy hover:text-magenta"><FaLinkedin size={24} /></a>
        </div> */}
      </motion.div>
    </section>
  );
};

export default Contact;
