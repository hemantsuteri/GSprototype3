import React, { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const email = "hemantsuteri@gmail.com";

  const handleSendEmail = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-800">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleSendEmail}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition duration-200"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default Contact;
