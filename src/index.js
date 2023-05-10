import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
        <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
