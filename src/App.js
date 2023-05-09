import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import ServicesPrice from './Pages/ServicesPrice';
import Contact from './Pages/Contact';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galerie' element={<Gallery />} />
        <Route path='/prestations-tarifs' element={<ServicesPrice />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;