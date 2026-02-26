import React, { useState } from 'react';

export default function Navbar() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

return (
        <nav className="fixed top-0 w-full z-60 bg-[#0a0a0f]/90 backdrop-blur-sm border-b border-[#00e5ff]/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
            
            <a href="#" className="font-pixel text-[#00e5ff] text-[10px] md:text-xs tracking-widest hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]">
                JOY<span className="animate-blink">_</span>
            </a>

            <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-sm text-[#e0e0e0]">
            <li><a href="/" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_8px_#00e5ff] transition-all">HOME</a></li>
            <li><a href="/experiences" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_8px_#00e5ff] transition-all">EXPERIENCES</a></li>
            
            <li className="relative group py-2">
                <button className="flex items-center gap-2 hover:text-[#00e5ff] hover:drop-shadow-[0_0_8px_#00e5ff] transition-all outline-none">
                PROJECTS <span className="text-[8px] mt-1 transition-transform group-hover:rotate-180">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-0 w-48 bg-[#0a0a0f]/95 backdrop-blur-md border border-[#00e5ff]/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 flex flex-col shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                <a href="/projects/games" className="px-4 py-3 text-sm hover:bg-[#00e5ff]/20 hover:text-[#00e5ff] hover:pl-6 transition-all border-b border-[#6b7280]/20 relative group/item">
                    <span className="absolute left-2 opacity-0 group-hover/item:opacity-100 text-[#00e5ff] transition-opacity">►</span> Game Projects
                </a>
                <a href="/projects/others" className="px-4 py-3 text-sm hover:bg-[#00e5ff]/20 hover:text-[#00e5ff] hover:pl-6 transition-all relative group/item">
                    <span className="absolute left-2 opacity-0 group-hover/item:opacity-100 text-[#00e5ff] transition-opacity">►</span> Other Projects
                </a>
                </div>
            </li>

            <li><a href="/certificate" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_8px_#00e5ff] transition-all">CERTIFICATE</a></li>
            <li><a href="/blog" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_8px_#00e5ff] transition-all">BLOG</a></li>
            </ul>

            <button 
            className="md:hidden text-[#00e5ff] font-pixel text-[10px] hover:text-[#ff0055] transition-colors outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? '[CLOSE]' : '[MENU]'}
            </button>
        </div>

        {isMobileMenuOpen && (
            <div className="md:hidden bg-[#0a0a0f] border-b border-[#00e5ff]/30 font-mono text-sm max-h-[80vh] overflow-y-auto">
                <ul className="flex flex-col p-4 space-y-4">
                    <li><a href="/" className="block hover:text-[#00e5ff] transition-colors">{">"} HOME</a></li>
                    <li><a href="/experiences" className="block hover:text-[#00e5ff] transition-colors">{">"} EXPERIENCES</a></li>
                    <li className="pt-2">
                    <span className="block text-[#ff0055] mb-2">{">"} PROJECTS :</span>
                    <ul className="pl-4 border-l border-[#00e5ff]/30 space-y-3">
                        <li><a href="/projects/games" className="block hover:text-[#00e5ff] transition-colors">├─ Game Projects</a></li>
                        <li><a href="/projects/others" className="block hover:text-[#00e5ff] transition-colors">└─ Other Projects</a></li>
                    </ul>
                    </li>
                    <li className="pt-2"><a href="/certificate" className="block hover:text-[#00e5ff] transition-colors">{">"} CERTIFICATE</a></li>
                    <li><a href="/blog" className="block hover:text-[#00e5ff] transition-colors">{">"} BLOG</a></li>
                </ul>
            </div>
        )}
        </nav>
    );
}