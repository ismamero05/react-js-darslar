import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar.jsx'
import './index.css'
import Proper from './properties.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Proper />
  </React.StrictMode>
);

