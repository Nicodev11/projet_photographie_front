import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css'
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Service1 from './Pages/ServicesPrice/Service1';
import Service2 from './Pages/ServicesPrice/Service2';
import Service3 from './Pages/ServicesPrice/Service3';
import Service4 from './Pages/ServicesPrice/Service4';
import Service5 from './Pages/ServicesPrice/Service5';
import Service6 from './Pages/ServicesPrice/Service6';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galerie' element={<Gallery />} />
        <Route path='prestation-1' element={<Service1 />} />
        <Route path='prestation-2' element={<Service2 />} />
        <Route path='prestation-3' element={<Service3 />} />
        <Route path='prestation-4' element={<Service4 />} />
        <Route path='prestation-5' element={<Service5 />} />
        <Route path='prestation-6' element={<Service6 />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;