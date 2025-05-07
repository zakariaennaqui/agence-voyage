import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Voyages+</h1>
      <ul className="flex space-x-6 text-gray-700">
        <li><a href="#">Accueil</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
