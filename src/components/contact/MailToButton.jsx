import React from "react";

const MailToButton = ({ email, subject, body }) => {
const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={href}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition duration-200"
    >
      Email Us
    </a>
  );
};

export default MailToButton;
