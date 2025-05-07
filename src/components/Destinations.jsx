import React from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const destinations = [
    { id: "paris", nom: "Paris", image: "/paris.jpeg", description: "La ville lumière, pleine d’amour et d’histoire." },
    { id: "bali", nom: "Bali", image: "/bali.jpeg", description: "Plages paradisiaques et culture exotique." },
    { id: "newyork", nom: "New York", image: "/newyork.jpg", description: "La ville qui ne dort jamais." },
  ];

  return (
    <section id="destinations" className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Destinations populaires</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map(dest => (
          <Link to={`/destination/${dest.id}`} key={dest.id}>
            <div className="bg-white shadow rounded overflow-hidden hover:scale-105 transition">
              <img src={dest.image} alt={dest.nom} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{dest.nom}</h3>
                <p>{dest.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
