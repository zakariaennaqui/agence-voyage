import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DestinationDetails from './pages/DestinationDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
