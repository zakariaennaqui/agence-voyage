import React from 'react';

const Offres = () => {
  const offres = [
    {
      titre: "Rome – 30% de réduction",
      image: "/rome.jpeg",
      prix: "à partir de 499€",
      description: "Découvrez les merveilles de la Rome antique avec une offre exclusive.",
    },
    {
      titre: "Maldives – Séjour tout compris",
      image: "/maldives.jpeg",
      prix: "à partir de 999€",
      description: "Séjour de rêve sur une île paradisiaque.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-8">Offres Spéciales</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {offres.map((offre, index) => (
          <div key={index} className="bg-white shadow-md rounded overflow-hidden">
            <img src={offre.image} alt={offre.titre} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{offre.titre}</h3>
              <p>{offre.description}</p>
              <span className="text-blue-600 font-bold">{offre.prix}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offres;
