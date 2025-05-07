import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explorez le monde avec nous</h1>
        <p className="text-lg md:text-2xl mb-6">Des voyages inoubliables aux quatre coins du monde</p>
        <a href="#destinations" className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600 transition">Voir les destinations</a>
      </div>
    </div>
  );
};

export default Hero;
