import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-12 px-4 bg-white" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8">Contactez-nous</h2>
      <form className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-1">Nom</label>
          <input type="text" className="w-full border rounded px-4 py-2" placeholder="Votre nom" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full border rounded px-4 py-2" placeholder="Votre email" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Message</label>
          <textarea className="w-full border rounded px-4 py-2" rows="4" placeholder="Votre message..."></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Envoyer</button>
      </form>
    </section>
  );
};

export default ContactForm;
