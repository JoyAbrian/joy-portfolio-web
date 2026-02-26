import React from 'react';
import CRTOverlay from './components/CRTOverlay';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Experiences from './pages/Experiences';
import NotFound from './pages/NotFound';
import GameProjects from './pages/GameProjects';
import GameDetail from './pages/GameDetail';
import OtherProjects from './pages/OtherProjects';
import OtherProjectDetail from './pages/OtherProjectsDetail';
import Certifications from './pages/Certifications';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

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
        <Route path='/projects/others' element={<OtherProjects />} />
        <Route path='/projects/others/:id' element={<OtherProjectDetail />} />
        <Route path='/certificate' element={<Certifications />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}