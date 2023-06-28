import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css'
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import ServicesPrice from './Pages/ServicesPrice';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Dashboard from './Pages/admin/Dashboard';


const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galerie' element={<Gallery />} />
        <Route path='/prestations' element={<ServicesPrice />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/connexion' element={<Login />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;