"use client"
import { useState } from "react";
import { socialMedia } from "@/constants";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      className="w-full pt-20 pb-10 bg-gradient-to-tr from-black via-gray-950 to-gray-800 relative text-white"
      id="contact"
    >
      <div className="flex flex-col items-center relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-snug max-w-3xl">
          Ready to take your <span className="text-blue-500"> digital presence </span>  to the next level?
        </h1>

        <p className="text-gray-500 mt-8 text-lg md:text-xl text-center  font-medium">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>

        <div className="flex items-center gap-6 mt-10 relative">
          {socialMedia.map(({ id, icon: Icon, url, copy, email }) => (
            <div key={id} className="relative">
              {copy ? (
                <button
                  onClick={() => handleCopy(email)}
                  className="w-14 h-14 flex justify-center items-center bg-black/60 border border-gray-700 rounded-xl text-white hover:text-purple-400 transition-all duration-300 shadow-md hover:scale-105"
                >
                  <Icon size={28} />
                </button>
              ) : (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex justify-center items-center bg-black/60 border border-gray-700 rounded-xl text-white hover:text-purple-400 transition-all duration-300 shadow-md hover:scale-105"
                >
                  <Icon size={28} />
                </a>
              )}

              {copy && copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm text-green-400 font-medium">
                  Copied!
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
