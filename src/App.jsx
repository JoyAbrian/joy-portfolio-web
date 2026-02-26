import React from 'react';
import CRTOverlay from './components/CRTOverlay';
import Navbar from './components/Navbar';
import Home from './pages/home';

export default function App() {
  return (
    <div className="bg-[#0a0a0f] text-[#e0e0e0] min-h-screen w-full flex flex-col relative overflow-x-hidden selection:bg-[#00e5ff] selection:text-[#0a0a0f]">
      
      <CRTOverlay />
      <Navbar />

      <Home />
      
    </div>
  );
}