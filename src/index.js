import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Comps/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Edit from './Pages/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/edit/:id" element={<Edit/>}  />
    </Routes>
  </BrowserRouter>
  


);

