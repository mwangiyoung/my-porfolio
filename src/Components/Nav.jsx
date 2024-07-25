import React from 'react';

function Nav
(){
  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-2xl py-3">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-sky-800">Home</a></li>
          <li><a href="/about" className="hover:text-sky-800">About</a></li>
          <li><a href="/projects" className="hover:text-sky-800">Projects</a></li>
          <li><a href="/contact" className="hover:text-sky-800">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default  Nav;