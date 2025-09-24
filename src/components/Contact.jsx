import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  console.log(PUBLIC_KEY);
  useEffect(()=>{
    templateParams.name= formData?.name,
    templateParams.email= formData?.email,
    templateParams.message= formData?.message
    templateParams.subject= formData?.subject
  }, [formData])
  const templateParams = {
          name: "",
          email: "",
          message: ""
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // templateParams = {
          
    // };
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!templateParams.name || !templateParams.email || !templateParams.message || !templateParams.subject) return;

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    ).then(() => {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", subject: "" });
      setTimeout(()=>{setSuccess("")}, 5000)
    }).catch((err) => {
      console.log("error in sending", err); 
      setSuccess("Failed to send message.")});
      setTimeout(()=>{setSuccess("")}, 5000)
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-20 bg-gray-50 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy" />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}
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

      </motion.div>
    </section>
  );
};

export default Contact;
