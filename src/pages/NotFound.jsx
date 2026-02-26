import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex-1 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center relative z-10 pt-20">

            <div className="relative mb-6">
                <h1 className="font-pixel text-6xl md:text-9xl text-white drop-shadow-[4px_4px_0px_#ff0055] opacity-90">
                    404
                </h1>
                <h1 className="absolute top-0 left-1 md:left-2 font-pixel text-6xl md:text-9xl text-[#00e5ff] mix-blend-screen opacity-50 animate-pulse">
                    404
                </h1>
            </div>

            <div className="font-mono text-xs md:text-sm text-[#ff0055] bg-[#ff0055]/10 border border-[#ff0055]/50 px-6 py-3 mb-8 flex items-center gap-3">
                <div className="w-3 h-3 bg-[#ff0055] animate-ping"></div>
                <p className="tracking-widest font-bold">CRITICAL_SYSTEM_FAILURE : AREA_RESTRICTED</p>
            </div>

            <div className="font-mono text-[#6b7280] mb-10 max-w-md leading-relaxed text-sm md:text-base text-left bg-[#0a0a0f] border border-[#6b7280]/30 p-4">
                <p>{">"} Error code: <span className="text-white">0x00000404</span></p>
                <p>{">"} Memindai lokasi saat ini... <span className="text-[#ff0055]">GAGAL</span></p>
                <p className="mt-2 text-[#e0e0e0]">
                    Koordinat yang Anda tuju berada di luar jangkauan map. Silakan kembali ke titik aman terdekat.
                </p>
            </div>

            <Link
                to="/"
                className="group relative border border-[#00e5ff] bg-[#0a0a0f] text-[#00e5ff] font-pixel text-xs md:text-sm py-4 px-8 overflow-hidden hover:text-[#0a0a0f] transition-colors duration-300 shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] inline-block"
            >
                <div className="absolute inset-0 bg-[#00e5ff] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
                <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover:animate-bounce">{"<<"}</span> RETURN_TO_MAIN_MENU
                </span>
            </Link>

        </main>
    );
}