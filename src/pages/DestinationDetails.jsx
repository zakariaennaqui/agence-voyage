import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const data = {
  paris: {
    nom: "Paris",
    image: "/paris.jpeg",
    description: "Découvrez Paris, la capitale romantique, riche en culture, gastronomie et histoire.",
    infos: "Tour Eiffel, Louvre, croisières sur la Seine.",
  },
  bali: {
    nom: "Bali",
    image: "/bali.jpeg",
    description: "Un joyau indonésien avec des plages magnifiques et une culture vibrante.",
    infos: "Temples hindous, plongée, rizières en terrasse.",
  },
  newyork: {
    nom: "New York",
    image: "/newyork.jpg",
    description: "La métropole américaine pleine d'énergie, d'art et d'opportunités.",
    infos: "Statue de la Liberté, Central Park, Times Square.",
  },
};

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = data[id];
  const [showForm, setShowForm] = useState(false);

  if (!destination) return <div className="p-8 text-center text-red-600">Destination introuvable.</div>;

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <img src={destination.image} alt={destination.nom} className="w-full h-64 object-cover rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{destination.nom}</h1>
      <p className="mb-4">{destination.description}</p>
      <h3 className="text-xl font-semibold mb-2">À ne pas manquer :</h3>
      <p className="mb-6">{destination.infos}</p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mb-6"
      >
        Réserver maintenant
      </button>

      {showForm && (
        <form className="bg-gray-100 p-6 rounded shadow-md space-y-4">
          <div>
            <label className="block mb-1">Nom</label>
            <input type="text" className="w-full border rounded px-4 py-2" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full border rounded px-4 py-2" placeholder="Votre email" />
          </div>
          <div>
            <label className="block mb-1">Nombre de personnes</label>
            <input type="number" className="w-full border rounded px-4 py-2" min="1" />
          </div>
          <div>
            <label className="block mb-1">Date de départ</label>
            <input type="date" className="w-full border rounded px-4 py-2" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Envoyer la demande
          </button>
        </form>
      )}
    </section>
  );
};

export default DestinationDetails;
