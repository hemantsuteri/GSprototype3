import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        {/* Social media icons section */}
        <div className="flex justify-center items-center mb-4">
          <h4 className="text-blue-900 font-semibold text-lg mr-4">Connect with us</h4>
          <div className="flex space-x-4 text-pink-500">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:info@noventia.com" className="hover:text-pink-600 transition-colors duration-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        {/* Copyright notice */}
        <p>Copyright 
          © {new Date().getFullYear()}  Noventia Consulting - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
