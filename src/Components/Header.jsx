import React from "react";
import myprofilepic from '../assets/myprofilepic.jpg';

function Header() {
  return (
    <header className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-800 to-gray-900">
      <img src={myprofilepic}
       alt="Profile"
       className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 " />
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Albert Mora</h1>
      <p className="text-xl mb-6">A Backend Developer | Animator | Videographer </p>
      
    </header>
  );
}

export default Header;