import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const email = "hemantsuteri@gmail.com";

  const handleSendEmail = () => {
    if (!subject || !body) {
      alert("Please fill out both subject and message.");
      return;
    }
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="bg-white dark:bg-slate-800 dark:text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-2xl mx-auto bg-[rgba(240,240,233,0.7)] dark:bg-slate-700/50 rounded-xl shadow-lg p-8 backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white">
          Contact Us
        </h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="subject" className="block font-semibold mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleSendEmail}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md transition duration-300 ease-in-out w-full sm:w-auto"
            >
              Send Email
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;