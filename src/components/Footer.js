import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 text-white py-8">
      <div className="flex flex-col items-center">
        <p className="text-lg">Let's Connect</p>
        <a
          className="text-2xl font-bold underline"
          href="mailto:valido.william@gmail.com"
        >
          valido.william@gmail.com
        </a>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <p className="text-lg">Find Me on GitHub</p>
        <a
          className="text-2xl font-bold text-cyan-500 hover:text-cyan-400 underline"
          href="https://github.com/yourusername"
          target="_blank" rel="noreferrer"
        >
          willyvcodes
          <span className="text-xs ml-2 transform translate-y-1">🚀</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
