import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-[#6b7280]/30 bg-[#0a0a0f] mt-10 md:mt-20 py-6 md:py-8 z-10 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#00e5ff]/50 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="flex items-center gap-2 font-mono text-xs text-[#6b7280]">
                    <span className="text-[#00e5ff]">©</span>
                    <span>{currentYear}</span>
                    <span className="text-white font-pixel text-[10px] ml-1">JOY ABRIAN RANTEPASANG</span>
                    <span className="opacity-70">. ALL RIGHTS RESERVED.</span>
                </div>

                <div className="flex items-center gap-3 font-mono text-[10px] text-[#6b7280] opacity-50 sm:flex">
                    <div className="flex gap-1">
                        <span className="h-2 w-2 bg-[#00ffcc] rounded-full animate-pulse"></span>
                        <span className="h-2 w-2 bg-[#ff0055] rounded-full animate-pulse delay-75"></span>
                        <span className="h-2 w-2 bg-[#00e5ff] rounded-full animate-pulse delay-150"></span>
                    </div>
                    <span>SYSTEM_ONLINE</span>
                </div>

            </div>
        </footer>
    );
}