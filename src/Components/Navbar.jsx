import React from "react";

function Navbar() {
  return (
    <nav className="fixed w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">MyPortfolio</h1>
        <div className="space-x-6">
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;