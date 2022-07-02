import {BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import About from './Pages/About';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import './css/style.css';
const App = () => {
  return (
   

   <BrowserRouter>
     <Navbar/>
     <AppRouter/>
 
     
   </BrowserRouter>
  );
};

export default App;


