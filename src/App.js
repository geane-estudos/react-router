import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';

function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/sobre' element={<About />}/>
    <Route path='*' element={<NaoEncontrada/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
