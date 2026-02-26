import React from 'react';
import CRTOverlay from './components/CRTOverlay';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Footer from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Experiences from './pages/Experiences';
import NotFound from './pages/NotFound';
import GameProjects from './pages/GameProjects';
import GameDetail from './pages/GameDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden selection:bg-[#ff0055] selection:text-white relative flex flex-col">
      <CRTOverlay />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path='/projects/games' element={<GameProjects />} />
        <Route path='/projects/games/:id' element={<GameDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}