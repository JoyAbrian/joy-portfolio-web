import React from 'react';

export default function HeroAvatar() {
    return (
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0 group cursor-crosshair mx-auto lg:mx-0">
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-[#00e5ff] z-10 transition-all duration-300 group-hover:border-[#ff0055] group-hover:-top-4 group-hover:-left-4"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-[#00e5ff] z-10 transition-all duration-300 group-hover:border-[#ff0055] group-hover:-top-4 group-hover:-right-4"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-[#00e5ff] z-10 transition-all duration-300 group-hover:border-[#ff0055] group-hover:-bottom-4 group-hover:-left-4"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-[#00e5ff] z-10 transition-all duration-300 group-hover:border-[#ff0055] group-hover:-bottom-4 group-hover:-right-4"></div>

            <div className="w-full h-full bg-[#0a0a0f] border border-[#6b7280]/30 p-2 relative overflow-hidden">
                <img 
                src="/images/myself.jpeg" 
                alt="Avatar Karakter" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] opacity-40"></div>
            </div>
        
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-[#0a0a0f] px-3 py-1 text-[#ff0055] font-pixel text-[8px] md:text-[10px] uppercase tracking-widest border border-[#ff0055] shadow-[0_0_10px_rgba(255,0,85,0.4)]">
                Player_Entity_Found
                </span>
            </div>
        </div>
    );
}